"use client";

import styles from "./authForm.module.css";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { resendConfirmationEmail } from "./action";

export default function AuthForm({ displayForm, displayButton, action, buttonText }) {

  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [email, setEmail] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      email: e.target.email?.value,
      password: e.target.password?.value,
      confirmedPassword: e.target.confirmpassword?.value
    };

    setEmail(formData.email);

    try {
      const result = await action(formData);

      if (result.success) {
        setSignUpSuccess(true);
      } else {
        // TODO update the UI if something is invalid
      }
    } catch (error) {
      console.log(error);
      // TODO set up some sort of error handling, may display a little thing that says
      // an error occured and try again
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleReconfirm = async () => {
    console.log(email);
    const response = await fetch('/auth/admin', {
      method: "POST", 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    // don't really need to do anything here
    const result = await response.json();
    if (result.error) {
      console.error('Error resending invite:', result.error);
    } else {
      console.log('Invite sent:', result.data);
    }

  }

  return (
    <div className={styles.formcontainer} >
      <form className={`${styles.loginform} ${displayForm}`} >
        <input id="email" name="email" type="email" required className={styles.input} placeholder="Email" />
        <input id="password" name="password" type="password" required className={styles.input} placeholder="Password" />
        <button formAction={action} className={styles.button} >{buttonText}</button>
      </form>
      <Dialog.Root open={open} onOpenChange={setOpen} >
        <Dialog.Trigger className={`${styles.button} ${displayButton}`} >{buttonText}</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay} />
          <Dialog.Content className={styles.dialog}>
            <Dialog.Title className={styles.dialogtitle} >Create Your Account</Dialog.Title>
            <Dialog.Close className={styles.closebutton}>Close</Dialog.Close>
            {signUpSuccess ? 
            <div className={styles.container}>
              <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewBox="0 0 150 150" version="1.1" className={styles.mailicon} >
                <g id="surface1">
                  <path style={{stroke: "none", fillRule: "evenodd", fill: "var(--primary)", fillOpacity: "1"}} d="M 79.472656 1.644531 C 76.65625 0.238281 73.34375 0.238281 70.527344 1.644531 L 5.527344 34.144531 C 2.140625 35.839844 0 39.300781 0 43.089844 L 0 120 C 0 125.523438 4.476562 130 10 130 L 140 130 C 145.523438 130 150 125.523438 150 120 L 150 43.089844 C 150 39.300781 147.859375 35.839844 144.472656 34.144531 Z M 135.6875 40.933594 L 75 10.589844 L 14.308594 40.933594 L 75 72.914062 Z M 10 48.835938 L 10 120 L 140 120 L 140 48.835938 L 77.097656 81.980469 C 75.785156 82.671875 74.214844 82.671875 72.902344 81.980469 Z M 10 48.835938 "/>
                </g>
              </svg>
              <h2 className={styles.text}>Thank you for creating your account!</h2>
              <p className={styles.text} >You've been sent an email with a link to finish setting up your account. Do not close this window or reload the page until you have recieved an email from us to finish setting up your account.</p>
              <p className={styles.text} >Click <i onClick={handleReconfirm} className={styles.resendconfirmation}>here</i> to resend the email.</p>
            </div>
            : 
            <form className={styles.dialogform} onSubmit={handleSignUp} >
              <input id="email" name="email" type="email" required className={styles.input} placeholder="Email" />
              <input id="password" name="password" type="password" required className={styles.input} placeholder="Password" />
              <input id="confirmpassword" name="confirmpassword" type="password" required className={styles.input} placeholder="Confirm password" />
              <button type="submit" disabled={isSubmitting} className={styles.button} >Sign up</button>
            </form>}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

// Need to rescale the svg, maybe edit it to have some color
// Make clicking the link resend the auth email
// Also need to change the auth email, customize it
