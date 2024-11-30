"use server";

import { createClient } from "@/utils/supabase/server";
import { validatePassword } from "@/app/lib/auth/validation";
import { redirect } from "next/navigation";


export default async function resetPassword(newPassword) {
  const supabase = await createClient();

  const validPassword = validatePassword(newPassword);
  // for some reason the user is being authenticated when this gets called, that is wrong
  if (validPassword) {
    const { data, error } = await supabase.auth.updateUser({ password: newPassword });

    if (error) {
      // TODO add error handling
      console.log("err: " + error);
    }
    redirect('/log-in');
    // do nothing with the data
  } else {
    // TODO handle what happens. this should never really run though since the password is validated on the client side first
  }
}