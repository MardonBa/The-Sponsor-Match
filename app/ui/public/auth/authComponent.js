"use client";

import GoogleButton from "./oauthButtons/googleButton";
import styles from "./authComponent.module.css";
import { oauthLogin } from "./action";
import Link from "next/link";
import Logo from "../../logo/logo";
import TwitchButton from "./oauthButtons/twitchButton";
import FacebookButton from "./oauthButtons/facebookButton";
import XButton from "./oauthButtons/xButton";
import AuthForm from "./authForm";

// buttonText is either Log in or Sign up, action is the authentication Server Action
export default function AuthComponent({ buttonText, action }) {

  let navText;
  let navButton;
  let link;
  let displayForm;
  let displayButton;
  if (buttonText == "Log in") {
    navText = "Don't have an account?";
    navButton = "Sign up";
    link = "/sign-up";
    displayForm = styles.show;
    displayButton = styles.hide;
    // Create an account will send the user to a page to enter username and password, etc
  } else if (buttonText == "Create an account") {
    navText = "Already have an account?";
    navButton = "Log in";
    link = "/log-in";
    displayForm = styles.hide;
    displayButton = styles.show;
  }

  return (
  <>
    <Link className={styles.logocontainer} href="/" >
        <Logo dimensions={64} />
    </Link>
    <div className={styles.container} >
      <AuthForm displayForm={displayForm} displayButton={displayButton} action={action} buttonText={buttonText} />
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