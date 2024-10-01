import PricingLayout from "../pricingLayout";
import styles from "../pricingLayout.module.css";


export default function CreatorPricing() {

    const freePlan = {
        title: "Basic",
        description: "Best for starting out and learning about the platform",
        price: "Free",
        buttonText: "Sign up"
    }

    const proPlan = {
        title: "Pro",
        description: "Best for starting out and learning about the platform",
        price: 10,
        priceBilledAnnually: 100,
        buttonText: "Start trial"
    }

    const premiumPlan = {
        title: "Premium",
        description: "Best for starting out and learning about the platform",
        price: 18,
        priceBilledAnnually: 180,
        buttonText: "Start trial"
    }

    return (
        <div className={styles.pricingcontainer} >
            <PricingLayout content={freePlan} classes={`${styles.freeplan} ${styles.container}`} >

            </PricingLayout>
            <PricingLayout content={proPlan} classes={`${styles.proplan} ${styles.container}`} >
                
            </PricingLayout>
            <PricingLayout content={premiumPlan} classes={`${styles.premiumplan} ${styles.container}`} >
                
            </PricingLayout>
        </div>
    );
}