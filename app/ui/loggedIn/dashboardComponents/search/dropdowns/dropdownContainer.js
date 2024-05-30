import styles from './dropdownContainer.module.css'
import DropdownItem from './dropdownItem';

// For sponsors, it should have dropdowns to sort by platform, content type, community size, niche, content frequency

export default function DropdownContainer() {
    return (
        <div className={styles.container} >
            <DropdownItem text={'Platform'} />
            <DropdownItem text={'Content Type'} />
            <DropdownItem text={'Community Size'} />
            <DropdownItem text={'Niche'} />
            <DropdownItem text={'Content Frequency'} />
        </div>
    );
}
