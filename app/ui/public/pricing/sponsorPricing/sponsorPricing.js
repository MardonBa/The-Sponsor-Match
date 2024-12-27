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
                    <li className={styles.li}><span>1 campaign</span></li>
                    <li className={styles.li} ><span>5 relationships/campaign</span></li>
                    <li className={styles.li} ><span>20 outreach messages/month</span></li>
                    <li className={styles.li} ><span>Limited sponsorship performance analytics</span></li>
                    <li className={styles.li} ><span>Basic search, no matching</span></li>
                    <li className={styles.li} ><span>Basic legal templates</span></li>
                </ul>
            </PricingLayout>
            <PricingLayout content={proPlan} classes={`${styles.proplan} ${styles.container}`} currentContent="sponsor" >
                <ul className={styles.featurelist}>
                    <li className={styles.li}><span>8 campaigns</span></li>
                    <li className={styles.li} ><span>10 relationships/campaign</span></li>
                    <li className={styles.li} ><span>200 outreach messages/month</span></li>
                    <li className={styles.li} ><span>Full sponsorship performance analytics</span></li>
                    <li className={styles.li} ><span>AI-powered matching</span></li>
                    <li className={styles.li} ><span>More legal templates</span></li>
                    <li className={styles.li} ><span>Detailed profile building</span></li>
                    <li className={styles.li} ><span>Invoice generation</span></li>
                    <li className={styles.li} ><span>Budgeting tools</span></li>
                    <li className={styles.li} ><span>File sharing</span></li>
                </ul>
            </PricingLayout>
            <PricingLayout content={premiumPlan} classes={`${styles.premiumplan} ${styles.container}`} currentContent="sponsor" >
                <ul className={styles.featurelist}>
                    <li className={styles.li}><span>Unlimited campaigns</span></li>
                    <li className={styles.li} ><span>Unlimited relationships</span></li>
                    <li className={styles.li} ><span>Unlimited outreach messages/month</span></li>
                    <li className={styles.li} ><span>Full sponsorship performance analytics</span></li>
                    <li className={styles.li} ><span>AI-powered matching</span></li>
                    <li className={styles.li} ><span>Customizable legal templates</span></li>
                    <li className={styles.li} ><span>Detailed profile building</span></li>
                    <li className={styles.li} ><span>Invoice generation</span></li>
                    <li className={styles.li} ><span>Budgeting tools</span></li>
                    <li className={styles.li} ><span>File sharing</span></li>
                    <li className={styles.li} ><span>Creator performance metrics</span></li>
                    <li className={styles.li} ><span>Post-campaign recap analytics</span></li>
                    <li className={styles.li} ><span>Integration to major CRMs</span></li>
                </ul>
            </PricingLayout>
        </div>
    );
}