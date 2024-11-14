"use client"

import styles from "./xButton.module.css";
import OauthButtonSkeleton from "./oauthButtonSkeleton";

export default function XButton({ action }) {
  return (
    <OauthButtonSkeleton clickAction={action} logo={<XLogo />} provider="X" colorStyle={styles.color}/>
  );
}

function XLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32" version="1.1" className={styles.logo}>
      <g id="surface1">
        <path style={{stroke: "none", fillRule: "nonzero", fill: "rgb(100%,100%,100%)", fillOpacity: "1"}} d="M 19.042969 13.542969 L 30.957031 0 L 28.132812 0 L 17.789062 11.757812 L 9.527344 0 L 0 0 L 12.492188 17.78125 L 0 31.984375 L 2.824219 31.984375 L 13.746094 19.566406 L 22.472656 31.984375 L 32 31.984375 Z M 15.175781 17.9375 L 13.910156 16.167969 L 3.839844 2.078125 L 8.175781 2.078125 L 16.304688 13.449219 L 17.570312 15.21875 L 28.136719 30 L 23.800781 30 Z M 15.175781 17.9375 "/>
      </g>
    </svg>
  );
}