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
          redirectTo: 'http://localhost:3000/auth/callback'
      }
  });

  if (data.url) {
    redirect(data.url);
  }
}