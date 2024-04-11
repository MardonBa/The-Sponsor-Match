import styles from "./headerCard.module.css";
import ArrowComponent from "../downArrow/downArrow.js";
import Link from 'next/link';

export default function HeaderCard({ text, gridStyle, hoverstyle=undefined, includeArrow=false }) {
    // hoverstyle used for all cards except the sign in and sign up
    // ArrowComponent is only there for the features dropdown, all others will have it as undefined
    return (
    <Link className={`${styles.card} ${gridStyle}`} href={`/${text}`} > {/* Setting the  href to the text makes it easy to use custom linking*/}
        <p className={`${styles.text} ${hoverstyle}`}>{text}{includeArrow ? <ArrowComponent /> : <i></i>}</p>
    </Link>
    );
}
