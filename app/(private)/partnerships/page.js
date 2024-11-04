import styles from './page.module.css';
import Sidebar from '@/app/ui/loggedIn/dashboardComponents/sidebar/sidebar';
import NavSideBar from '@/app/ui/loggedIn/dashboardComponents/sidebar/navsidebar';

export default function PartnershipsPage() {
    return (
        <div className={styles.pagecontainer} >
            <Sidebar>
                <NavSideBar />
            </Sidebar>
            <div className={styles.pagecontent}>
                
            </div>
        </div>
    );
}