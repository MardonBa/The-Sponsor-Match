'use client'

import styles from "./comparisonCard.module.css";
import CreatorText from "./creators";
import SponsorText from "./sponsors";
import { useState } from "react";


export default function ComparisonCard() {

    let cardText;
    let [isActive, setIsActive] = useState('creator');  // 'creators' or 'sponsors'

    if (isActive == 'sponsor') {
        cardText = <SponsorText />
    } else if (isActive == 'creator') {
        cardText = <CreatorText />
    } else {
        console.log('Invalid comparison card type!');
    }

    const handleCreatorTab = () => {
        setIsActive('creator');
    }

    const handleSponsorTab = () => {
        setIsActive('sponsor');
    }

    return (
        <div className={styles.container} >
            <ul className={styles.tabnav} >
                    <li className={isActive === 'creator' ? styles.activetab : styles.inactivetab} onClick={handleCreatorTab} >Creators</li>
                    <li className={isActive === 'sponsor' ? styles.activetab : styles.inactivetab} onClick={handleSponsorTab} >Sponsors</li>
                </ul>
            <div className={styles.cardcontainer}>
                {cardText}
            </div>
        </div>
    );
}