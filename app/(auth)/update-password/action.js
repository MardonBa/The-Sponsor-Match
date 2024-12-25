"use server";

//import { createClient } from "@/utils/supabase/server";
import { validatePassword } from "@/app/lib/auth/validation";
import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

/*
- create an admin client
- get the uid from the email
https://stackoverflow.com/questions/68334303/supabase-how-to-query-users-by-email
- update password, access the user through their uid
*/

// get user id by email when they enter it
// put it in a query string for the update-password redirect
// pass the user id into this function
// update the password based on the user id (maybe need to create a session, update, clear the session)

export default async function resetPassword(newPassword, id) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const validPassword = validatePassword(newPassword);
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