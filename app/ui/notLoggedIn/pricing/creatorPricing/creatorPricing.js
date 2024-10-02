import PricingLayout from "../pricingLayout";
import styles from "../pricingLayout.module.css";


export default function CreatorPricing() {

    const freePlan = {
        title: "Basic",
        description: "Best for small creators looking to get early sponsorships",
        price: "Free",
        buttonText: "Sign up"
    }

    const proPlan = {
        title: "Pro",
        description: "Best for creators looking for greater content monetization",
        price: 20,
        priceBilledAnnually: 200,
        buttonText: "Start trial"
    }

    const premiumPlan = {
        title: "Premium",
        description: "Best for creators looking to scale their sponsorships",
        price: 35,
        priceBilledAnnually: 350,
        buttonText: "Start trial"
    }

    return (
        <div className={styles.pricingcontainer} >
            <PricingLayout content={freePlan} classes={`${styles.freeplan} ${styles.container}`} currentContent="creator" >
                <ul className={styles.featurelist}>
                    <li className={styles.li} >hello</li>
                </ul>
            </PricingLayout>
            <PricingLayout content={proPlan} classes={`${styles.proplan} ${styles.container}`} currentContent="creator" >
                <ul className={styles.featurelist}>
                    <li className={styles.li} >Everything in basic, plus...</li>
                </ul>
            </PricingLayout>
            <PricingLayout content={premiumPlan} classes={`${styles.premiumplan} ${styles.container}`} currentContent="creator" >
                <ul className={styles.featurelist}>
                    <li className={styles.li} >Everything in pro, plus...</li>
                </ul>
            </PricingLayout>
        </div>
    );
}