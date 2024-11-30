"use client";

import styles from "./page.module.css";
import Link from "next/link";
import handleRequestPasswordResetLink from "./action.js";
import { useState } from "react";
import { validateEmail } from "@/app/lib/auth/validation";

export default function Page() {

  const [emailSent, setEmailSent] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const validEmail = validateEmail(email);
    if (validEmail) {
      handleRequestPasswordResetLink(email);
      setEmailSent(true);
    } else {
      // TODO handle the invalid email, probably just update the UI
      console.log("invalid email");
    }
  }

  return (
    <div className={styles.container}>
      {
      !emailSent ?
      <>
        <p className={styles.mainheader} >Forgot your password?</p>
        <p className={styles.secondaryheader} >Enter your email to get a password reset link</p>
        <form className={styles.form} onSubmit={(e) => handleFormSubmit(e)} >
          <label htmlFor="email" className={styles.label} >Email:</label>
          <input id="email" name="email" type="email" placeholder="Enter email" className={styles.input} />
          <button type="submit" className={styles.submit} >Request reset link</button>
        </form>
        <Link href="/log-in" className={styles.tologin} >Back to login</Link>
      </>
      :
      <>
        <p className={styles.mainheader} >Please check your email</p>
        <p className={styles.secondaryheader} >An email has been sent to the email you entered with instructions on how to reset your password</p>
        <p className={styles.secondaryheader} ><br/>It is safe to close this tab</p>
        <br/>
        <Link href="/log-in" className={styles.tologin} >Back to login</Link>
      </>
    }
    </div>
  );
}

// TODO update ui if there is an error in the form submission