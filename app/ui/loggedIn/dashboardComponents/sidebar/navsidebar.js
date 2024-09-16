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
                        <Link href={'/dashboard'} className={styles.item} >
                            <DashboardIcon />
                        </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content side="right" className={styles.tooltip} >
                            Dashboard
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip.Root>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild >
                        <Link href={'/search'} className={styles.item} >
                            <SearchIcon />
                        </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content side="right" className={styles.tooltip} >
                        Search
                    </Tooltip.Content>
                </Tooltip.Root>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild >
                        <Link href={'/analytics'} className={styles.item} >
                            <AnalyticsIcon />
                        </Link>
                        </Tooltip.Trigger>
                        <Tooltip.Content side="right" className={styles.tooltip} >
                            Analytics
                        </Tooltip.Content>
                </Tooltip.Root>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild >
                        <Link href={'/payment-history'} className={styles.item} >
                            <PaymentHistoryIcon />
                        </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content side="right" className={styles.tooltip} >
                        Payment History
                    </Tooltip.Content>
                </Tooltip.Root>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild >
                        <Link href={'/partnerships'} className={styles.item} >
                            <PartnershipsIcon />
                        </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content side="right" className={styles.tooltip} >
                        Partnerships
                    </Tooltip.Content>
                </Tooltip.Root>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild >
                        <Link href={'/messages'} className={styles.item} >
                            <MessagesIcon />
                        </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content side="right" className={styles.tooltip} >
                        Messages
                    </Tooltip.Content>
                </Tooltip.Root>
                <div className={styles.divider} >

                </div>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild >
                        <Link href={'/contact'} className={styles.item} >
                            <ContactIcon />
                        </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content side="right" className={styles.tooltip} >
                        Contact
                    </Tooltip.Content>
                </Tooltip.Root>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild >
                        <Link href={'/advertise'} className={styles.item} >
                            <AdvertiseIcon />
                        </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content side="right" className={styles.tooltip} >
                        Advertise
                    </Tooltip.Content>
                </Tooltip.Root>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild >
                        <Link href={'/settings'} className={styles.item} >
                            <SettingsIcon />
                        </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content side="right" className={styles.tooltip} >
                        Settings
                    </Tooltip.Content>
                </Tooltip.Root>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild >
                        <Link href={'/log-out'} className={styles.item} >
                            <LogOutIcon />
                        </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content side="right" className={styles.tooltip} >
                        Log Out
                    </Tooltip.Content>
                </Tooltip.Root>
            </nav>
        </Tooltip.TooltipProvider>
    );
}