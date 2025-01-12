import styles from './searchContainer.module.css';
import SearchbarWrapper from './searchbarWrapper';
import SearchResults from './searchResults';

export default function SearchContainer({ style }) {
    return (
        <div className={`${styles.searchcontainer} ${style}`} >
            <SearchbarWrapper />
            <SearchResults />
        </div>
    );
}