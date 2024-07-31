
import styles from './page.module.css';
import FeatureListing from '../../ui/notLoggedIn/featureListing/featureListing';
import LandingFooter from '@/app/ui/notLoggedIn/footer/footer';

export default function FeatuersPage() {
    // https://popularpays.com/use-case/content-creation/?utm_source=google&utm_medium=cpc&utm_campaign=20861633461&utm_adset_id=164208522648&utm_ad_id=689885638041&utm_term=content%20maker&gad_source=1&gclid=Cj0KCQjw8J6wBhDXARIsAPo7QA96gXB1x1VLghuX3p8HQP2sJCkFK0qaHoTnczihagsCxMMEGq6B15kaAvTyEALw_wcB
    // Maybe use framer-motion (similar to animations) for the fade-in-out effect

    return(
    <div className={styles.pagecontainer} >
        <div className={styles.content} >
            <h1 className={styles.pageheading} >Features</h1>
            <FeatureListing feature="matching" imgSrc={'/homepageResources/searchPreview.png'} />
            <FeatureListing feature="engagement" imgSrc={'/homepageResources/searchPreview.png'} />
            <FeatureListing feature="comparisons" imgSrc={'/homepageResources/searchPreview.png'} />
            <FeatureListing feature="payments" imgSrc={'/homepageResources/searchPreview.png'} />
            <FeatureListing feature="legal" imgSrc={'/homepageResources/searchPreview.png'} />
            <FeatureListing feature="campaign" imgSrc={'/homepageResources/searchPreview.png'} />
            <FeatureListing feature="communication" imgSrc={'/homepageResources/searchPreview.png'} />
            <FeatureListing feature="advertising" imgSrc={'/homepageResources/searchPreview.png'} />
        </div>
        <LandingFooter />
    </div>);
}