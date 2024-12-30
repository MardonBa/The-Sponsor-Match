"use server";

import { createClient } from "@/utils/supabase/server";
import { sanitizeInput } from "@/app/lib/auth/validation";

export async function updateSponsor(formData) {
  // initialize the supabase client
  const supabase = await createClient();
  // get the user's uid from current session
  let { data } = await supabase.auth.getUser();
  const userId = data.user.id; // We can be sure that the user exists since they can't access this page without an authenticated session
  // rpc call to update the user in the sponsors table
  let error;
  ({data, error} = await supabase.rpc(
    'update_sponsor', {
    cur_user_id: userId, 
    new_company_name: sanitizeInput(formData.companyName, 'text'), 
    new_industry: sanitizeInput(formData.industry, 'text'), 
    new_size: sanitizeInput(formData.companySize, 'number', {
      min: 1,
      max: Infinity
    })
  }));
  if (error) {
    console.error(error);
    // return failure if there's an error
    return {success: false, error};
  } else {
    // return success if there's no error
    return {success: true, error: null};
  }
}

export async function updateSponsorPlatforms(formData) {
  // initialize supabase client
  const supabase = await createClient();
  // get user's uid from current session
  let { data } = await supabase.auth.getUser();
  const userId = data.user.id; // We can be sure that the user exists since they can't access this page without an authenticated session
  // get the sponsor's id based on the user id 
  let sponsorId;
  let error;
  ({ data, error } = await supabase.rpc(
  'get_sponsor_id', {
    user_id: userId
  }));
  if (error) {
    console.error(error);
    // return failure if there's an error
    return {success: false, error};
  } else {
    sponsorId = data;
  }

  let platformId;
  let platformName;
  // iterate over each platform
  for (let i = 0; i < formData.platforms.length; i++) {
    // get the platform name
    platformName = formData.platforms[i]
    // rpc call to get the id associated with the platform
    let { data, error } = await supabase.rpc(
      'get_platform_id', {
      name: platformName
    });
    if (error) { 
      console.error(error);
      // return failure if there's an error
      return {success: false, error};
    } else {
      platformId = data;
    }
    // add the sponsor - platform combo to the platforms_sponsors table via rpc call 
    ({ data, error } = await supabase.rpc(
    'insert_platform_sponsor', {
      new_platform_id: platformId, 
      new_sponsor_id: sponsorId
    }));
    if (error) {
      console.error(error);
      // return failure if there's an error
      return {success: false, error};
    }
  }
  // return success if there's no error that ever gets raised, once the for loop is done
  return {success: true, error: null};
}

// no need to rewrite a function to add the formats, since it is user type agnostic