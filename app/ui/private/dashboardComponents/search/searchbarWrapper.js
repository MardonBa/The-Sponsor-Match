import { getUserType } from "@/utils/helper/getUserType";
import SearchBar from "./searchbar";

export default async function SearchbarWrapper() { 
  // server component that wraps the client component to call the server action
  const user = await getUserType();
  return <SearchBar userType={user} />
}