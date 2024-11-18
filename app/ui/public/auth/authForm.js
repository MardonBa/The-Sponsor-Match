"use client";

import styles from "./authForm.module.css";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

export default function AuthForm({ displayForm, displayButton, action, buttonText }) {

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.formcontainer} >
      <form className={`${styles.loginform} ${displayForm}`} >
        <input id="email" name="email" type="email" required className={styles.input} placeholder="Email" />
        <input id="password" name="password" type="password" required className={styles.input} placeholder="Password" />
        <button formAction={action} className={styles.button} >{buttonText}</button>
      </form>
      <Dialog.Root open={open} onOpenChange={setOpen} >
        <Dialog.Trigger className={`${styles.button} ${displayButton}`} onClick={() => action()} >{buttonText}</Dialog.Trigger>
      </Dialog.Root>
    </div>
  );
}

// no need for an action, use the radix ui dialog