import styles from './page.module.css';
import { signup, signupWithGoogle } from './action';

export default function Page() {

    return (
        <div className={styles.container} >
            <form className={styles.loginform} >
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required />
                <button formAction={signup} >Sign Up</button>
            </form>
            <div id="g_id_onload"
                data-client_id="872376590097-3e2hv1c5k5etdsqq4r2e370jj5tfo05a.apps.googleusercontent.com"
                data-context="signin"
                data-ux_mode="popup"
                data-callback="signupWithGoogle"
                data-auto_prompt="false"
                data-use_fedcm_for_prompt="true">
            </div>
            <div className="g_id_signin"
                data-type="standard"
                data-shape="pill"
                data-theme="filled_blue"
                data-text="continue_with"
                data-size="large"
                data-logo_alignment="left">
            </div>
        </div>
    );
}