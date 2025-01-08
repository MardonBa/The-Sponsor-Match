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
        client_secret: process.env.INSTAGRAM_APP_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback/instagram`,
        code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return NextResponse.redirect(origin);
    }

    const { accessToken } = tokenData;

    const { longLivedAccessToken, expiresIn } = getLongLivedToken(accessToken);

    // create a supabase instance
    const supabase = await createClient();
    
    /*
     save the token to database
    */

    // get the user id
    const { data: { user } } = await supabase.auth.getUser()
    const userId = user.id

    // get the creator id based on the user id
    let { data, error } = await supabase.rpc(
      'get_creator_id', {
        user_id: userId
    });
    if (error) {
      console.error(error);
      return NextResponse.redirect(origin);
    }
    const creatorId = data;

    // get the platform id for instagram
    ({ data, error } = await supabase.rpc(
      'get_platform_id', {
        name: 'instagram'
    }));
    if (error) {
      console.error(error);
      return NextResponse.redirect(origin);
    }
    const platformId = data;
    // rpc call to update platforms_creators based on the creator_id
    ({ data, error } = await supabase.rpc(
      'update_platforms_creators', {
        creator_id: creatorId, 
        expires_in_seconds: expiresIn, 
        new_access_token: longLivedAccessToken, 
        new_refresh_token: null, 
        platform_id: platformId
    }));

    if (error) {
      console.error(error);
      return NextResponse.redirect(origin);
    }

    // need to see about how i can automatically refresh the user's token (if possible)
    // redirect user to the next page
  }
}
