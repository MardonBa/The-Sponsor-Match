import styles from "./page.module.css";
import LandingFooter from "@/app/ui/notLoggedIn/footer/footer";
import ToggleCard from "@/app/ui/notLoggedIn/comparisonCard/comparisonCard";

export default function Pricing() {
    return (
        <>
        <div className={styles.pagecontainer} >
            <ToggleCard />
        </div>
        <LandingFooter />
        </>
    );
}