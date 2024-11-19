"use client";

import styles from "./authForm.module.css";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

export default function AuthForm({ displayForm, displayButton, action, buttonText }) {

  const [open, setOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState(<DialogForm />);

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
            <DialogForm action={action} />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

function DialogForm({ action }) {
  return (
    <>
      <Dialog.Title className={styles.dialogtitle} >Create Your Account</Dialog.Title>
      <Dialog.Close className={styles.closebutton}>Close</Dialog.Close>
      <form className={styles.dialogform} >
        <input id="email" name="email" type="email" required className={styles.input} placeholder="Email" />
        <input id="password" name="password" type="password" required className={styles.input} placeholder="Password" />
        <input id="confirmpassword" name="confirmpassword" type="password" required className={styles.input} placeholder="Confirm password" />
        <button formAction={action} className={styles.button} >Sign up</button>
      </form>
    </>
  );
}

function DialogCheckEmail() {
  return (
    <div>
      hello world
    </div>
  );
}