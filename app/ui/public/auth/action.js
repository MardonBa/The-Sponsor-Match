"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

// May need to have some different authentication logic later based on the provider,
// just add conditionals
export async function oauthLogin(prov) {

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
      provider: prov,
      options: {
          redirectTo: 'http://localhost:3000/auth/callback',
      }
  });

  if (data.url) {
    console.log(data.url);
    redirect(data.url);
  }
}

// Supabase doesn't support instagram oauth, so I have to build it out myself. This function essentially does what supabase.auth.signInWithOAuth does
export async function instagramOauthLogin(provider) { // Don't need to actually do anything with the parameter, it just needs to be there
  const scopes = 'instagram_business_basic instagram_business_manage_messages instagram_business_manage_comments'
  const redirectUri = encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback/instagram`);
  const authUrl = `https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=${process.env.INSTAGRAM_APP_ID}&redirect_uri=${redirectUri}&response_type=code&scope=${scopes}`;

  redirect(authUrl);
}