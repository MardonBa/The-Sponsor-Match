"use client"

import styles from './navsidebar.module.css';
import React from 'react';
import Image from 'next/image';

export default function NavSideBar() {
    /*
    Collapsability:
    Track the state of whether a sidebar is collapsed or not
    When the collapse button is clicked, update the state
    When state is updated, change the style that impacts the width of the sidebar
    Also change what dispays (text or icon) (icons still need to be made)
    Maybe introduce redux and redux toolkit for app-wide state management, since the other components need to update their size accordingly
    Try setting the width of the other elements to a percentage first, no need to over-engineer
    */
    const [isCollapsed, setIsCollapsed] =  React.useState(false); // defaults to false because the initial state should be full width

    let button;
    let widthStyle;
    let logo;
    let navigation;
    if (isCollapsed) {
        button = '>';
        widthStyle = styles.collapsed;
        logo = 'TSM';
        navigation = NavIcons();
    } else {
        button = '<';
        widthStyle = styles.fullwidth;
        logo = 'The Sponsor Match';
        navigation = NavLinksFullWidth();
    }

    function handleCollapseClick() {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className={`${widthStyle} ${styles.container}`} >
            <div className={styles.logocontainer} >
                <h1 className={`${styles.colorgradient} ${styles.logolarge}`} ><b>{logo}</b></h1>
                <p className={styles.collapsebutton} onClick={handleCollapseClick} >{button}</p>
            </div>
            {navigation}
        </div>
    );
}

function NavLinksFullWidth() {
    return (
        <>
            <p className={styles.item} >Dashboard</p>
            <p className={styles.item} >Search</p>
            <p className={styles.item} >Analytics</p>
            <p className={styles.item} >Payment History</p>
            <p className={styles.item} >Legal Documents</p>
            <p className={styles.item} >Partnerships</p>
            <p className={styles.item} >Messages</p>
            <div className={styles.divider} >

            </div>
            <p className={styles.item} >Contact</p>
            <p className={styles.item} >Advertise</p>
            <p className={styles.item} >Settings</p>
            <p className={styles.item} >Log Out</p>
        </>
    );
}

function NavIcons() {
    return (
        <>
            <Image
                src='/icons/icon.svg'
                width={24}
                height={24}
                alt='dashboard icon'
                className={styles.item}
            />
            <p className={styles.item} >Dashboard</p>
            <p className={styles.item} >Search</p>
            <p className={styles.item} >Analytics</p>
            <p className={styles.item} >Payment History</p>
            <p className={styles.item} >Legal Documents</p>
            <p className={styles.item} >Partnerships</p>
            <p className={styles.item} >Messages</p>
            <div className={styles.divider} >

            </div>
            <p className={styles.item} >Contact</p>
            <p className={styles.item} >Advertise</p>
            <p className={styles.item} >Settings</p>
            <p className={styles.item} >Log Out</p>
        </>
    );
}