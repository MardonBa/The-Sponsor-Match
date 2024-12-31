"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

// May need to have some different authentication logic later based on the provider,
// just add conditionals
export async function oauthLogin(prov) {

  const supabase = await createClient();

  let scopes;
  if (prov == 'facebook') {
    scopes = 'read_insights pages_read_engagement pages_show_list user_friends pages_read_user_content';
  } else if (prov == 'google') {
    scopes = '/auth/yt-analytics.readonly /auth/userinfo.email /auth/userinfo.profile openid'
  }

  const { data, error } = await supabase.auth.signInWithOAuth({
      provider: prov,
      options: {
          redirectTo: 'http://localhost:3000/auth/callback',
          scopes
      }
  });

  if (data.url) {
    redirect(data.url);
  }
}