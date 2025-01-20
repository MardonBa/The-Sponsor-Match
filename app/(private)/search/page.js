import styles from './page.module.css';
import Sidebar from '@/app/ui/private/dashboardComponents/sidebar/sidebar';
import NavSideBar from '@/app/ui/private/dashboardComponents/sidebar/navsidebar';
import SearchContainerWrapper from '@/app/ui/private/dashboardComponents/search/searchContainerWrapper';

export default function SearchPage() {
    return (
        <div className={styles.pagecontainer} >
            <Sidebar style={styles.sidebar} >
                <NavSideBar />
            </Sidebar>
            <SearchContainerWrapper style={styles.search} />
        </div>
    );
}