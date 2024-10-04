"use client"

import styles from "./pricingLayout.module.css";
import LinkToSignUp from "../buttons/linkToSignUp/toSignUp";
import { useState, useEffect } from "react";

// Content is an object that has the title, description, price, button text
// children is a features component that shows all of the available features
export default function PricingLayout({ content, children, classes, currentContent }) {

    const { title, description, price, buttonText } = content;
    const priceBilledAnnually = content?.priceBilledAnnually;
    const [pricingText, setPricingText] = useState(
        `$${price}/mo`
    );
    const [pricingPeriod, setPricingPeriod] = useState("billed monthly");

    function onPricingTextClick() {
        if (pricingText == `$${price}/mo`) {
            setPricingText(`$${priceBilledAnnually}/yr`);
            setPricingPeriod("billed annually");
        } else {
            setPricingText(`$${price}/mo`);
            setPricingPeriod("billed monthly");
        }
    }

    let percentOff;
    if (priceBilledAnnually) {
        percentOff = Math.round(((priceBilledAnnually - price * 12) / (price * 12)) * - 100);
    }

    // Prices weren't changing when the tab changed, this fixes that bug
    useEffect(() => {
        setPricingText(`$${price}/mo`);
    }, [currentContent]);

    return (
        <div className={classes} >
            <h3 className={styles.title} >{title}</h3>
            <p className={styles.description} >{description}</p>
            <div className={styles.pricing}>
                <hr className={styles.linesecondary} />
                {Number.isInteger(price) ? <p className={styles.price} >{pricingText}<span className={styles.pricingperiod}> {pricingPeriod}</span></p> : <p className={styles.price} ><s>$3/mo</s><br/>Free!</p>}
                {priceBilledAnnually ? <p className={styles.percentoff} onClick={onPricingTextClick} >save {percentOff}% when you bill annually (click to see)</p> : <p></p>}
                <hr className={`${styles.linesecondary} ${styles.bottomline}`} />
            </div>
            <LinkToSignUp text={buttonText} color="secondary" classes={styles.button} />
            <div className={styles.features}>
                <h3 className={styles.featuresheader} >Features</h3>
                {children}
            </div>
        </div>
    );
}