"use client";

import styles from './page.module.css';
import { login } from './action';
import AuthComponent from '@/app/ui/public/auth/authComponent';

export default function Page() {

    /*
    Need to validate the form input on the frontend as well as the backend
    */

    return (
      <div className={styles.pagecontainer} >
        <AuthComponent buttonText={"Log in"} action={login} />
      </div>
    );
}