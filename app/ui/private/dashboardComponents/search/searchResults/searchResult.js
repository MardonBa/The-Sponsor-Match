import styles from './searchResult.module.css';
import ProfilePicPreview from '../../profilePicPreview/profilePicPreview';

export default function SearchResult({ name, communitySize, niche, contentFrequency }) {
    // Likely what will end up happening is instead of each item being passed in as a prop, the user's id will be passed in and a db query will be used to get all of the relevant information.
    // This prop-based solution is only for layout purposes pre-db
    return (
        <div className={styles.container} >
            <ProfilePicPreview />
            <p className={styles.name} >{name}</p>
            <p className={styles.communitysize} >{communitySize}</p>
            <p className={styles.niche} >{niche}</p>
            <p className={styles.contentfrequency} >{contentFrequency}</p>
            <div className={styles.socials} >icons {/* Shuold have an icon linking to their account on each platform */}</div>
        </div>
    );
}