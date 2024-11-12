"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function loginWithGoogle() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
          redirectTo: 'http://localhost:3000/auth/callback'
      }
  });

  if (data.url) {
      redirect(data.url);
  }
}

export async function loginWithTwitch() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "twitch",
    options: {
      redirectTo: 'http://localhost:3000/auth/callback'
    },
  });
  
  if (data.url) {
    redirect(data.url);
  }
}