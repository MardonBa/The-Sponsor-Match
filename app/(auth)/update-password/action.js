"use server";

//import { createClient } from "@/utils/supabase/server";
import { sanitizeInput } from "@app/lib/auth/validation";
import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

export default async function resetPassword(newPassword, id) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const validPassword = sanitizeInput(newPassword, password);
  if (validPassword) {
    const { data, error } = await supabase.auth.admin.updateUserById(id, {
      password: newPassword,
    });

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