// Simple file for the cards containing each management item shows, either campaigns or sponsorships
import styles from './card.module.css';

export default function ManagementCard() {
    return (
        <div className={styles.container} >
            <h2 className={styles.title} >Campaign Title</h2>
            <ul>
                <li>Basic Info</li>
                <li>Basic Info</li>
                <li>Basic Info</li>
                <li>Basic Info</li>
            </ul>
        </div>
    );
}