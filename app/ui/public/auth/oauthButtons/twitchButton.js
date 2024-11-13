"use client";

import styles from "./twitchButton.module.css";
import OauthButtonSkeleton from "./oauthButtonSkeleton";

export default function TwitchButton({ action }) {
    return (
        <OauthButtonSkeleton clickAction={action} logo={<TwitchLogo />} provider="Twitch" colorStyle={styles.color} />
    );
}

function TwitchLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32" version="1.1" className={styles.logo} >
      <g id="surface1">
        <path style={{stroke: "none", fillRule: "nonzero", fill: "rgb(0%,0%,0%)", fillOpacity: "1"}} d="M 7.714844 0 L 2 5.714844 L 2 26.285156 L 8.859375 26.285156 L 8.859375 32 L 14.570312 26.285156 L 19.140625 26.285156 L 29.429688 16 L 29.429688 0 Z M 27.140625 14.859375 L 22.570312 19.429688 L 18 19.429688 L 14 23.429688 L 14 19.429688 L 8.859375 19.429688 L 8.859375 2.285156 L 27.140625 2.285156 Z M 27.140625 14.859375 "/>
        <path style={{stroke: "none", fillRule: "nonzero", fill: "rgb(0%,0%,0%)", fillOpacity: "1"}} d="M 23.714844 6.285156 L 21.429688 6.285156 L 21.429688 13.140625 L 23.714844 13.140625 Z M 17.429688 6.285156 L 15.140625 6.285156 L 15.140625 13.140625 L 17.429688 13.140625 Z M 17.429688 6.285156 "/>
      </g>
    </svg>
  );
}
