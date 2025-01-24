import { createClient } from "@/utils/supabase/server";

export async function getCreatorData(username) {
  // create a supabase client
  const supabase = await createClient();
  let data; // needs to be defined up here to avoid an error
  let user;
  // get the user_id based on username
  let { data: id, error } = await supabase.rpc(
    'get_user_id_from_username', {
    name: username
  });
  if (error) {
    console.error(error);
  } 
  // get creator info based on user_id
  ({ data: user, error } = await supabase.rpc(
    'get_creators_by_user_id', {
      user_id_input: id
  }));
  if (error) {
    console.error(error);
  } 
  user = user[0] // function returns a list of users but only one is returned here
  // get the platform_ids
  const creatorId = user.creator_id_out;
  ({ data, error } = await supabase
  .rpc('get_entries_by_creator_id', {
    creator_id_input: creatorId
  }));
  if (error) {
    console.error(error);
  }
  const platform_ids = [];
  for (let i = 0; i < data.length; i++) {
    platform_ids.push(data[i].platform_id_out);
  }
  // get the platorm names
  ({ data, error } = await supabase.rpc(
    'get_several_platform_names', {
      ids: platform_ids
    }));
  user.platforms = [];
  for (let i = 0; i < data.length; i++) {
    user.platforms.push(data[i].platform_name_out);
  }
  // get the format_ids
  ({ data, error } = await supabase.rpc(
    'get_format_ids', {
      input: id
    }));
  let formatIds = [];
  for (let i = 0; i < data.length; i++) {
    formatIds.push(data[i].id);
  }
  // get the format names
  ({ data, error } = await supabase.rpc(
    'get_format_names', {
    format_ids: formatIds
  }));
  user.formats = []
  for (let i = 0; i < data.length; i++) {
    user.formats.push(data[i].format_name);
  }
  console.log(user);
  // return the data
  return user;
}

export async function getSponsorData(companyName) {
  // create a supabase client
  const supabase = await createClient();
  let data; // needs to be defined up here to avoid an error
  let user;
  // get the user_id based on the company_name
  let { data: id, error } = await supabase.rpc(
    'get_id_from_company_name', {
    name: companyName
  });
  if (error) {
    console.error(error);
  }
  // get the sponsor info based on sponsor_id
  ({ data: user, error } = await supabase.rpc(
    'get_sponsor_data', {
      id
    }));
  user = user[0] // function returns a list of users but only one is returned here
  if (error) {
    console.error(error);
  } 
  // get the platform_ids
  ({ data, error } = await supabase
  .rpc('get_entries_by_sponsor_id', {
    sponsor_id_input: id
  }));
  if (error) {
    console.error(error);
  }
  const platform_ids = [];
  for (let i = 0; i < data.length; i++) {
    platform_ids.push(data[i].platform_id_out);
  }
  // get the platorm names
  ({ data, error } = await supabase.rpc(
    'get_several_platform_names', {
      ids: platform_ids
    }));
  user.platforms = [];
  for (let i = 0; i < data.length; i++) {
    user.platforms.push(data[i].platform_name_out);
  }
  // get the user id
  ({ data: id, error } = await supabase
  .rpc('get_user_id_from_sponsor_id', {
    id
  }))
  if (error) {
    console.error(error);
  }
  // get the format_ids
  ({ data, error } = await supabase.rpc(
    'get_format_ids', {
      input: id
    }));
  let formatIds = [];
  for (let i = 0; i < data.length; i++) {
    formatIds.push(data[i].id);
  }
  // get the format names
  ({ data, error } = await supabase.rpc(
    'get_format_names', {
    format_ids: formatIds
  }));
  user.formats = []
  for (let i = 0; i < data.length; i++) {
    user.formats.push(data[i].format_name);
  }
  console.log(user);
  return user;
}