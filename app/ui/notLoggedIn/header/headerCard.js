import styles from "./headerCard.module.css";
import Link from 'next/link';

export default function HeaderCard({ text, gridStyle, hoverstyle=undefined }) {
    // hoverstyle used for all cards except the sign in and sign up
    // ArrowComponent is only there for the features dropdown, all others will have it as undefined
    let href_text = text.replace(" ", "-")
    return (
    <Link className={`${styles.card} ${gridStyle}`} href={`/${href_text}`} > {/* Setting the  href to the text makes it easy to use custom linking*/}
        <p className={`${styles.text} ${hoverstyle}`}>{text}</p>
    </Link>
    );
}
