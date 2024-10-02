"use client"

import styles from "./pricingLayout.module.css";
import LinkToSignUp from "../buttons/linkToSignUp/toSignUp";
import { useState } from "react";

// Content is an object that has the title, description, price, button text
// children is a features component that shows all of the available features
export default function PricingLayout({ content, children, classes }) {

    const { title, description, price, buttonText } = content;
    const priceBilledAnnually = content?.priceBilledAnnually;
    const [pricingText, setPricingText] = useState(
        `$${price}/mo billed monthly`
    );

    function onPricingTextClick() {
        if (pricingText == `$${price}/mo billed monthly`) {
            setPricingText(`$${priceBilledAnnually}/yr billed annually`);
        } else {
            setPricingText(`$${price}/mo billed monthly`);
        }
    }

    let percentOff;
    if (priceBilledAnnually) {
        percentOff = Math.round(((priceBilledAnnually - price * 12) / (price * 12)) * -100);
    }

    return (
        <div className={classes} >
            <h3 className={styles.title} >{title}</h3>
            <p className={styles.description} >{description}</p>
            <div className={styles.pricing}>
                <hr className={styles.linesecondary} />
                <p className={styles.price} >{Number.isInteger(price) ? pricingText : `${price} forever`}</p>
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