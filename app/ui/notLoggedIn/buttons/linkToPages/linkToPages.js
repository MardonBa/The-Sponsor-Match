import styles from './linkToPages.module.css'

export default function LinkToPages({ page }) { // Page should either be 'features' or 'pricing'
    let text;
    if (page == 'features') {
        text = "See Features";
    } else if (page == 'pricing') {
        text = "See Pricing";
    } else {
        console.log('page type not defined');
    }

    return (
        <p className={styles.textcontainer} >{text}</p>
    );
}