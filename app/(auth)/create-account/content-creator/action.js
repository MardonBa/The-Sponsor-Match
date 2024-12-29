"use server";

import { createClient } from "@/utils/supabase/server";

export async function updateCreator(formData) {
  // initialize supabase client
  const supabase = await createClient();
  // get the user's uid from the current session
  let { data } = await supabase.auth.getUser();
  const userId = data.user.id; // We can be sure that the user exists since they can't access this page without an authenticated session
  // rpc call to update the user in the creators table
  let error;
  ({ data, error } = await supabase.rpc(
    'update_creator', {
    cur_user_id: userId, 
    new_community_size: formData.size, 
    new_content_frequency: formData.frequency, 
    new_niche: formData.niche
  }))
  if (error) {
    console.error(error)
    // return failure if there's an error
    return {success: false, error};
  }
  else {
    // return success if there's no error
    return {success: true, error: null};
  }  
}

export async function updateCreatorPlatforms(formData) {
  // initialize supabase client
  const supabase = await createClient();
  // get the user's uid from the current session
  let { data } = await supabase.auth.getUser();
  const userId = data.user.id; // We can be sure that the user exists since they can't access this page without an authenticated session
  // get the creator id based on the user id
  let creatorId;
  let error;
  ({ data, error } = await supabase
  .rpc('get_creator_id', {
    user_id: userId
  }))
  if (error) {
    console.error(error);
    // return failure if there's an error
    return {success: false, error};
  } else {
    creatorId = data;
  }

  let platformId;
  let platformName;
  // iterate over each platform
  for (let i = 0; i < formData.platforms.length; i++) {
    // get the platform name
    platformName = formData.platforms[i];
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
    // add the creator - platform combo to the platforms_creators table via rpc call 
    ({ data, error } = await supabase
    .rpc('insert_platform_creator', {
      new_creator_id: creatorId, 
      new_platform_id: platformId
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

export async function updateCreatorFormats(formData) {
  // initialize supabase client
  const supabase = await createClient();
  // get the user's uid from the current session
  let { data } = await supabase.auth.getUser();
  const userId = data.user.id; // We can be sure that the user exists since they can't access this page without an authenticated session

  // iterate over each format
  let formatId
  let formatName;
  for (let i = 0; i < formData.formats.length; i++) {
    // rpc call to get the id associated with the format
    formatName = formData.formats[i];
    console.log("format name: " + formatName);
    let { data, error } = await supabase.rpc(
    'get_format_id', {
      format_name: formatName
    })
    if (error) {
      console.error(error);
      // return failure if there's an error
      return {success: false, error};
    }
    else {
      console.log("data: " + data)
      formatId = data;
    }
    // add the user - platform combo to the creators-formats table via rpc call 
    ({ data, error } = await supabase.rpc(
      'insert_user_format', {
      format_id: formatId, 
      user_id: userId
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