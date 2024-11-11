"use client";

import GoogleButton from "./googleButton";
import styles from "./authComponent.module.css";
import { loginWithGoogle } from "./action";
import Link from "next/link";

// buttonText is either Log in or Sign up, action is the authentication Server Action
export default function AuthComponent({ buttonText, action }) {

  let navText;
  let navButton;
  let link;
  if (buttonText == "Log in") {
    navText = "Don't have an account?";
    navButton = "Sign up"
    link = "/sign-up"
  } else if (buttonText == "Sign up") {
    navText = "Already have an account?";
    navButton = "Log in";
    link = "/log-in";
  }

  return (
    <div className={styles.container} >
      <form className={styles.loginform} >
        <input id="email" name="email" type="email" required className={styles.input} placeholder="Email" />
        <input id="password" name="password" type="password" required className={styles.input} placeholder="Password" />
        <button formAction={action} className={styles.button} >{buttonText}</button>
      </form>
      <hr className={styles.line} />
      <GoogleButton onClick={() => {loginWithGoogle()}} />
      <div className={styles.nav} >
        <p>{navText} <Link href={link} className={styles.navlink} >{navButton}</Link></p>
      </div>
    </div>
  );
}