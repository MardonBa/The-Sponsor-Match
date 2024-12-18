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

/*
TODOS
- Add more styles to make the page more visually appealing
- For signup, have the user to click a "create an account" button if they want to
sign up with email, then continue and get more of their information in subsequent pages 
(if the user creates an account with email, send them to a page that gets username and password,
authenticate them, then send them to the page to get necessary info)
Link to the account setup page in the confirmation email
- When a user signs in with linked oauth accounts, only let them sign up with the original one
- add a forgot password to log in
- on create account dialog, check is a user with the email exists. If it does, tell the user
that they already have an account associated with that email, prompt them to go to the login page
- add a "remember me" checkbox (also look into what it should actually do to remember the user)
- make the user get redirected to dashboard when they go to the homepage if they are authenticated
- if the user tries to sign up with an email linked to an account, tell them an account already exists
with that email.
- if the user tries to log in or reset password for an email not linked to an account, tell them no
account with that email exists
*/