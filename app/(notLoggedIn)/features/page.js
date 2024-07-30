"use client"

import { useRef } from 'react';
import styles from './page.module.css';
import FeatureListing from '../../ui/notLoggedIn/featureListing/featureListing';
import Image from 'next/image';
import { useElementSize } from '@/utils/customHooks';

export default function FeatuersPage() {
    // https://popularpays.com/use-case/content-creation/?utm_source=google&utm_medium=cpc&utm_campaign=20861633461&utm_adset_id=164208522648&utm_ad_id=689885638041&utm_term=content%20maker&gad_source=1&gclid=Cj0KCQjw8J6wBhDXARIsAPo7QA96gXB1x1VLghuX3p8HQP2sJCkFK0qaHoTnczihagsCxMMEGq6B15kaAvTyEALw_wcB
    // Maybe use framer-motion (similar to animations) for the fade-in-out effect
    let targetRef = useRef(null)
    let image_dims = useElementSize(targetRef);

    let img_width = image_dims[0];
    let img_height = img_width * 0.4; // Based on the dimensions/aspect ratio of the images, subject to change

    return(
    <div className={styles.pagecontainer} >
        <div className={styles.content} >
            {/* These 2 divs will be side by side, scrollchangecontainer will have fade-in/out  effect on scroll to next feature */}
            <div className={styles.regularcontainer} >
                <h1 className={styles.pageheading} >Features</h1>
                <FeatureListing feature="matching" reference={targetRef} />
                <FeatureListing feature="engagement" />
                <FeatureListing feature="comparisons" />
                <FeatureListing feature="payments" />
                <FeatureListing feature="legal" />
                <FeatureListing feature="campaign" />
                <FeatureListing feature="communication" />
                <FeatureListing feature="advertising" />
            </div>
            <div className={styles.scrollchangecontainer} >
            <Image
                src={'/homepageResources/searchPreview.png'}
                height={img_height}
                width={img_width}
                alt="search preview" 
                className={styles.image}
            />
            </div>
        </div>
    </div>);
}