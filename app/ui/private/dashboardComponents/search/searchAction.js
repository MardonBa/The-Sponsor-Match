"use server";

import { sanitizeInput } from "@/app/lib/auth/validation";

export default async function handleSearch(filters, searchInput, userType) {

  const sanitizedInput = sanitizeInput(searchInput, 'text');

  // create a supabse client
  // get the platform_ids, remove from the filters
  // get the format_ids, remove from the filters
  // if userType is "creator"
    // call search_sponors (user being a creator means they are looking for sponsors)
    // handle errors
    // return the data (a list of sponsor objects)
  // else if userType is "sponsor"
    // call search_creators (user being a sponsor means they are looking for creators)
    // handle errors
    // return the data (a list of creator objects)
  // else return an error
}