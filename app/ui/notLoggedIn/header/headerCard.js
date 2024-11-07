"use client";

import styles from "./headerCard.module.css";

export default function HeaderCard({ text, gridStyle, hoverstyle=undefined }) {
    // hoverstyle used for all cards except the sign in and sign up

    let href_text = text.replace(" ", "-");

    const handleRefresh = (e) => {
        e.preventDefault();
        window.location.href = href_text;
    }  

    // a tag has to be used because the Link tag doesn't cause a refresh, and a refresh is needed to 
    // render the sign in with Google button
    return (
    <a className={`${styles.card} ${gridStyle}`} onClick={handleRefresh} >
        <p className={`${styles.text} ${hoverstyle}`}>{text}</p>
    </a>
    );
}
