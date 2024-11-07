import styles from './page.module.css';
import Sidebar from '@/app/ui/loggedIn/dashboardComponents/sidebar/sidebar';
import NavSideBar from '@/app/ui/loggedIn/dashboardComponents/sidebar/navsidebar';
import { logout } from './action';

export default function LogOutPage() {
    return (
        <div className={styles.pagecontainer} >
            <Sidebar>
                <NavSideBar />
            </Sidebar>
            <div className={styles.pagecontent}>
                <form>
                    <button formAction={logout}>log out</button>
                </form>
            </div>
        </div>
    );
}