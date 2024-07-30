"use client"

import styles from './featureListing.module.css';
import LinkToSignUp from '../buttons/linkToSignUp/toSignUp';
import { useRef } from 'react';
import { useElementSize } from '@/utils/customHooks';
import Image from 'next/image';
import { motion } from "framer-motion"

/*
TODO: fix image dynamic sizing, fix spacing based on screen size
*/

export default function FeatureListing({ feature, imgSrc }) {

    let textRef = useRef(null);
    let image_dims = useElementSize(textRef);

    let img_width = image_dims[0] / 3;
    let img_height = 0.5 * img_width; // Based on the dimensions/aspect ratio of the images, subject to change

    let [heading, subHeading, description, buttonText] = featureText(feature);

    const imageAnimation = {
        offscreen: {
          opacity: 0
        },
        onscreen: {
          opacity: 1,
          transition: {
            type: "ease",
            duration: 1
          }
        }
      };

    
    return (
        <div className={styles.featurecontainer} ref={textRef} >
            <div className={styles.textcontainer}>
                <h2 className={styles.heading} >{heading}</h2>
                <h4 className={styles.subheading} >{subHeading}</h4>
                <p className={styles.description} >{description}</p>
                <LinkToSignUp  text={buttonText} />
            </div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false }}
                className={styles.imagecontainer}
                variants={imageAnimation}
            >
                <Image
                    src={imgSrc}
                    height={img_height}
                    width={img_width}
                    alt="search preview" 
                    className={styles.image}
                />
            </motion.div>
        </div>
    );
}

function featureText(feature) { // Gets passed in the feature from the component, returns an list with text for each part of the component
    
    let heading;
    let subHeading;
    let description;
    let buttonText;
    
    /*
    Features can be as follows: (variable type enclosed)
    AI-powered matching tool (matching)
    Engagement analytics (engagement)
    Platform comparison and creator comparison analytics (comparisons)
    Payment handling (payments)
    Legal document handling (legal)
    Campaign tracking (campaign)
    In-house communication (communication)
    Advertising (advertising)
    */

    switch (feature) {
        case 'matching':
            heading = 'AI-powered matching tool';
            subHeading = 'Use the power of AI to match with sponsors or creators';
            description = 'Find opportunities more easily than ever before with our AI-powered matching tool, which takes your preferences and finds the best creators to maximize your brand and advertising reach.';
            buttonText = 'Get started';
            break;
        case 'engagement':
            heading = 'Engagement analytics';
            subHeading = 'Track the engagement of your campaigns (sponsor specific)';
            description = 'With our engagement tracking analytics, see which campaigns are leading to the most engagement, which creators are leading to the most engagement, and what kinds of audiences you are reaching the most.';
            buttonText = 'Sign up';
            break;
        case 'comparisons':
            heading = 'Platform/creator/sponsor comparisons';
            subHeading = 'Compare platforms, creators, and/or sponsors with a few clicks';
            description = "If you're a sponsor, these analytics will help you determine which sponsors and which platforms are best promoting your brand. If you're a creator, take a peek at what types of sponsors resonate with your audience. For both sponsors and creators, these analytics can be used to maximize profit and engagement.";
            buttonText = 'Create your account';
            break;
        case 'payments':
            heading = 'Payment handling';
            subHeading = 'Handle payments with ease using Stripe';
            description = 'As soon as the requirements are met as outlined in the sponsorship agreement, payments will be made. This means as a sponsor or a creator, your banking information will be securely stored so that payments can be made with no extra work. In rare the event of a payment dispute, our support team is here to help.';
            buttonText = 'Get started';
            break;
        case 'legal': 
            heading = 'Handling legal documents';
            subHeading = 'Easily generate and fill out legal documents';
            description = 'The most frustrating part of sponsorships is often the legal hassle. With our built-in tooling, generate legal agreements and fill them out with no extra work. Just enter the requirements, have all parties sign, and move on to what matters.';
            buttonText = 'Sign up';
            break;
        case 'campaign':
            heading = 'Managing campaigns (sponsor specific)';
            subHeading = 'Manage your marketing campaigns all in one place';
            description = "Easily create new campaigns and track their impact and success. It's as easy as clicking a few buttons, fill out the title, goals, and then start tracking and managing your campaigns from our easy to us dashboard. No more searching for documents and guessing what goes with which campaign, everything is in one place.";
            buttonText = 'Create your account';
            break;
        case 'communication':
            heading = 'In-house communication';
            subHeading = "Chat with the other party in-app, no worrying about contact info";
            description = 'Sharing contact information can be difficult and personal, and is a thing of the past. Use our chat feature to build relationships, make sure your goals align, and find good fits. All before making a final agreement.';
            buttonText = 'Get started';
            break;
        case 'advertising':
            heading = 'Advertising';
            subHeading = 'Advertise yourself or your brand to maximize profits';
            description = "Do you feel like you or your brand aren't getting matched as much as you should? You have the option to advertise yourself on our website to boost your image. Don't worry, the algorithm's magic is still at work, this is just an added option.";
            buttonText = 'Sign up';
            break;
        default:
            console.log("an invalid feature was passed");

    }

    return [heading, subHeading, description, buttonText];
}