"use client";

import styles from './page.module.css';
import GoogleButton from 'react-google-button';
import supabase from '@/utils/supabase/supabaseClient';

export default function Page() {

    const handleClick = () => {
        supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: "http://localhost:3000/dashboard"            }
        });
    }

    return (
        <div className={styles.container} >
            <h2 className={styles.h2} >Log In to The Sponsor Match</h2>
            <GoogleButton onClick={handleClick} label="Log in with Google" />


            <form>
                <label></label>
            </form>
        </div>
    );
}