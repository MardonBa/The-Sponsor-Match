"use client";

import styles from './page.module.css';
import { signup, signUpWithGoogle } from './action';
import GoogleButton from 'react-google-button';

export default function Page() {

    return (
        <div className={styles.container} >
            <form className={styles.loginform} >
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required />
                <button formAction={signup} >Sign Up</button>
            </form>
            <GoogleButton onClick={() => {signUpWithGoogle()}} />
        </div>
    );
}