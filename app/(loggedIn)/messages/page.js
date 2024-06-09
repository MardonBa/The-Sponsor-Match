import styles from './page.module.css';
import Sidebar from '@/app/ui/loggedIn/dashboardComponents/sidebar/sidebar';
import MessagesSidebar from '@/app/ui/loggedIn/dashboardComponents/sidebar/messages/messageSidebar';
import NavSideBar from '@/app/ui/loggedIn/dashboardComponents/sidebar/navsidebar';

export default function MessagesPage() {
    return (
        <div className={styles.pagecontainer} >
            <Sidebar style={styles.navsidebar} >
                <NavSideBar />
            </Sidebar>
            <Sidebar style={styles.messagesidebar} >
                <MessagesSidebar />
            </Sidebar>
        </div>
    );
}