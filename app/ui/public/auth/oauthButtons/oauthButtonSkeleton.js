"use client";

import styles from "./oauthButtonSkeleton.module.css";

export default function OauthButtonSkeleton({ clickAction, logo, provider }) {
    return (
        <button className={styles.container} onClick={() => clickAction()} >
            {logo /* This is a component */} 
            <p className={styles.text} >Sign in with {provider}</p>
        </button>
    );
}