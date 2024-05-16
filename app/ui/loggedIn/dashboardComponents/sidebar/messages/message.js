import styles from './message.module.css';

export default function Message() {
    return (
        <div className={styles.message}>
            <div className={styles.profilepicture} >
                {/* container for the user's profile picture */}
            </div>
            <div className={styles.messagecontent} >
                <p className={styles.name} >Name</p>
                <p className={styles.preview} >Lorem ipsum dolor sit amet...</p>
            </div>
            <div className={styles.unreadmarker} />
            {/* should only appear if the message is unread/unopened, add a hidden class for when it is read/opened */}

        </div>
    );
}