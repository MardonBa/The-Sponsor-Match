"use server";

import { createClient } from "@supabase/supabase-js";

export default async function handleRequestPasswordResetLink(email) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { data, error } = await supabase.rpc('get_user_id_by_email', { email: email }, { get: true });
  console.log(email);
  if (error) {
    // handle error
    //console.log("err: " + error);
    throw error;
    return;
  }

  fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/rpc/get_user_id_by_email`, {
    method: 'POST',
    headers: {
      apiKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: 'mardon.junior@gmail.com' }),
  })
    .then((res) => res.json())
    .then(console.log)
    .catch(console.error);
  console.log(data);
  const id = data[0].id; // Gets the user id returned from the function

  // the data returned by this function doesn't need to be used
  // the error doesn't need to be used either, because it would raise an error if the email doesn't
  // exist, which is already checked for by the previous function and if-statement

  // i think calling this function is what creates an authenticated session
  // TODO: for some reason i keep getting an invalid email url. This needs fixing
  // hopefully this should be fixed. the server is slow and is making testing if my code works a pain, but test this when i can
  // TODO: from here i need to update the user's password in the update-password action, then figure out how to prevent an authenticated session from being created
  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/update-password?id=${id}`
  });

  // make sure user isn't authenticated after this action is called

}