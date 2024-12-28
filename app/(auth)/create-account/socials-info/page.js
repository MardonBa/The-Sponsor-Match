// For creators only. Based on the platforms they selected, have them link each one (maybe get community size from api, otherwise prompt them)

import styles from "./page.module.css";
import GoogleButton from "@/app/ui/public/auth/oauthButtons/googleButton";
import FacebookButton from "@/app/ui/public/auth/oauthButtons/facebookButton";
import { oauthLogin } from "@/app/ui/public/auth/action";

export default function Page() {
    return (
        <div className={styles.container}>
            <GoogleButton action={oauthLogin} />
            <FacebookButton aciton={oauthLogin} />
            <form classname={styles.form} >
                <lebel className={styles.label} htmlFor="blog" >Link your personal blog (if any)</lebel>
                <input id="blog" name="blog" type="text" className={styles.input} placeholder="Enter link here" />
            </form>
        </div>
    );
}