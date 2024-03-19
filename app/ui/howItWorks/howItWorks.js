'use client'

import styles from './howItWorks.module.css'
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function HowItWorks({ number, header, maintext }) {


    const ref = useRef(null);
    const isInView = useInView(ref); // Should be a boolean T/F used for animations when the component comes into view

    let visibility;
    if (isInView == true) { 
        visibility = styles.visible;
    } else {
        visibility = styles.hidden;
    }

    let delayStyle;
    if (number % 3 == 1 ){
        delayStyle = styles.delay1
    } else if (number % 3 == 0)  {
        delayStyle = styles.delay2
    } else {
        delayStyle = styles.nodelay
    }

    return (
        <div className={`${styles.cardcontainer} ${visibility} ${delayStyle}`} ref={ref} >
            <h2 className={styles.head} >{number}) {header}</h2>
            <p className={styles.maintext} >{maintext}</p>
        </div>
    );
}