import styles from './page.module.css';
import Sidebar from '@/app/ui/loggedIn/dashboardComponents/sidebar';
import NavSideBar from '@/app/ui/loggedIn/dashboardComponents/navsidebar';

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

                </div>
            </div>
            <Sidebar className={`${styles.sidebar} ${styles.messagessidebar}`} >
                {/* relevant children will go here instead of in the sidebar file for better customization */}
            </Sidebar>
        </div>
    );
}