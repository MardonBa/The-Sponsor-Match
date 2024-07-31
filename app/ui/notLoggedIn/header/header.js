import styles from "./header.module.css";
import HeaderCard from "./headerCard.js";
import Link from "next/link";
import Logo from "../../logo/logo";

// TODO fix spacing on homepage

export default function LandingHeader() {
    return (
        <div className={styles.landingheader}>
            <Link href={'/'} className={styles.link} >
                <Logo dimensions={64} />
            </Link>
            <div className={styles.navcontainer} >
                <HeaderCard text="features" gridStyle={styles.features} hoverstyle={styles.hoverunderline} />
                <HeaderCard text="pricing" gridStyle={styles.pricing} hoverstyle={styles.hoverunderline} />
            </div>
            <div className={styles.accountcontainer} >
                <HeaderCard text="sign up" gridStyle={styles.signup} />
                <HeaderCard text="sign in" gridStyle={styles.signin} />
            </div>
        </div>
    );
}