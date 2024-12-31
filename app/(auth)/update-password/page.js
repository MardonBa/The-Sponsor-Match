// TODO set up ui for creating a new password, follow 
// https://supabase.com/docs/guides/auth/passwords?queryGroups=language&language=js&queryGroups=flow&flow=pkce#resetting-a-password

"use client";

import styles from "./page.module.css";
import { useState, useRef } from "react";
import { sanitizeInput } from "../../lib/auth/validation";
import resetPassword from "./action";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Component />
    </Suspense>
  );
}

function Component() {
  const [passwordsMatch, setPasswordsMatch] = useState("do not ");
  const [passwordStyle, setPasswordStyle] = useState(styles.nopassword);
  const [confirmPasswordStyle, setConfirmPasswordStyle] = useState(styles.nopassword);
  const [inputType, setInputType] = useState("password"); // alternative is "text"

  // Ref variables for the password inputs
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  
  // Search parameters
  const searchParams = useSearchParams();
  
  const handlePasswordChange = (e) => {
    e.preventDefault();
    const isValid = sanitizeInput(passwordRef.current.value, 'password');
    if (isValid) {
      setPasswordStyle(styles.goodpassword);
    } else {
      setPasswordStyle(styles.badpassword);
    }
    // also check for if the confirm changes in case the user sets the confirm, changes the original, and they no longer match
    if (passwordRef.current.value === confirmPasswordRef.current.value) {
      setConfirmPasswordStyle(styles.goodpassword);
      setPasswordsMatch(" ");
    } else {
      setConfirmPasswordStyle(styles.badpassword);
      setPasswordsMatch("do not");
    }
    if (passwordRef.current.value === "") {
      setPasswordStyle(styles.nopassword);
    }
    if (confirmPasswordRef.current.value === "") {
      setConfirmPasswordStyle(styles.nopassword);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    e.preventDefault();
    if (passwordRef.current.value === confirmPasswordRef.current.value) {
      setConfirmPasswordStyle(styles.goodpassword);
      setPasswordsMatch(" ");
    } else {
      setConfirmPasswordStyle(styles.badpassword);
      setPasswordsMatch("do not");
    }
    if (confirmPasswordRef.current.value === "") {
      setConfirmPasswordStyle(styles.nopassword);
    }
  };

  const updateVisibility = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmpassword.value;
    const validPassword = sanitizeInput(password, 'password') && (password === confirmPassword);
    if (validPassword) {
      const userId = searchParams.get("id");
      resetPassword(password, userId);
    } else {
      // TODO handle the invalid email, probably just update the UI
      console.log("invalid email");
    }
  }

  return (
    <div className={styles.container}>
      <p className={styles.mainheader} >Password reset</p>
      <p className={styles.secondaryheader} >Enter your password</p>
      <form className={styles.form} onSubmit={(e) => handleFormSubmit(e)} >
        <label htmlFor="password" className={styles.label} >Password:</label>
        <input id="password" name="password" type={inputType} placeholder="Enter password" className={`${passwordStyle} ${styles.input}`} ref={passwordRef} onChange={(e) => handlePasswordChange(e)} />
        <div className={styles.showpasswordcontainer} ><input id="showpassword" name="showpassword" type="checkbox" className={styles.showpassword} onClick={updateVisibility} /><p>Show password</p></div>
        <p className={styles.passwordreqs}>Password must have at least 8 characters, at least one uppercase letter and at least one number</p>
        <label htmlFor="confirmpassword" className={styles.label} >Confirm password:</label>
        <input id="confirmpassword" name="confirmpassword" type="password" placeholder="Confirm password" className={`${confirmPasswordStyle}  ${styles.input}`} ref={confirmPasswordRef} onChange={(e) => handleConfirmPasswordChange(e)} />
        <p>Passwords {passwordsMatch} match</p>
        <button type="submit" className={styles.submit} >Reset password</button>
      </form>
    </div>
  );
}