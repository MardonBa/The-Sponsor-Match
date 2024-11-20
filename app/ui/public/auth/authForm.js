"use client";

import styles from "./authForm.module.css";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

export default function AuthForm({ displayForm, displayButton, action, buttonText }) {

  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      email: e.target.email?.value,
      password: e.target.password?.value,
      confirmedPassword: e.target.confirmpassword?.value
    };

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
            {signUpSuccess ? <DialogCheckEmail/> : <form className={styles.dialogform} onSubmit={handleSignUp} >
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

function DialogCheckEmail() {
  return (
    <div>
      hello world
    </div>
  );
}