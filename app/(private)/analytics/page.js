import styles from './page.module.css';
import Sidebar from '@/app/ui/private/dashboardComponents/sidebar/sidebar';
import NavSideBar from '@/app/ui/private/dashboardComponents/sidebar/navsidebar';

export default function AnalyticsPage() {
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