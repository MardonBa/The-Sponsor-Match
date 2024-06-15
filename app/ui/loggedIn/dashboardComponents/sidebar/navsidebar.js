"use client"

import styles from './navsidebar.module.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import all icon components
import DashboardIcon from './icons/dashboardIcon';
import SearchIcon from './icons/searchIcon';
import AnalyticsIcon from './icons/analyticsIcon';
import PaymentHistoryIcon from './icons/paymentHistoryIcon';
import PartnershipsIcon from './icons/partnershipsIcon';
import MessagesIcon from './icons/messagesIcon';
import ContactIcon from './icons/contactIcon';
import AdvertiseIcon from './icons/advertiseIcon';
import SettingsIcon from './icons/settingsIcon';
import LogOutIcon from './icons/logOutIcon';

export default function NavSideBar({ forceCollapse }) {
    /*
    Collapsability:
    Track the state of whether a sidebar is collapsed or not
    When the collapse button is clicked, update the state
    When state is updated, change the style that impacts the width of the sidebar
    Also change what dispays (text or icon) (icons still need to be made)
    Maybe introduce redux and redux toolkit for app-wide state management, since the other components need to update their size accordingly
    Try setting the width of the other elements to a percentage first, no need to over-engineer
    */
    let [isCollapsed, setIsCollapsed] =  React.useState(false); // defaults to false because the initial state should be full width

    // If the sidebar shuold always be collapsed, set it to be so and remove the button from view using styles
    let buttonStyle;
    if (forceCollapse == true) {
        isCollapsed = true;
        buttonStyle = `${styles.collapsebutton} ${styles.hidden}`;
    } else {
        buttonStyle = `${styles.collapsebutton}`;
    }


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
                <p className={buttonStyle} onClick={handleCollapseClick} >{button}</p>
            </div>
            {navigation}
        </div>
    );
}

function NavLinksFullWidth() {
    return (
        <>
            <Link href={'/dashboard'} className={styles.item} >
                Dashboard
            </Link>
            <Link href={'/search'} className={styles.item} >
                Search
            </Link>
            <Link href={'/analytics'} className={styles.item} >
                Analytics
            </Link>
            <Link href={'/payment-history'} className={styles.item} >
                Payment History
            </Link>
            <Link href={'/partnerships'} className={styles.item} >
                Partnerships
            </Link>
            <Link href={'/messages'} className={styles.item} >
                Messages
            </Link>
            <div className={styles.divider} >

            </div>
            <Link href={'/contact'} className={styles.item} >
                Contact
            </Link>
            <Link href={'/advertise'} className={styles.item} >
                Advertise
            </Link>
            <Link href={'/settings'} className={styles.item} >
                Settings
            </Link>
            <Link href={'/log-out'} className={styles.item} >
                Log Out
            </Link>
        </>
    );
}

function NavIcons() {

    return (
        <>
            <Link href={'/dashboard'} className={styles.item} >
                <DashboardIcon />
            </Link>
            <Link href={'/search'} className={styles.item} >
                <SearchIcon />
            </Link>
            <Link href={'/analytics'} className={styles.item} >
                <AnalyticsIcon />
            </Link>
            <Link href={'/payment-history'} className={styles.item} >
                <PaymentHistoryIcon />
            </Link>
            <Link href={'/partnerships'} className={styles.item} >
                <PartnershipsIcon />
            </Link>
            <Link href={'/messages'} className={styles.item} >
                <MessagesIcon />
            </Link>
            <div className={styles.divider} >

            </div>
            <Link href={'/contact'} className={styles.item} >
                <ContactIcon />
            </Link>
            <Link href={'/advertise'} className={styles.item} >
                <AdvertiseIcon />
            </Link>
            <Link href={'/settings'} className={styles.item} >
                <SettingsIcon />
            </Link>
            <Link href={'/log-out'} className={styles.item} >
                <LogOutIcon />
            </Link>
        </>
    );
}

function prefersDarkTheme() {
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (darkTheme) {
        return true;
    } else {return false;}

}