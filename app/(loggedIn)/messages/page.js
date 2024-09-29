import styles from './page.module.css';
import Message from "@/app/ui/loggedIn/messagesComponents/message/message";
import SendButton from "@/app/ui/loggedIn/messagesComponents/sendButton/sendButton";


export default function MessagesPage() {

        

    return (
        <div className={styles.messagescontainer} >
            <div className={styles.messages} >
                <Message fromUser={true} messageContent={'darkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbg'}/>
                <Message fromUser={false} messageContent={'darkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbg'}/>
                <Message fromUser={true} messageContent={'darkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbg'}/>
                <Message fromUser={false} messageContent={'darkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbg'}/>
                <Message fromUser={false} messageContent={'darkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbg'}/>
                <Message fromUser={false} messageContent={'darkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbg'}/>
                <Message fromUser={true} messageContent={'darkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbg'}/>
                <Message fromUser={true} messageContent={'darkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbg'}/>
                <Message fromUser={false} messageContent={'darkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbg'}/>
                <Message fromUser={false} messageContent={'darkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbgdarkbg'}/>
            </div>
            <div className={styles.searchbarcontainer} >
                <span className={styles.searchbar} role="textbox" contentEditable spellcheck="true"  />
                <div className={styles.sendbutton} >
                    <SendButton />
                    {/* 
                    This will eventually trigger an action on clicking that sends the message
                    */}
                </div>
            </div>
        </div>
    );
}