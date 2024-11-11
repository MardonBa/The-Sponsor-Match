import styles from './searchResults.module.css';
import SearchResult from './searchResults/searchResult';

export default function SearchResults() {
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