"use client"
import React from 'react';

import styles from './messageSidebar.module.css';
import Message from './message';

export default function MessagesSidebar({ forceOpen }) {
    
    const [isCollapsed, setIsCollapsed] =  React.useState(false); // defaults to false because the initial state should be 

    // If the sidebar shuold always be open on a page, set it to be so and remove the button from view using styles
    let buttonStyle;
    if (forceOpen == true) {
        // Don't need to set isCollapsed here because the default is open
        buttonStyle = `${styles.collapsebutton} ${styles.hidden}`;
    } else {
        buttonStyle = `${styles.collapsebutton}`;
    }

    let button;
    let widthStyle;
    let headerText;

    if (isCollapsed) {
        button = '<';
        widthStyle = styles.collapsed;
        headerText = 'MSGS';
    } else {
        button = '>';
        widthStyle = styles.fullwidth;
        headerText = 'Messages';
    }

    function handleCollapseClick() {
        setIsCollapsed(!isCollapsed);
    }


    return (
        <div className={`${styles.container} ${widthStyle}`} >
            <div className={styles.headingcontainer} >
                <p className={buttonStyle} onClick={handleCollapseClick} >{button}</p>
                <h2 className={styles.heading} >{headerText}</h2>
            </div>
            <div className={styles.messagecontainer} >
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
            <p className={styles.seemorebutton} >See More</p>
            {/* Should eventually be a button that links to the messages page */}
        </div>
    );
}
