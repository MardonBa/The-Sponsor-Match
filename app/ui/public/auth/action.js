"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function loginWithGoogle(response) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
          redirectTo: 'localhost:3000/auth/callback'
      }
  });

  console.log(data.url);

  if (data.url) {
      redirect(data.url);
  }
}