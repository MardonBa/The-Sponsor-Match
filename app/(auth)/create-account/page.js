import styles from "./page.module.css";
import AuthForm from "@/app/ui/public/auth/authForm";
import { signup } from "./action";
import Link from "next/link";
import Logo from "@/app/ui/logo/logo";

export default function Page() {
  return (
    <div className={styles.pagecontainer} >
      <div className={styles.formContainer}>
        <Link className={styles.logocontainer} href="/" >
            <Logo dimensions={64} />
        </Link>
        <AuthForm display={styles.display} buttonType="submit" action={signup} buttonText="Create Account" />
      </div>
    </div>
  );
}