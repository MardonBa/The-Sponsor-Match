import styles from './message.module.css';

export default function Message({ fromUser, messageContent }) {

    let showPFP = !fromUser;
    let colorStyle = fromUser ? styles.primarybg : styles.darkbg;

    return (
        <div className={`${styles.messagecontainer} ${colorStyle}`} >
            <p>{messageContent}</p>
        </div>
    );
}