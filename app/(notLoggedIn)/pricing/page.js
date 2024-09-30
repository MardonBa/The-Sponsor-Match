import styles from "./page.module.css";
import LandingFooter from "@/app/ui/notLoggedIn/footer/footer";
import ToggleCard from "@/app/ui/notLoggedIn/comparisonCard/comparisonCard";
import CreatorPricing from "@/app/ui/notLoggedIn/pricing/creatorPricing/creatorPricing";
import SponsorPricing from "@/app/ui/notLoggedIn/pricing/sponsorPricing/sponsorPricing";

export default function Pricing() {
    return (
        <>
        <div className={styles.pagecontainer} >
            <ToggleCard creatorComponent={<CreatorPricing />} sponsorComponent={<SponsorPricing />} />
        </div>
        <LandingFooter />
        </>
    );
}