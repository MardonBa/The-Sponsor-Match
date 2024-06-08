import styles from './searchContainer.module.css';
import SearchBar from './searchbar';
import SearchResults from './searchResults';

export default function SearchContainer({ style }) {
    return (
        <div className={`${styles.searchcontainer} ${style}`} >
            <SearchBar />
            <SearchResults />
        </div>
    );
}