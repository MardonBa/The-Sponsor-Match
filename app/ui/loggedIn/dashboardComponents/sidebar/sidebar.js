import styles from "./sidebar.module.css";

export default function Sidebar({ style, children }) {
    // Should eventually track the state and have 2 styles for the sidebar: collapsed and full
    // State should change whenever the button is pressed
    return (
        <div className={`${style} ${styles.sidebar}`} >
            {children}
        </div>
    );
}