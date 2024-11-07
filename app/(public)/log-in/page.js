import styles from './page.module.css';
import { login } from './action';

export default function Page() {

    /*
    Need to validate the form input on the frontend as well as the backend
    */

    return (
        <div className={styles.container} >
            <form className={styles.loginform} >
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required />
                <button formAction={login} >Log in</button>
            </form>
        </div>
    );
}

function test(formData) {
    console.log(formData);
}