import styles from './footer.module.css';
import Logo from '../../logo/logo';
import Link from 'next/link';

export default function LandingFooter() {
    return (
        <div className={styles.footer}>
            <div className={styles.logo} >
                <Logo dimensions={128}/>
            </div>
            <div className={styles.aboutus} >
                <h3 className={styles.heading} >About Us</h3>
                <div className={styles.links} >
                    <Link href="/meet-the-team" className={styles.link} >Meet the Team</Link>
                    <p>Pricing</p>
                    <p>Features</p>
                    <p>Testimonials</p>
                </div>
            </div>
            <div className={styles.contact} >
                <h3 className={styles.heading} >Contact</h3>
                <div className={styles.links} >
                    <p>Contact Sales</p>
                    <p>Contact Support</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className={styles.legal} >
                <h3 className={styles.heading} >Legal</h3>
                <div className={styles.links} >
                    <p>Terms of Service</p>
                    <Link href="/privacy-policy" className={styles.link} >Privacy Policy</Link>
                    <p>Cookies Policy</p>
                </div>
            </div>
        </div>
    );
}