import styles from "./pricingLayout.module.css";
import LinkToSignUp from "../buttons/linkToSignUp/toSignUp";

// Content is an object that has the title, description, price, button text
// children is a features component that shows all of the available features
export default function PricingLayout({ content, children, classes }) {

    const { title, description, price, buttonText } = content;

    const priceBilledAnnually = content?.priceBilledAnnually;

    let percentOff;
    if (priceBilledAnnually) {
        percentOff = Math.round(((priceBilledAnnually - price * 12) / (price * 12)) * -100);
    }

    return (
        <div className={classes} >
            <h3 className={styles.title} >{title}</h3>
            <p className={styles.description} >{description}</p>
            <div className={styles.pricing}>
                <hr className={styles.linesecondary} />
                <p className={styles.price} >{Number.isInteger(price) ? `$${price}/mo billed monthly` : `${price} forever`}</p>
                {priceBilledAnnually ? <p className={styles.percentoff}>save {percentOff}% when you bill annually</p> : <p></p>}
                <hr className={`${styles.linesecondary} ${styles.bottomline}`} />
            </div>
            <LinkToSignUp text={buttonText} color="secondary" classes={styles.button} />
            <hr className={styles.lineprimary} />
        </div>
    );
}