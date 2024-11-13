"use client"

import styles from "./facebookButton.module.css";
import OauthButtonSkeleton from "./oauthButtonSkeleton";

export default function FacebookButton({ action }) {
  return (
    <OauthButtonSkeleton clickAction={action} logo={<FacebookLogo />} provider="Facebook" colorStyle={styles.color} />
  );
}

function FacebookLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32" version="1.1" className={styles.logo} >
      <g id="surface1">
        <path style={{stroke: "none", fillRule: "nonzero", fill: "rgb(100%,100%,100%)", fillOpacity: "1"}} d="M 32 16 C 32 7.164062 24.835938 0 16 0 C 7.164062 0 0 7.164062 0 16 C 0 23.984375 5.851562 30.605469 13.5 31.804688 L 13.5 20.625 L 9.4375 20.625 L 9.4375 16 L 13.5 16 L 13.5 12.476562 C 13.5 8.464844 15.890625 6.25 19.542969 6.25 C 21.292969 6.25 23.125 6.5625 23.125 6.5625 L 23.125 10.5 L 21.105469 10.5 C 19.121094 10.5 18.5 11.734375 18.5 13 L 18.5 16 L 22.9375 16 L 22.226562 20.625 L 18.5 20.625 L 18.5 31.804688 C 26.148438 30.605469 32 23.984375 32 16 Z M 32 16 "/>
        <path style={{stroke: "none", fillRule: "nonzero", fill: "rgb(9%,47%,95%)", fillOpacity: "1"}} d="M 22.226562 20.625 L 22.9375 16 L 18.5 16 L 18.5 13 C 18.5 11.734375 19.121094 10.5 21.105469 10.5 L 23.125 10.5 L 23.125 6.5625 C 23.125 6.5625 21.292969 6.25 19.542969 6.25 C 15.890625 6.25 13.5 8.464844 13.5 12.476562 L 13.5 16 L 9.4375 16 L 9.4375 20.625 L 13.5 20.625 L 13.5 31.804688 C 15.15625 32.066406 16.84375 32.066406 18.5 31.804688 L 18.5 20.625 Z M 22.226562 20.625 "/>
      </g>
    </svg>
  );
}