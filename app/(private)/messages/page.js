"use client"

import styles from './page.module.css';
import Message from "@/app/ui/loggedIn/messagesComponents/message/message";
import SendButton from "@/app/ui/loggedIn/messagesComponents/sendButton/sendButton";
import { useRef, useEffect, useState } from "react";

export default function MessagesPage() {

    const messagesRef = useRef(null);
    const messageTextRef = useRef(null);
    const [messageText, setMessageText] = useState("");

    useEffect(() => {
        const messages = messagesRef.current;
        console.log(messages);
        if (messages) {
            console.log("working");
            messages.scrollTop = messages.scrollHeight;
        }
    }, []);

    const onMessageTextChange = (e) => {
        setMessageText(e.target.textContent);
        console.log(`Message text: ${messageText}`);
    }

    return (
        <div className={styles.messagescontainer} >
            <div className={styles.messages} ref={messagesRef}  >
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
                <span className={styles.searchbar} role="textbox" contentEditable spellCheck="true" ref={messageTextRef} onInput={onMessageTextChange} />
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