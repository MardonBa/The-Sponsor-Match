import styles from "./authForm.module.css";

export default function AuthForm({ display, buttonType, action, buttonText }) {
  return (
    <div className={styles.formcontainer} >
      <form className={styles.loginform} >
        <input id="email" name="email" type="email" required className={`${styles.input} ${display}`} placeholder="Email" />
        <input id="password" name="password" type="password" required className={`${styles.input} ${display}`} placeholder="Password" />
        <button formAction={action} className={styles.button} type={buttonType} onClick={() => action()} >{buttonText}</button>
      </form>
    </div>
  );
}