import styles from "./header.module.css";
import HeaderCard from "./headerCard.js";
import Image from "next/image";
import Link from "next/link";

export default function LandingHeader() {
    return (
        <div className={styles.landingheader}>
            <Link href={'/'} className={styles.logocontainer} >
                <Image 
                    src={'/logo.svg'}
                    width={64}
                    height={64}
                    alt='The Sponsor Match Logo'
                    className={styles.logo}
                />
                <p className={`${styles.colorgradient} ${styles.p}`} ><b>The Sponsor Match</b></p>
            </Link>
            <div className={styles.navcontainer} >
                <HeaderCard text="features" gridStyle={styles.features} hoverstyle={styles.hoverunderline} includeArrow={true} />
                <HeaderCard text="pricing" gridStyle={styles.pricing} hoverstyle={styles.hoverunderline} />
            </div>
            <div className={styles.accountcontainer} >
                <HeaderCard text="sign up" gridStyle={styles.signup} />
                <HeaderCard text="sign in" gridStyle={styles.signin} />
            </div>
        </div>
    );
}