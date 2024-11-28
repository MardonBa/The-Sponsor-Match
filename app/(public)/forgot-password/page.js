import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <div className={styles.container}>
      <p className={styles.mainheader} >Forgot your password?</p>
      <p className={styles.secondaryheader} >Enter your email to get a password reset link</p>
      <form className={styles.form}>
        <label htmlFor="email" className={styles.label} >Email:</label>
        <input id="email" name="email" type="email" placeholder="Enter email" className={styles.input} />
        <button type="submit" className={styles.submit} >Request reset link</button>
      </form>
      <Link href="/log-in" className={styles.tologin} >Back to login</Link>
    </div>
  );
}