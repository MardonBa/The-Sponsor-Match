import styles from "./header.module.css";
import HeaderCard from "./headerCard.js";


export default function LandingHeader() {
    return (
        <div className={styles.landingheader}>
            <p className={styles.logo}>logo</p> {/* Will eventually be an <Image /> with the logo */}
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