import styles from "./sidebar.module.css";

export function Sidebar({ className, children }) {
    // Should eventually track the state and have 2 styles for the sidebar: collapsed and full
    // State should change whenever the button is pressed
    return (
        <div className={className} >
            {children}
        </div>
    );
}