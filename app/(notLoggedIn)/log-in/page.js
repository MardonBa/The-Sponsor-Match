"use client";

import styles from './page.module.css';
import GoogleButton from 'react-google-button';
import supabase from '@/utils/supabase/supabaseClient';
import { redirect } from 'next/navigation';

export default function Page() {

    const handleClick = async () => {
        supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: "http://localhost:3000/dashboard"
            }
        });

        const {data: {session: {user}}, error} = await supabase.auth.getSession();

        if (error) {
            // Handle error
            // TODO build out error handling
        }
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