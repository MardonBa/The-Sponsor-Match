"use server";

import { createClient } from "@/utils/supabase/server";
import { sanitizeInput } from "../../lib/auth/validation";

export default async function insertUser(formData) {

    const supabase = await createClient();
    const userType = formData.accountType;

    // get the user's uid from the current session
    let { data } = await supabase.auth.getUser();
    const userId = data.user.id; // We can be sure that the user exists since they can't access this page without an authenticated session

    // check if the username is taken
    let error;
    ({ data, error } = await supabase.rpc(
    'is_username_taken', {
      input_username: formData.username
    }));
    if (error) {
      console.error(error);
      return {success: false, error, details: {
        message: 'Sorry, that username is alraedy taken!'
      }};
      // TODO add more error handling if necessary
    }

    // rpc call to insert the user
    ({ data, error } = await supabase.rpc(
      'insert_user', {
      user_id: userId, 
      username: sanitizeInput(formData.username, 'text')
      }));
    if (error) {
      console.error("Error inserting into users table: ");
      console.error(error);
    }
    // check if it is a creator or a sponsor
    if (userType == 'content-creator') {
      // if creator, generate them a uuid for the creators table
      // insert into that table based on the user_id and the generated uuid
      ({ data, error } = await supabase.rpc(
        'insert_creator', {
        user_id: userId
      }));
      if (error) {
        console.error("Error inserting into creators table: ");
        console.error(error);
        return {success: false, error}
      } else {
        return {success: true, error: null}
      }
    } else {
      // if sponsor, generate them a uuid for the sponsors table
      // insert into that table based on the user_id and the generated uuid
      ({ data, error } = await supabase.rpc(
        'insert_sponsor', {
        user_id: userId
      }));
      if (error) {
        console.error("Error inserting into sponsors table: ");
        console.error(error);
        return {success: false, error}
      } else {
        return {success: true, error: null}
      }
    }
}