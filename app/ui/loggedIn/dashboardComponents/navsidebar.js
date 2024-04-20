import styles from './navsidebar.module.css';

export default function NavSideBar() {
    return (
        <div className={styles.container} >
            <p className={styles.item} >Dashboard</p>
            <p className={styles.item} >Matching</p>
            <p className={styles.item} >Analytics</p>
            <p className={styles.item} >Payment History</p>
            <p className={styles.item} >Legal Documents</p>
            <p className={styles.item} >Partnerships</p>
            <p className={styles.item} >Chat</p>
            <div className={styles.divider} >

            </div>
            <p className={styles.item} >Contact</p>
            <p className={styles.item} >Advertise</p>
            <p className={styles.item} >Settings</p>
            <p className={styles.item} >Log Out</p>
        </div>
    );
}
