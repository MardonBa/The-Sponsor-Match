import styles from './searchResults.module.css';
import {CreatorSearchResult, SponsorSearchResult} from './searchResults/searchResult';
import { getUserType } from '@/app/lib/helper/getUserType';
import { createClient } from '@/utils/supabase/server';

export default async function SearchResults() {

  // get the user type
  const userType = await getUserType();
  // get a list of all the users of the opposite user type
  // initialize supabase
  const supabase = await createClient();
  let userData;
  if (userType == "sponsor") {

    // call the search_creators function with empty parameters
    let { data, error } = await supabase.rpc(
      'search_creators', {
      _filters: {}, 
      _formats: [], 
      _platforms: [], 
      _username: ""
    });
    if (error) {
      console.error(error);
    } else {
      userData = data;
      console.log(data);
    }
  } else if (userType == "creator") {
    let { data, error } = await supabase.rpc(
      'search_sponsors', {
      _company_name: "", 
      _filters: {}, 
      _formats: [], 
      _platforms: []
    });
    if (error) {
      console.error(error);
    } else {
      userData = data;
      console.log(data);
    }
  }

  // function that maps over the user data and displays search results (displays creators)
  const displayCreatorResults = (data) => {

    if (!Array.isArray(data) || data.length === 0) {
      return <p>No results found.</p>;
    }

    return data.map((user, index) => (
      <CreatorSearchResult name={user.username} communitySize={user.community_size} niche={user.niche} contentFrequency={user.content_frequency} key={user.user_id_out || index} />
    ));
  }

  // function that maps over the user data and displays search results (displays sponsors)
  const displaySponsorResults = (data) => {

    if (!Array.isArray(data) || data.length === 0) {
      return <p>No results found.</p>;
    }

    return data.map((user, index) => (
       <SponsorSearchResult name={user.company_name} size={user.company_size} industry={user.industry} key={user.user_id_out || index} />
    ));
  }

  return (
    <div className={styles.container} >
      {userType == "sponsor" ? displayCreatorResults(userData) : displaySponsorResults(userData)}
    </div>
  );
}