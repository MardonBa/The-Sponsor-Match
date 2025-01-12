import { getUserType } from "@/app/lib/helper/getUserType";
import SearchBar from "./searchbar";
import handleSearch from "./searchAction";

export default async function SearchbarWrapper() { 
  // server component that wraps the client component to call the server action
  const user = await getUserType();
  return <SearchBar userType={user} handleSearch={handleSearch} />
}