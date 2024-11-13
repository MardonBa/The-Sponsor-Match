"use client";

import { color } from "framer-motion";
import styles from "./oauthButtonSkeleton.module.css";

export default function OauthButtonSkeleton({ clickAction, logo, provider, colorStyle }) {
    return (
        <button className={`${styles.container} ${colorStyle}`} onClick={() => clickAction()} >
            {logo /* This is a component */} 
            <p className={styles.text} >Sign in with {provider}</p>
        </button>
    );
}