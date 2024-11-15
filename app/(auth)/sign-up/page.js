"use client";

import styles from './page.module.css';
import { signup, redirectToSignUp } from './action';
import AuthComponent from '@/app/ui/public/auth/authComponent';

export default function Page() {

    return (
      <div className={styles.pagecontainer} >
        <AuthComponent buttonText={"Create an account"} action={redirectToSignUp}/>
      </div>
    );
}