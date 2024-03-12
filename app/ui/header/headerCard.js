import styles from "./headerCard.module.css";
import ArrowComponent from "../downArrow/downArrow.js";

export default function HeaderCard({ text, gridStyle, hoverstyle=undefined, includeArrow=false }) {
    // hoverstyle used for all cards except the sign in and sign up
    // ArrowComponent is only there for the features dropdown, all others will have it as undefined
    return (
    <div className={`${styles.card} ${gridStyle}`} >
        <p className={`${styles.text} ${hoverstyle}`}>{text}{includeArrow ? <ArrowComponent /> : <i></i>}</p>
    </div>
    );
}
