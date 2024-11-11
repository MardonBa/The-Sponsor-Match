"use client";

import styles from './page.module.css';
import { signup } from './action';
import AuthComponent from '@/app/ui/public/auth/authComponent';

export default function Page() {

    return (
        <AuthComponent buttonText={"Sign up"} action={signup }/>
    );
}