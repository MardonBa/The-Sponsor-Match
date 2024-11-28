"use server";

import { createClient } from "@/utils/supabase/server";

export default async function handleRequestPasswordResetLink(email) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://localhost:3000/update-password',
  })

  if (error) {
    // handle error
    console.log("err: " + error);
  }
}