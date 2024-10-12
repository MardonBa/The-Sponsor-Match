import styles from "./page.module.css";
import LandingFooter from "@/app/ui/notLoggedIn/footer/footer";
import ToggleCard from "@/app/ui/notLoggedIn/comparisonCard/comparisonCard";
import CreatorPricing from "@/app/ui/notLoggedIn/pricing/creatorPricing/creatorPricing";
import SponsorPricing from "@/app/ui/notLoggedIn/pricing/sponsorPricing/sponsorPricing";

export default function Page() {
    return (
        <>
        <div className={styles.pagecontainer} >
            <section className={styles.header} >
                <h2 className={styles.h2} >Start for free</h2>
                <h2 className={styles.h2} >Upgrade when you grow</h2>
            </section>
            <ToggleCard creatorComponent={<CreatorText />} sponsorComponent={<SponsorText />} activeColorStyle={styles.activetabcolor} inactiveColorStyle={styles.inactivetabcolor} />
        </div>
        <LandingFooter />
        </>
    );
}