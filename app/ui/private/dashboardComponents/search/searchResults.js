import styles from './searchResults.module.css';
import { CreatorSearchResult, SponsorSearchResult } from './searchResults/searchResult';

export default function SearchResults({ userType, userData }) {

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