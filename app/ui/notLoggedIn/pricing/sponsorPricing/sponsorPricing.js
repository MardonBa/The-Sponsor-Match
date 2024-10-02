import PricingLayout from "../pricingLayout";
import styles from "../pricingLayout.module.css";

export default function SponsorPricing() {
    const freePlan = {
        title: "Basic",
        description: "Best for starting out and sponsoring a few creators",
        price: "Free",
        buttonText: "Sign up"
    }

    const proPlan = {
        title: "Pro",
        description: "Best for growing your marketing reach to greater audiences",
        price: 35,
        priceBilledAnnually: 350,
        buttonText: "Start trial"
    }

    const premiumPlan = {
        title: "Premium",
        description: "Best for maximizing your product reach and brand visibility",
        price: 60,
        priceBilledAnnually: 600,
        buttonText: "Start trial",
    }

    return (
        <div className={styles.pricingcontainer} >
            <PricingLayout content={freePlan} classes={`${styles.freeplan} ${styles.container}`} currentContent="sponsor" >
                <ul className={styles.featurelist}>
                    <li className={styles.li} >argh</li>
                </ul>
            </PricingLayout>
            <PricingLayout content={proPlan} classes={`${styles.proplan} ${styles.container}`} currentContent="sponsor" >
                <ul className={styles.featurelist}>
                    <li className={styles.li} >Everything in basic, plus...</li>
                </ul>
            </PricingLayout>
            <PricingLayout content={premiumPlan} classes={`${styles.premiumplan} ${styles.container}`} currentContent="sponsor" >
                <ul className={styles.featurelist}>
                    <li className={styles.li} >Everything in pro, plus...</li>
                </ul>
            </PricingLayout>
        </div>
    );
}