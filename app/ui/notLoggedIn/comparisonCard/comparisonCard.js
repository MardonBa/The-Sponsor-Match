'use client'

import styles from "./comparisonCard.module.css";
import CreatorText from "./creators";
import SponsorText from "./sponsors";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";


export default function ComparisonCard() {

    const ref = useRef(null);
    const isInView = useInView(ref); // Should be a boolean T/F used for animations when the component comes into view


    let visibility;
    if (isInView == true) { 
        visibility = styles.visible;
    } else {
        visibility = styles.hidden;
    }

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
        <div className={visibility} ref={ref} >
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