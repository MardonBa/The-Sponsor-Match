import styles from './message.module.css';
import ProfilePicPreview from '../../profilePicPreview/profilePicPreview';

export default function Message() {
    return (
        <div className={styles.message}>
            <ProfilePicPreview className={styles.profilepicture} />
            <div className={styles.messagecontent} >
                <p className={styles.name} >Name</p>
                <p className={styles.preview} >Lorem ipsum dolor sit amet...</p>
            </div>
            <div className={styles.unreadmarker} />
            {/* should only appear if the message is unread/unopened, add a hidden class for when it is read/opened */}

        </div>
    );
}