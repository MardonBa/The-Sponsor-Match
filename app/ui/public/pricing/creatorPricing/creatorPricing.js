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
                    <li className={styles.li} ><span>3 relationships/mo</span></li>
                    <li className={styles.li} ><span>20 outreach messages/mo</span></li>
                    <li className={styles.li} ><span>Limited post analytics</span></li>
                    <li className={styles.li} ><span>Basic search, no matching</span></li>
                    <li className={styles.li} ><span>Basic legal templates</span></li>
                </ul>
            </PricingLayout>
            <PricingLayout content={proPlan} classes={`${styles.proplan} ${styles.container}`} currentContent="creator" >
                <ul className={styles.featurelist}>
                    <li className={styles.li} ><span>10 relationships/month</span></li>
                    <li className={styles.li} ><span>50 outreach messages/month</span></li>
                    <li className={styles.li} ><span>Full analytics</span></li>
                    <li className={styles.li} ><span>AI-powered matching</span></li>
                    <li className={styles.li} ><span>More legal contracts</span></li>
                    <li className={styles.li} ><span>Detailed profile building</span></li>
                    <li className={styles.li} ><span>Invoice generation</span></li>
                    <li className={styles.li} ><span>File sharing</span></li>
                </ul>
            </PricingLayout>
            <PricingLayout content={premiumPlan} classes={`${styles.premiumplan} ${styles.container}`} currentContent="creator" >
                <ul className={styles.featurelist}>
                    <li className={styles.li} ><span>Unlimited relationships</span></li>
                    <li className={styles.li} ><span>Unlimited outreach messages</span></li>
                    <li className={styles.li} ><span>Full analytics</span></li>
                    <li className={styles.li} ><span>AI-powered matching</span></li>
                    <li className={styles.li} ><span>Customizable legal contracts</span></li>
                    <li className={styles.li} ><span>Detailed profile building</span></li>
                    <li className={styles.li} ><span>Invoice generation</span></li>
                    <li className={styles.li} ><span>File sharing</span></li>
                    <li className={styles.li} ><span>AI-generated outreach templates</span></li>
                    <li className={styles.li} ><span>Community impact metrics</span></li>
                    <li className={styles.li} ><span>Advanced sponsor profiles</span></li>
                </ul>
            </PricingLayout>
        </div>
    );
}