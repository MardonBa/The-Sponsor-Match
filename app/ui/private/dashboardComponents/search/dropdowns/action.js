"use server";

import { createClient } from "@/utils/supabase/server";

// This function is used in dropdownContainer.js to get the user type, 
// so that it can display the right text and options 
// returns either "creator" or "sponsor"
export async function getUserType() {
  // create a supabase session
  const supabase = await createClient();
  // get the user_id from the session
  const userId = supabase.auth.user().id;
  // check if the user_id matches a record in the creators table using get_creator_id
  let { data, error } = await supabase.rpc(
    'get_creator_id', {
      user_id: userId
    });
  if (error) {
    console.error(error); // this really should never happen. I don't even know what to do if it does. 
    // TODO come up with some error handling
  }
  // if it does, return "creator"
  if (data) {
    return "creator";
  } else {  // if it doesn't, return "sponsor"
    return "sponsor";
  }
}