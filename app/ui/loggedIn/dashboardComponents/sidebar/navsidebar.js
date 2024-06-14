"use client"

import styles from './navsidebar.module.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

    let iconTheme = prefersDarkTheme() ? 'dark' : 'light';

    const dimensions = 26;

    return (
        <>
            <Link href={'/dashboard'} className={styles.item} >
                <Image
                    src={`/icons/dashboard_icon_${iconTheme}.svg`}
                    width={dimensions}
                    height={dimensions}
                    alt='dashboard icon'
                />
            </Link>
            <Link href={'/search'} className={styles.item} >
                <Image
                    src={`/icons/search_icon_${iconTheme}.svg`}
                    width={dimensions}
                    height={dimensions}
                    alt='search icon'
                />
            </Link>
            <Link href={'/analytics'} className={styles.item} >
                <Image
                    src={`/icons/analytics_icon_${iconTheme}.svg`}
                    width={dimensions}
                    height={dimensions}
                    alt='analytics icon'
                />
            </Link>
            <Link href={'/payment-history'} className={styles.item} >
                <Image
                    src={`/icons/payment_history_icon_${iconTheme}.svg`}
                    width={dimensions}
                    height={dimensions}
                    alt='payment history icon'
                />
            </Link>
            <Link href={'/partnerships'} className={styles.item} >
                <Image
                    src={`/icons/partnerships_icon_${iconTheme}.svg`}
                    width={dimensions}
                    height={dimensions}
                    alt='partnerships icon'
                />
            </Link>
            <Link href={'/messages'} className={styles.item} >
                <Image
                    src={`/icons/messages_icon_${iconTheme}.svg`}
                    width={dimensions}
                    height={dimensions}
                    alt='messages icon'
                />
            </Link>
            <div className={styles.divider} >

            </div>
            <Link href={'/contact'} className={styles.item} >
                <Image
                    src={`/icons/contact_icon_${iconTheme}.svg`}
                    width={dimensions}
                    height={dimensions}
                    alt='contact icon'
                />
            </Link>
            <Link href={'/advertise'} className={styles.item} >
                <Image
                    src={`/icons/advertise_icon_${iconTheme}.svg`}
                    width={dimensions}
                    height={dimensions}
                    alt='advertise icon'
                />
            </Link>
            <Link href={'/settings'} className={styles.item} >
                <Image
                    src={`/icons/settings_icon_${iconTheme}.svg`}
                    width={dimensions}
                    height={dimensions}
                    alt='settings icon'
                />
            </Link>
            <Link href={'/dashboard'} className={styles.item} >
                <Image
                    src={`/icons/log_out_icon_${iconTheme}.svg`}
                    width={dimensions}
                    height={dimensions}
                    alt='log out icon'
                />
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