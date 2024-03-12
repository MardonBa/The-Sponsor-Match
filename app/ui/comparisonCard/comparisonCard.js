import styles from "./comparisonCard.module.css";
import CreatorText from "./creators";
import SponsorText from "./sponsors";


export default function ComparisonCard({ type }) {

    let cardText;

    if (type == 'sponsor') {
        cardText = <SponsorText />
    } else if (type == 'creator') {
        cardText = <CreatorText />
    } else {
        console.log('Invalid comparison card type!');
    }

    return (
        <div className={styles.container} >
            <ul className={styles.tabnav} >
                    <li>Creators</li>
                    <li>Sponsors</li>
                </ul>
            <div className={styles.cardcontainer}>
                {cardText}
            </div>
        </div>
    );
}