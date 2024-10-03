'use client'

import styles from "./comparisonCard.module.css";
import { useState, useRef, useEffect } from "react";
import { useInView } from "framer-motion";

// This component is used for when there needs to be a toggle between sponsors and creators, 
// namely on landing and pricing pages
export default function ToggleCard({ components, activeColorStyle, inactiveColorStyle }) { 

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

    const [creatorComponent, sponsorComponent] = components;

    if (isActive == 'sponsor') {
        cardText = sponsorComponent;
    } else if (isActive == 'creator') {
        cardText = creatorComponent;
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
            <ul className={`${styles.tabnav} ${inactiveColorStyle}`} >
                    <li className={isActive === 'creator' ? `${styles.activetab} ${activeColorStyle}` : styles.inactivetab} onClick={handleCreatorTab} >Creators</li>
                    <li className={isActive === 'sponsor' ? `${styles.activetab} ${activeColorStyle}` : styles.inactivetab} onClick={handleSponsorTab} >Sponsors</li>
            </ul>
            {cardText}
        </div>
    );
}