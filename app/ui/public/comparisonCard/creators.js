import styles from "./comparisonCard.module.css";

export default function CreatorText() {
    return (
        <div className={styles.cardcontainer}>
            <ul className={styles.list}>
                <li>Customize your profile based on your platform(s), content style, and sponsorship preferences</li>
                <li>Find sponsors that match your creative vision and style using our matching tool</li>
                <li>Either make content for you to publish yourself, or for you to send over to the sponsor for them to publish. Make all communication easy with our built-in chat</li>
                <li>Analyze which sponsorships appeal most to your viewers, and use that information to build long-term relationships with sponsors</li>
                <li>Handle paymnets with ease, with no need to use a third-party app to get paid. Once the content as been published and the term of the deal have been confirmed by both parties, the payment will go through automatically</li>
                <li>Have any worries? Users have access to our customer support, which will work with you to make sure that any issues you have are resolved</li>
            </ul>
        </div>
    );
}