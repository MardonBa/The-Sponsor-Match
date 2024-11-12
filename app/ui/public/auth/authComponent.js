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
      <div className={styles.formcontainer} >
        <form className={styles.loginform} >
          <input id="email" name="email" type="email" required className={styles.input} placeholder="Email" />
          <input id="password" name="password" type="password" required className={styles.input} placeholder="Password" />
          <button formAction={action} className={styles.button} >{buttonText}</button>
        </form>
        <div className={styles.divider} >
          <div className={styles.line} ></div>
          <span className={styles.text} >or</span>
          <div className={styles.line}></div>
        </div>
        <GoogleButton clickAction={loginWithGoogle} buttonStyles={styles.googlebutton} />
        <div className={styles.nav} >
          <p>{navText} <Link href={link} className={styles.navlink} >{navButton}</Link></p>
        </div>
      </div>
    </div>
  );
}

/*
TODOS
- Add more styles to make the page more visually appealing
- Add a link back to the homepage
- For signup, only have user enter email, then continue and get more of
their information in subsequent pages
- Add more oauth providers
- When the user enters their email and eventually password to the form, 
don't send them a confirmation email
*/