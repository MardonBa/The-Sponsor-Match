import styles from './page.module.css';
import LandingHeader from '../ui/header/header';
import LandingFooter from '../ui/footer/footer';

export default function FeatuersPage() {
    return(
    <div className={styles.pagecontainer} >
        <LandingHeader />
        <div className={styles.content} >
            {/* These 2 divs will be side by side, scrollchangecontainer will have fade-in/out  effect on scroll to next faeture */}
            <div className={styles.regularcontainer} >
                <h2>feature 1</h2>
                <h2>feature 2</h2>
                <h2>feature 3</h2>
            </div>
            <div className={styles.scrollchangecontainer} >
                <h2>feature 1 image</h2>
                <h2>feature 2 image </h2>
                <h2>feature 3 image</h2>
            </div>
        </div>
        <LandingFooter />
    </div>);
}