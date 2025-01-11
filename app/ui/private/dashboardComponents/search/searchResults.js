import styles from './searchResults.module.css';
import SearchResult from './searchResults/searchResult';
import { getUserType } from '@/utils/helper/getUserType';
import { createClient } from '@/utils/supabase/server';

export default async function SearchResults() {

  // get the user type
  const userType = await getUserType();
  // get a list of all the users of the opposite user type
  // initialize supabase
  const supabase = await createClient();
  let userData;
  console.log(userType);
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
      console.log(userData);
    } 
  }
  // look at what is retured to see if it already works
  // make a list of dictionaries that are of the form {name, communitySize, niche, contentFrequency}

  // function that maps over the results that are from content creators and displays search results
  const displayCreatorResults = (results) => {

  }

  // function that maps over the results that are from sponsors and displays the search results
  const displaySponsorResults = (results) => {

  }

  return (
    <div className={styles.container} >
      <SearchResult name={'Bayan'} communitySize={'13k'} niche={'games'} contentFrequency={'weekly'} />
      <SearchResult name={'Bayan'} communitySize={'13k'} niche={'games'} contentFrequency={'weekly'} />
      <SearchResult name={'Bayan'} communitySize={'13k'} niche={'games'} contentFrequency={'weekly'} />
      <SearchResult name={'Bayan'} communitySize={'13k'} niche={'games'} contentFrequency={'weekly'} />
      <SearchResult name={'Bayan'} communitySize={'13k'} niche={'games'} contentFrequency={'weekly'} />
      <SearchResult name={'Bayan'} communitySize={'13k'} niche={'games'} contentFrequency={'weekly'} />
    </div>
  );
}