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

    let iconTheme = prefersDarkTheme() ? 'dark' : 'light';

    const dimensions = 26;

    return (
        <>
            <Image
                src={`/icons/dashboard_icon_${iconTheme}.svg`}
                width={dimensions}
                height={dimensions}
                alt='dashboard icon'
                className={styles.item}
            />
            <Image
                src={`/icons/search_icon_${iconTheme}.svg`}
                width={dimensions}
                height={dimensions}
                alt='search icon'
                className={styles.item}
            />
            <Image
                src={`/icons/analytics_icon_${iconTheme}.svg`}
                width={dimensions}
                height={dimensions}
                alt='analytics icon'
                className={styles.item}
            />
            <Image
                src={`/icons/payment_history_icon_${iconTheme}.svg`}
                width={dimensions}
                height={dimensions}
                alt='payment history icon'
                className={styles.item}
            />
            <Image
                src={`/icons/legal_documents_icon_${iconTheme}.svg`}
                width={dimensions}
                height={dimensions}
                alt='legal documents icon'
                className={styles.item}
            />
            <Image
                src={`/icons/partnerships_icon_${iconTheme}.svg`}
                width={dimensions}
                height={dimensions}
                alt='partnerships icon'
                className={styles.item}
            />
            <Image
                src={`/icons/messages_icon_${iconTheme}.svg`}
                width={dimensions}
                height={dimensions}
                alt='messages icon'
                className={styles.item}
            />
            <div className={styles.divider} >

            </div>
            <Image
                src={`/icons/contact_icon_${iconTheme}.svg`}
                width={dimensions}
                height={dimensions}
                alt='contact icon'
                className={styles.item}
            />
            <Image
                src={`/icons/advertise_icon_${iconTheme}.svg`}
                width={dimensions}
                height={dimensions}
                alt='advertise icon'
                className={styles.item}
            />
            <Image
                src={`/icons/settings_icon_${iconTheme}.svg`}
                width={dimensions}
                height={dimensions}
                alt='settings icon'
                className={styles.item}
            />
            <Image
                src={`/icons/log_out_icon_${iconTheme}.svg`}
                width={dimensions}
                height={dimensions}
                alt='log out icon'
                className={styles.item}
            />
        </>
    );
}

function prefersDarkTheme() {
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (darkTheme) {
        return true;
    } else {return false;}

}