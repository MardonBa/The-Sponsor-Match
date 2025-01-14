
import Image from "next/image";
import styles from "./page.module.css";
import LinkToSignUp from "../ui/public/buttons/linkToSignUp/toSignUp";
import HowItWorks from "../ui/public/howItWorks/howItWorks";
import ToggleCard from "../ui/public/comparisonCard/comparisonCard";
import LinkToPages from "../ui/public/buttons/linkToPages/linkToPages";
import LandingFooter from "../ui/public/footer/footer";
import  * as AspectRatio from '@radix-ui/react-aspect-ratio';
import CreatorText from "../ui/public/comparisonCard/creators";
import SponsorText from "../ui/public/comparisonCard/sponsors";

/*
    TODO change the checkmarks on this page because they look terrible. Also change the sizing of the card they are in to make it consistent,
    TODO as well as the text sizing
*/

export default async function LandingPage() {

  return (
    <div className={styles.maincontainer} >
        <h1 className={`${styles.colorgradient} ${styles.h1}`} ><b>The Sponsor Match</b></h1>
        <section className={styles.contentone}>
            <AspectRatio.Root ratio={16/9} className={styles.aspectratio} >
                <div className={styles.contentonetext} >
                    <h3 className={`${styles.h3} ${styles.secondaryunderline}`} >Monetize your content or raise awareness about your product with ease</h3>
                    <p className={styles.p} >
                        With our AI-powered matching tool, finding partners has never been easier. 
                        Just enter your criteria, and our algorithm will find the best creators to promote your product.
                        If you&apos;re a creator, the process is just as simple. 
                        Our platform connects you with potential sponsors based on your preferences in order to give the best possible experience in monetizing yourself and your content.
                    </p>
                    <LinkToSignUp text={"Start Now"} color={'secondary'} />
                </div>
            </AspectRatio.Root>
            <AspectRatio.Root ratio={16/9} className={styles.aspectratio} >
                <Image 
                    src={'/homepageResources/searchPreview.png'}
                    alt="search preview"
                    width={0}
                    height={0}
                    className={styles.contentoneimage}
                />
            </AspectRatio.Root>
          {/* 
          The image eventually needs to be sized so that it is in line with the items aroud it, probably another image will be used as well 
          Also, a card/some styles behind it would be good for some depth, 
          */}
        </section>
        <section className={styles.contenttwo} >
          {/* This images will be changed, it is here as a placeholder for sizing and style purposes */}
            <AspectRatio.Root ratio={16/9} className={styles.aspectratio} >
                <Image 
                src={'/homepageResources/searchPreview.png'}
                height={0}
                width={0}
                alt="search preview"
                className={styles.contenttwoimage}
                />
            </AspectRatio.Root>
            <AspectRatio.Root ratio={16/9} className={styles.aspectratio} >
                <div className={styles.contenttwotext} >
                <h3 className={`${styles.h3} ${styles.primaryunderline}`} >Use our data and analytics to maximize engagement and profits.</h3>
                <p className={styles.p} >
                    Whether you&apos;re a content creator or a sponsor, being able to track engagement and performace is a top priority.
                    For sponsors, see which campaigns are resulting in the most conversions.
                    For creators, see which products are resonating most with your audience.
                    These metrics allow for better matches to be made, allowing for an ultra-effective matching tool, and maximized profits for all.
                </p>
                <LinkToSignUp text={"Get Started"} color={'primary'} />
                </div>
            </AspectRatio.Root>
        </section>
        <div className={`${styles.curvespacer} ${styles.layer1}`} >
          <LinkToPages page="pricing" />
        </div>
        <section className={styles.comparisoncontainer} >
          <ToggleCard creatorComponent={<CreatorText />} sponsorComponent={<SponsorText />} activeColorStyle={styles.activetabcolor} inactiveColorStyle={styles.inactivetabcolor} />
        </section>
        <div className={`${styles.curvespacer} ${styles.layer2}`} >
          <LinkToPages page="features" />
        </div>
        <section className={styles.howitworks} >
            <h2 className={`${styles.h2} ${styles.secondaryunderline}`} >How it Works</h2>
            <div className={styles.cardcontainer} >
                <div className={styles.flexrow} >
                  <HowItWorks number={1} header={'Create Your Account'} maintext={'Click sign up, and start creating your account. Create either a sponsor or creator account, and then pick the best plan for your use case. '} />
                  <HowItWorks number={2} header={'Search for partnerships'} maintext={"Creators match with sponsors, and sponsors match with creators! Use our matching tools to forge the best partnerships possible and start working together to create content"} />
                  <HowItWorks number={3} header={'Use our analytics'} maintext={'For both creators and sponsors, see which campaigns have the bset results. Track clicks, views, and interactions, and use data to maximize your brand.'} />
                </div>
                <div className={styles.flexrow} >
                  <HowItWorks number={4} header={'Make/Recieve Payments'} maintext={'Struggling with payments is a thing of the past. Once the agreed-upon content has been created and published, payments will be automatically processed and distributed. '} />
                  <HowItWorks number={5} header={'Optional: Advertise!'} maintext={"Even with our matching tool, you want to get your name out there into the world! Every plan comes with advertising credits to help you create new parternships, and you can buy more to maximize your outcome."} />
                  <HowItWorks number={6} header={'Repeat!'} maintext={"There's no limit to how many partnerships you can have. Create as many or as little partnerships as you want, and grow your brand/monetize your content to your heart's desire."} />
                </div>
            </div>
        </section>
        <LandingFooter />
    </div>
    
  );
}

function getDimensions(classname) { // return the dimensions of the desired element has [height, width]

}