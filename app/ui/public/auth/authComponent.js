"use client";

import GoogleButton from "./oauthButtons/googleButton";
import styles from "./authComponent.module.css";
import { oauthLogin } from "./action";
import Link from "next/link";
import Logo from "../../logo/logo";
import TwitchButton from "./oauthButtons/twitchButton";
import FacebookButton from "./oauthButtons/facebookButton";
import XButton from "./oauthButtons/xButton";

// buttonText is either Log in or Sign up, action is the authentication Server Action
export default function AuthComponent({ buttonText, action }) {

  let navText;
  let navButton;
  let link;
  let displayForm;
  let buttonType;
  if (buttonText == "Log in") {
    navText = "Don't have an account?";
    navButton = "Sign up";
    link = "/sign-up";
    displayForm = styles.show;
    buttonType = "submit";
    // Create an account will send the user to a page to enter username and password, etc
  } else if (buttonText == "Create an account") {
    navText = "Already have an account?";
    navButton = "Log in";
    link = "/log-in";
    displayForm = styles.hide;
    buttonType = "button";
  }

  return (
  <>
    <Link className={styles.logocontainer} href="/" >
        <Logo dimensions={64} />
    </Link>
    <div className={styles.container} >
      <div className={styles.formcontainer} >
        <form className={styles.loginform} >
          <input id="email" name="email" type="email" required className={`${styles.input} ${displayForm}`} placeholder="Email" />
          <input id="password" name="password" type="password" required className={`${styles.input} ${displayForm}`} placeholder="Password" />
          <button formAction={action} className={styles.button} type={buttonType} onClick={() => action()} >{buttonText}</button>
        </form>
        </div>
      <div className={styles.divider} >
        <div className={styles.line} ></div>
          <span className={styles.text} >or</span>
        <div className={styles.line}></div>
      </div>
      <GoogleButton action={oauthLogin} />
      <TwitchButton action={oauthLogin} />
      <FacebookButton action={oauthLogin} />
      <XButton action={oauthLogin} />
      <div className={styles.nav} >
        <p>{navText} <Link href={link} className={styles.navlink} >{navButton}</Link></p>
      </div>
    </div>
  </>
  );
}

/*
TODOS
- Add more styles to make the page more visually appealing
- For signup, have the user to click a "create an account" button if they want to
sign up with email, then continue and get more of their information in subsequent pages 
(if the user creates an account with email, send them to a page that gets username and password,
authenticate them, then send them to the page to get necessary info)
- When the user enters their email and eventually password to the form, 
don't send them a confirmation email
- When a user signs in with linked oauth accounts, only let them sign up with the original one
*/