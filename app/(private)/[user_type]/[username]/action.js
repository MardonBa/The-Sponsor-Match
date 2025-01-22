import { createClient } from "@/utils/supabase/server";

export async function getCreatorData(username) {
  // create a supabase client
  const supabase = await createClient();
  let data; // needs to be defined up here to avoid an error
  // get the user_id based on username
  let { data: id, error } = await supabase.rpc(
    'get_user_id_from_username', {
    name: username
  });
  if (error) {
    console.error(error);
  } 
  // get creator info based on user_id
  ({ data, error } = await supabase.rpc(
    'get_creators_by_user_id', {
      user_id_input: id
  }));
  if (error) {
    console.error(error);
  } 
  // get the platforms
  // get the formats
  // return the data
  return data;
}

export async function getSponsorData(companyName) {
  // create a supabase client
  const supabase = await createClient();
  let data; // needs to be defined up here to avoid an error
  // get the user_id based on the company_name
  let { data: id, error } = await supabase.rpc(
    'get_id_from_company_name', {
    name: companyName
  });
  if (error) {
    console.error(error);
  }
  // get the sponsor info based on user_id
  ({ data, error } = await supabase.rpc(
    'get_sponsor_data', {
      id
    }));
  if (error) {
    console.error(error);
  } 
  // get the platforms
  // get the formats
  return data;
}