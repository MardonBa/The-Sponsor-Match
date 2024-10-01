import styles from "./toSignUp.module.css";
import Link from 'next/link';

export default function LinkToSignUp({ text, color, classes }) {
    let colorStyle;
    if (color == 'primary') {
        colorStyle = styles.bgprimary;
    } else if (color == 'secondary') {
        colorStyle = styles.bgsecondary;
    } else {
        colorStyle = styles.bgprimary; // default for a fallback
    }

    return (
        <Link className={`${styles.container} ${colorStyle} ${classes}`} href={'/sign-up'} >
            <p className={styles.text} >{text}</p>
        </Link>
    );
}