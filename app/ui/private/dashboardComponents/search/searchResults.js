import styles from './searchResults.module.css';
import SearchResult from './searchResults/searchResult';
import { getUserType } from '@/utils/helper/getUserType';

export default function SearchResults() {

  // get the user type
  const userType = getUserType();
  // get a list of all the users of the opposite user type
  let userData;
  if (userType == "sponsor") {
    // get the data of all sponsors
  } else if (userType == "creator") {
    // get the data of all creators
  }
  // look at what is retured to see if it already works
  // make a list of dictionaries that are of the form {name, communitySize, niche, contentFrequency}

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