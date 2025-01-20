"use server";

import { getUserType } from "@/app/lib/helper/getUserType";
import SearchContainer from "./searchContainer";
import search from "./searchAction";

export default async function SearchContainerWrapper() { 
  // server component that wraps the client component to call the server action

  // get the user type
  const user = await getUserType();

  // get the initial search results
  const searchResults = await search({ // platforms and formats have to be set to avoid supabase errors
    platforms: [],
    formats: []
  }, "", user);

  return <SearchContainer userType={user} res={searchResults} />
}