import styles from './page.module.css';
import Sidebar from '@/app/ui/private/dashboardComponents/sidebar/sidebar';
import NavSideBar from '@/app/ui/private/dashboardComponents/sidebar/navsidebar';

export default function ContactPage() {
    // This page should render differently depending on if the user is logged in or not, probably the difference would be that the sidebar isn't rendered when the user insn't logged in
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