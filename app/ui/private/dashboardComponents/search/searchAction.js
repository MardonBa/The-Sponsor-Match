"use server";

import { sanitizeInput } from "@/app/lib/auth/validation";
import { createClient } from "@/utils/supabase/server";

async function handleSearch(filters, searchInput, userType) {

  const sanitizedInput = sanitizeInput(searchInput, 'text');

  // create a supabse client
  const supabase = await createClient();
  // define variables
  let platformIds = [];
  let formatIds = [];

  // get the platform_ids, remove from the filters
  let { data, error } = await supabase.rpc(
    'get_several_platform_ids', {
    names: filters.platforms
  });
  if (error) {
    console.error(error);
    // TODO add real error handling
  } else {
    delete filters.platforms;
    platformIds = [];
    for (let i = 0; i < data.length; i++) {
      platformIds.push(data[i].platform_id);
    }
  }

  // get the format_ids, remove from the filters
  ({ data, error } = await supabase.rpc(
    'get_several_format_ids', {
      format_names: filters.formats
  }));
  if (error) {
    console.error(error);
    // TODO add real error handling
  } else {
    delete filters.formats;
    formatIds = data;
  }

  // if userType is "creator"
  if (userType == "creator") {
    // call search_sponors (user being a creator means they are looking for sponsors)
    ({ data, error } = await supabase.rpc(
      'search_sponsors', {
        _company_name: sanitizedInput, 
        _filters: filters, 
        _formats: formatIds, 
        _platforms: platformIds
    }));
    // handle errors
    if (error) {
      console.error(error);
      // TODO add real error handling
    } else { // return the data (a list of sponsor objects)
      console.log(data);
      return data;
    }
  } else if (userType == "sponsor") { // else if userType is "sponsor"
    // call search_creators (user being a sponsor means they are looking for creators)
    ({ data, error } = await supabase.rpc(
      'search_creators', {
        _filters: filters, 
        _formats: formatIds, 
        _platforms: platformIds, 
        _username: sanitizedInput
    }));
    // handle errors
    if (error) {
      console.error(error);
      // TODO add real error handling
    } else { // return the data (a list of craetor objects)
      console.log(data);
      return data;
    }
  } else {  // else return an error
    console.log("there is an error somewhere! the user should be a craetor or a sponsor");
    // TODO add real error handling
  }

  return null;
 
}

// search for a user
export default async function search(filters, searchInput, userType) {
  
  // change the communitySize filter to be a min and max, if it is provided
  if (filters.communitySize) {
    filters.communitySizeMin = [];
    filters.communitySizeMax = [];
    for (let i = 0; i < filters.communitySize.length; i++) {
      if (filters.communitySize[i].includes("+")) { 
        filters.communitySizeMin.push(Number(filters.communitySize[i].slice(0, -1)));
        filters.communitySizeMax.push(Number.MAX_SAFE_INTEGER);
      } else {
        const range = filters.communitySize[i].split("-");
        filters.communitySizeMin.push(Number(range[0]));
        filters.communitySizeMax.push(Number(range[1]));
      }
    }
    delete filters.communitySize;
  } else if (filters.companySize) {
    filters.companySizeMin = [];
    filters.companySizeMax = [];
    for (let  i = 0; i < filters.companySize.length; i++) {
      if (filters.companySize[i].includes("+")) { 
        filters.companySizeMin.push(Number(filters.companySize[i].slice(0, -1)));
        filters.companySizeMax.push(Number.MAX_SAFE_INTEGER);
      } else {
        const range = filters.companySize[i].split("-");
        filters.companySizeMin.push(Number(range[0]));
        filters.companySizeMax.push(Number(range[1]));
      }
    }
    delete filters.companySize;
  }

  // Trigger database search here using the filters
  return await handleSearch(filters, searchInput, userType);
};