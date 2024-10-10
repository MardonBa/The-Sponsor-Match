"use client"

import styles from './page.module.css';
import supabase from '@/utils/supabase/supabaseClient';
import GoogleButton from 'react-google-button';

export default function Page() {

    const handleClick = () => {
        supabase.auth.signInWithOAuth({
            provider: "google"
        });
    }

    return (
        <div className={styles.container} >
         <GoogleButton onClick={handleClick} >click here</GoogleButton>
        </div>
    );
}