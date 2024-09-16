"use client"

import styles from './navsidebar.module.css';
import React from 'react';
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
import * as Tooltip from '@radix-ui/react-tooltip';
import { usePathname } from 'next/navigation';

export default function NavSideBar() {

    const pathname = usePathname().slice(1);
    console.log(pathname);

    return (
        <Tooltip.TooltipProvider delayDuration={0} >
            <nav className={styles.container} >
                <div className={styles.logocontainer} >
                    <h1 className={`${styles.colorgradient} ${styles.logolarge}`} ><b>TSM</b></h1>
                </div>
                <Tooltip.Root >
                    <Tooltip.Trigger asChild >
                        <Link href={'/dashboard'} className={`${styles.item} ${highlightCurrentPath("dashboard", pathname)}`} >
                            <DashboardIcon />
                        </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content side="right" className={styles.tooltip} sideOffset={10} >
                            Dashboard
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip.Root>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild >
                        <Link href={'/search'} className={`${styles.item} ${highlightCurrentPath("search", pathname)}`} >
                            <SearchIcon />
                        </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content side="right" className={styles.tooltip} sideOffset={10} >
                        Search
                    </Tooltip.Content>
                </Tooltip.Root>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild >
                        <Link href={'/analytics'} className={`${styles.item} ${highlightCurrentPath("analytics", pathname)}`} >
                            <AnalyticsIcon />
                        </Link>
                        </Tooltip.Trigger>
                        <Tooltip.Content side="right" className={styles.tooltip} sideOffset={10} >
                            Analytics
                        </Tooltip.Content>
                </Tooltip.Root>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild >
                        <Link href={'/payment-history'} className={`${styles.item} ${highlightCurrentPath("payment-history", pathname)}`} >
                            <PaymentHistoryIcon />
                        </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content side="right" className={styles.tooltip} sideOffset={10} >
                        Payment History
                    </Tooltip.Content>
                </Tooltip.Root>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild >
                        <Link href={'/partnerships'} className={`${styles.item} ${highlightCurrentPath("partnerships", pathname)}`} >
                            <PartnershipsIcon />
                        </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content side="right" className={styles.tooltip} sideOffset={10} >
                        Partnerships
                    </Tooltip.Content>
                </Tooltip.Root>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild >
                        <Link href={'/messages'} className={`${styles.item} ${highlightCurrentPath("messages", pathname)}`} >
                            <MessagesIcon />
                        </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content side="right" className={styles.tooltip} sideOffset={10} >
                        Messages
                    </Tooltip.Content>
                </Tooltip.Root>
                <div className={styles.divider} >

                </div>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild >
                        <Link href={'/contact'} className={`${styles.item} ${highlightCurrentPath("contact", pathname)}`} >
                            <ContactIcon />
                        </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content side="right" className={styles.tooltip} sideOffset={10} >
                        Contact
                    </Tooltip.Content>
                </Tooltip.Root>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild >
                        <Link href={'/advertise'} className={`${styles.item} ${highlightCurrentPath("advertise", pathname)}`} >
                            <AdvertiseIcon />
                        </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content side="right" className={styles.tooltip} sideOffset={10} >
                        Advertise
                    </Tooltip.Content>
                </Tooltip.Root>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild >
                        <Link href={'/settings'} className={`${styles.item} ${highlightCurrentPath("settings", pathname)}`} >
                            <SettingsIcon />
                        </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content side="right" className={styles.tooltip} sideOffset={10} >
                        Settings
                    </Tooltip.Content>
                </Tooltip.Root>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild >
                        <Link href={'/log-out'} className={`${styles.item} ${highlightCurrentPath("log-out", pathname)}`} >
                            <LogOutIcon />
                        </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content side="right" className={styles.tooltip} sideOffset={10} >
                        Log Out
                    </Tooltip.Content>
                </Tooltip.Root>
            </nav>
        </Tooltip.TooltipProvider>
    );
}

function highlightCurrentPath(tab, path) {
    if (tab == path) {
        return styles.itemactive;
    } else {
        return null;
    }
}