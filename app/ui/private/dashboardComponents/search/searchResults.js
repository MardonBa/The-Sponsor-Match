import styles from './searchResults.module.css';
import {CreatorSearchResult, SponsorSearchResult} from './searchResults/searchResult';
import { getUserType } from '@/utils/helper/getUserType';
import { createClient } from '@/utils/supabase/server';

export default async function SearchResults() {

  // get the user type
  const userType = await getUserType();
  // get a list of all the users of the opposite user type
  // initialize supabase
  const supabase = await createClient();
  let userData;
  if (userType == "sponsor") {
    // get the data of all creators
    let { data, error } = await supabase.rpc('get_all_creators');
    if (error) {
      console.error(error);
    }
    else {
      // get the creators' usernames (all at once)
      const curData = data
      // get the user ids in to a list
      const userIds = curData.map(obj => obj.user_id_out);
      // query the usernames
      ({ data, error } = await supabase.rpc('get_usernames', {user_ids: userIds}));
      if (error) {
        console.error(error)
      }
      const usernameMap = new Map(data.map(user => [user.user_id, user.username]));
      // add the usernames to the userData list of objects
      userData = curData.map(user => ({
        ...user,
        username: usernameMap.get(user.user_id_out) || null, // Add username if available, otherise null
      }));
    } 
  } else if (userType == "creator") {

    // Geting this data is a bit simnpler than getting creator data for sponsors, 
    // because i just need to display the company name instead of the username,
    // and getting the usernames is the most complicated part of the abave queries

    // get the data of all sponsors
    let { data, error } = await supabase.rpc('get_all_sponsors');
    if (error) {
      console.error(error);
    }
    else {
      userData = data;
    } 
  }
  // look at what is retured to see if it already works
  // make a list of dictionaries that are of the form {name, communitySize, niche, contentFrequency}

  // function that maps over the user data and displays search results (displays creators)
  const displayCreatorResults = () => {

    if (!Array.isArray(userData) || userData.length === 0) {
      return <p>No results found.</p>;
    }

    return userData.map((user, index) => (
      <CreatorSearchResult name={user.username} communitySize={user.community_size_out} niche={user.niche_out} contentFrequency={user.content_frequency_out} key={user.user_id_out || index} />
    ));
  }

  // function that maps over the user data and displays search results (displays sponsors)
  const displaySponsorResults = () => {

    if (!Array.isArray(userData) || userData.length === 0) {
      return <p>No results found.</p>;
    }

    return userData.map((user, index) => (
       <SponsorSearchResult name={user.company_name_out} size={user.size_out} industry={user.industry_out} key={user.user_id_out || index} />
    ));
  }

  return (
    <div className={styles.container} >
      {userType == "sponsor" ? displayCreatorResults() : displaySponsorResults()}
    </div>
  );
}