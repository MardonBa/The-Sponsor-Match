import styles from './dropdownItem.module.css';
import DownArrow from '@/app/ui/notLoggedIn/downArrow/downArrow';

export default function DropdownItem({ text }) {
    return (
        <div className={styles.container} >
            <p className={styles.text} >{text}</p>
            <DownArrow className={styles.arrow} />
        </div>
    );
}