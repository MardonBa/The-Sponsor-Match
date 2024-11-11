"use client";

import GoogleButton from "react-google-button";
import styles from "./authComponent.module.css";
import { loginWithGoogle } from "./action";

// buttonText is either Log in or Sign up, action is the authentication Server Action
export default function AuthComponent({ buttonText, action }) {

  return (
    <div className={styles.container} >
      <form className={styles.loginform} >
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={action} >{buttonText}</button>
        </form>
      <GoogleButton onClick={() => {loginWithGoogle()}} />
    </div>
  );
}