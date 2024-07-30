import styles from "./toSignUp.module.css";

export default function LinkToSignUp({ text, color }) {
    let colorStyle;
    if (color == 'primary') {
        colorStyle = styles.bgprimary;
    } else if (color == 'secondary') {
        colorStyle = styles.bgsecondary;
    } else {
        colorStyle = styles.bgprimary; // default for a fallback
    }

    return (
        <div className={`${styles.container} ${colorStyle}`} >
            <p className={styles.text} >{text}</p>
        </div>
    );
}