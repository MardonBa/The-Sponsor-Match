import styles from "./comparisonCard.module.css";

export default function SponsorText() {
    return (
        <div className={styles.cardcontainer}>
            <ul className={styles.list}>
                <li>Select what platforms you want your products to appear on, what content types, and what genre of creators you want promoting your products</li>
                <li>Get matched with like-minded creators that will effectively promote your product using our matching tool</li>
                <li>Work with the creators on what you want the sponsored content to look like, and be in constant communication with creators using our in-house chat</li>
                <li>Use our analytics tools to determine which creators work best for your brand, and maximize engagement</li>
                <li>Handle paymnets with ease, with no need to use a third-party app to get paid. Once the content as been published and the term of the deal have been confirmed by both parties, the payment will go through automatically</li>
                <li>Have any worries? Users have access to our customer support, which will work with you to make sure that any issues you have are resolved</li>
            </ul>
        </div>
    );
}