import Image from "next/image";
import styles from "./page.module.css";
import LandingHeader from "./ui/header/header";

export default function LandingPage() {
  return (
    <div className={styles.maincontainer} >
        <LandingHeader />
        <h1 className={`${styles.colorgradient} ${styles.h1}`} ><b>The Sponsor Match</b></h1>
        <section className={styles.contentone}>
            <h3 className={`${styles.h3} ${styles.secondaryunderline}`} >Start a relationship to promote your product or make money off of your content</h3>
            <p className={styles.p} >With our AI-powered matching tool, finding partners has never been easier. 
                Just enter your criteria, and our algorithm will find the best creators to promote your product.
                If you're a creator, the process is just as simple. 
                Our platform connects you with potential sponsors based on your preferences in order to give the best possible experience in monetizing yourself and your content.
                </p>
        </section>
        <section className={styles.contenttwo} >
            <h3 className={styles.h3} >hello world</h3>
        </section>
    </div>
  );
}
