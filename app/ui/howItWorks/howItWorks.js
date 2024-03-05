import styles from './howItWorks.module.css'

export default function HowItWorks({ number, header, maintext }) {
    return (
        <div className={styles.cardcontainer} >
            <h2 className={styles.head} >{number}) {header}</h2>
            <p className={styles.maintext} >{maintext}</p>
        </div>
    );
}