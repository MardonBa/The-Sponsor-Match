"use client"

import styles from './page.module.css';
import GoogleButton from 'react-google-button';

export default function Page() {

    const handleClick = () => {
        supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: "http://localhost:3000/dashboard"
            }
        });
    }

    return (
        <div className={styles.container} >
         <GoogleButton onClick={handleClick} label="Sign up with Google" >click here</GoogleButton>
        </div>
    );
}