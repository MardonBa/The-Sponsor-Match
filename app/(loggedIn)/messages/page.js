import styles from './page.module.css';
import Message from "@/app/ui/loggedIn/messagesComponents/message/message";

export default function MessagesPage() {
    return (
        <div className={styles.messages} >
            <Message fromUser={true} messageContent={'darkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbg'}/>
            <Message fromUser={false} messageContent={'darkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbg'}/>
        </div>
    );
}