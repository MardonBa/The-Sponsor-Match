import Image from "next/image";
import styles from "./page.module.css";
import LandingHeader from "./ui/header/header";
import LinkToSignUp from "./ui/linkToSignUp/toSignUp";

export default function LandingPage() {
  return (
    <div className={styles.maincontainer} >
        <LandingHeader />
        <h1 className={`${styles.colorgradient} ${styles.h1}`} ><b>The Sponsor Match</b></h1>
        <section className={styles.contentone}>
            <h3 className={`${styles.h3} ${styles.secondaryunderline}`} >Start a relationship to promote your product or make money off of your content</h3>
            <p className={styles.p} >
                With our AI-powered matching tool, finding partners has never been easier. 
                Just enter your criteria, and our algorithm will find the best creators to promote your product.
                If you're a creator, the process is just as simple. 
                Our platform connects you with potential sponsors based on your preferences in order to give the best possible experience in monetizing yourself and your content.
            </p>
            <LinkToSignUp text={"Start Now"} color={'secondary'} />
        </section>
        <section className={styles.contenttwo} >
            <h3 className={`${styles.h3} ${styles.primaryunderline}`} >Use our data and analytics to maximize engagement and profits.</h3>
            <p className={styles.p} >
                Whether you're a content creator or a sponsor, being able to track engagement and performace is a top priority.
                For sponsors, see which campaigns are resulting in the most conversions.
                For creators, see which products are resonating most with your audience.
                These metrics allow for better matches to be made, allowing for an ultra-effective matching tool.
            </p>
            <LinkToSignUp text={"Start Now"} color={'primary'} />
        </section>
    </div>
  );
}
