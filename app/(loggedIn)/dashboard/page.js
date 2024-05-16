import styles from './page.module.css';
import Sidebar from '@/app/ui/loggedIn/dashboardComponents/sidebar/sidebar';
import NavSideBar from '@/app/ui/loggedIn/dashboardComponents/sidebar/navsidebar';
import MessagesSidebar from '@/app/ui/loggedIn/dashboardComponents/sidebar/messages/messageSidebar';
import ManagementCard from '@/app/ui/loggedIn/dashboardComponents/management/card';

export default function Dashboard() {
    return (
        <div className={styles.dashboardcontainer} >
            <Sidebar className={`${styles.sidebar} ${styles.navsidebar}`} >
                {/* relevant children will go here instead of in the sidebar file for better customization */}
                <NavSideBar />
            </Sidebar>
            <div className={styles.maincontentcontainer} >
                <div className={styles.searchcontainer} >

                </div>
                <div className={styles.managementcontainer} >
                {/* This container either has campaigns if the user is a sponsor or current/recent sponsorships for creators */}
                {/* It should auto-populate up to 3-4 campaigns/sponsorships, and have a button to view all at the end regardless of how many there are */}
                    <ManagementCard />
                    <ManagementCard />
                    <ManagementCard />
                    <ManagementCard />
                </div> 
            </div>
            <Sidebar className={`${styles.sidebar} ${styles.messagessidebar}`} >
                {/* relevant children will go here instead of in the sidebar file for better customization */}
                <MessagesSidebar />
            </Sidebar>
        </div>
    );
}