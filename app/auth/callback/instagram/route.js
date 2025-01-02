import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = '/create-account';

  if (code) {
    // exchange the code for a short-lived auth token
    const tokenResponse = await fetch('https://api.instagram.com/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: process.env.INSTAGRAM_APP_ID,
        client_secret: process.envINSTAGRAM_APP_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback/instagram`,
        code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return NextResponse.redirect(origin);
    }

    const { accessToken, userId } = tokenData;
    
    // exchange the short lived token for a long lived one https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/business-login
    const longLivedTokenResponse = await fetch('https://graph.instagram.com/access_token', {
      method: 'GET',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'ig_exchange_token',
        client_secret: process.env.INSTAGRAM_APP_SECRET,
        access_token: accessToken,
      }),
    });
    
    const longLivedTokenData = await longLivedTokenResponse.json();
    
    if (longLivedTokenData.error) {
      return NextResponse.redirect(origin);
    }

    const { access_token, expires_at } = longLivedTokenData;

    // save the token to database
    // need to see about how i can automatically refresh the user's token (if possible)
    // redirect user to the next page
    const forwardedHost = request.headers.get('x-forwarded-host'); // original origin before load balancer
    const isLocalEnv = process.env.NODE_ENV === 'development';
    if (isLocalEnv) {
      // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
      return NextResponse.redirect(`${origin}${next}`);
    } else if (forwardedHost) {
      return NextResponse.redirect(`https://${forwardedHost}${next}`);
    } else {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }
}
