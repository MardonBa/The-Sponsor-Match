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

export default async function resetPassword(email, newPassword) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );
  console.log(email);
  const { data, error } = await supabase.rpc('get_user_id_by_email', { email }, { get: true });
  console.log(data);

  //const { data, error } = await supabase.auth.admin.getUserById(1)

  if (error) {
    // TODO error handling
    // there shouldn't be an error because the email is already checked to exist earlier
  }

  /*

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

  */
}