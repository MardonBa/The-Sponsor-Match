"use client";

import GoogleButton from "./oauthButtons/googleButton";
import styles from "./authComponent.module.css";
import { loginWithGoogle, loginWithTwitch, loginWithFacebook } from "./action";
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
  <>
    <Link className={styles.logocontainer} href="/" >
        <Logo dimensions={64} />
    </Link>
    <div className={styles.container} >
      <div className={styles.formcontainer} >
        <form className={styles.loginform} >
          <input id="email" name="email" type="email" required className={styles.input} placeholder="Email" />
          <input id="password" name="password" type="password" required className={styles.input} placeholder="Password" />
          <button formAction={action} className={styles.button} >{buttonText}</button>
        </form>
        </div>
      <div className={styles.divider} >
        <div className={styles.line} ></div>
          <span className={styles.text} >or</span>
        <div className={styles.line}></div>
      </div>
      <GoogleButton action={loginWithGoogle} />
      <TwitchButton action={loginWithTwitch} />
      <FacebookButton action={loginWithFacebook} />
      <XButton />
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
- For signup, only have user enter email, then continue and get more of
their information in subsequent pages
- Add more oauth providers
- When the user enters their email and eventually password to the form, 
don't send them a confirmation email
- When a user signs in with linked oauth accounts, only let them sign up with the original one
*/