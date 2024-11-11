import styles from './page.module.css';
import Sidebar from '@/app/ui/private/dashboardComponents/sidebar/sidebar';
import NavSideBar from '@/app/ui/private/dashboardComponents/sidebar/navsidebar';
import SearchContainer from '@/app/ui/private/dashboardComponents/search/searchContainer';

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