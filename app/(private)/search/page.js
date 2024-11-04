import styles from './page.module.css';
import Sidebar from '@/app/ui/loggedIn/dashboardComponents/sidebar/sidebar';
import NavSideBar from '@/app/ui/loggedIn/dashboardComponents/sidebar/navsidebar';
import SearchContainer from '@/app/ui/loggedIn/dashboardComponents/search/searchContainer';

export default function SearchPage() {
    return (
        <div className={styles.pagecontainer} >
            <Sidebar style={styles.sidebar} >
                <NavSideBar />
            </Sidebar>
            <SearchContainer style={styles.search} />
        </div>
    );
}