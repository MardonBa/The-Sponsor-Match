'use client'

import styles from './page.module.css';
import LandingFooter from '@/app/ui/public/footer/footer';
import {useEffect, useRef, useState} from 'react';
import LinkToSignUp from '@/app/ui/public/buttons/linkToSignUp/toSignUp';
import Image from 'next/image';
import  * as AspectRatio from '@radix-ui/react-aspect-ratio';

/*
    TODO: fix sizing of images (make it dynamic again) (base this on landing page)
    TODO: Fix the transition at the bottom so that the position is no longer fixed when you pass the last section
    TODO: Add real images of the featurse
*/

const sections = [
    {
        heading: 'AI-powered matching tool',
        description: 'Find opportunities more easily than ever before with our AI-powered matching tool, which takes your preferences and finds the best creators to maximize your brand and advertising reach.',
        buttonText: 'Get started',
        imgSrc: '/homepageResources/searchPreview.png'
    }, 
    {
        heading: 'Engagement analytics',
        description: 'With our engagement tracking analytics, see what is leading to the most engagement, and what kinds of audiences you are reaching the most.',
        buttonText: 'Sign up',
        imgSrc: '/homepageResources/checkmark.png'
    },
    {
        heading: 'Categorical comparisons',
        description: "For both sponsors and creators, these analytics can be used to maximize profit and engagement. Find out what types of relationshpis work best for you.",
        buttonText: 'Create your account',
        imgSrc: '/homepageResources/searchPreview.png'
    },
    {
        heading: 'Payment handling',
        description: 'As soon as the requirements are met as outlined in the sponsorship agreement, payments will be made. This means as a sponsor or a creator, your banking information will be securely stored so that payments can be made with no extra work. In rare the event of a payment dispute, our support team is here to help.',
        buttonText: 'Get started',
        imgSrc: '/homepageResources/checkmark.png'
    },
    {
        heading: 'Legal documents',
        description: 'The most frustrating part of sponsorships is often the legal hassle. With our built-in tooling, generate legal agreements and fill them out with no extra work. Just enter the requirements, have all parties sign, and move on to what matters.',
        buttonText: 'Create your account',
        imgSrc: '/homepageResources/searchPreview.png'
    },
    {
        heading: 'Messaging',
        description: 'Sharing contact information can be difficult and personal, and is a thing of the past. Use our chat feature to build relationships, make sure your goals align, and find good fits. All before making a final agreement.',
        buttonText: 'Get started',
        imgSrc: '/homepageResources/checkmark.png'
    },
    {
        heading: 'Advertising',
        description: "Do you feel like you or your brand aren't getting matched as much as you should? You have the option to advertise yourself on our website to boost your image. Don't worry, the algorithm's magic is still at work, this is just an added option.",
        buttonText: 'Sign up',
        imgSrc: '/homepageResources/searchPreview.png'
    }
];

export default function FeatuersPage() {

    const [activeSection, setActiveSection] = useState(0);
    const sectionRefs = useRef([]);
    const [imageSectionPosition, setImageSectionPosition] = useState('fixed');

    useEffect(() => {
        const observers = sections.map((_, index) => {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setActiveSection(index);
              }
            // Check to see if the last section is on screen
            console.log(index);
            console.log(sections.length - 1);
            console.log(_.heading);
            if (index == sections.length - 1) {
                setImageSectionPosition('sticky');
            } else {
                setImageSectionPosition('fixed');
            }
            },
            { threshold: 0.6 }
          )
    
          if (sectionRefs.current[index]) {
            observer.observe(sectionRefs.current[index]);
          }

          
    
          return observer;
        })
    
        return () => {
          observers.forEach(observer => observer.disconnect());
        }
      }, []);

    return(
        <div className={styles.pagecontainer} >
            <h1 className={styles.pageheading} >Features</h1>
            <div className={styles.contentcontainer} >
                <div className={styles.textcontainer} >
                    {sections.map((section, index) => {
                        return (
                            <div
                                key={index}
                                ref={el => sectionRefs.current[index] = el}
                                className={styles.textsectioncontainer}>
                                <h2 className={styles.heading}>{section.heading}</h2>
                                <p className={styles.description} >{section.description}</p>
                                <LinkToSignUp text={section.buttonText} />
                            </div>
                    )})}
                </div>
                <div className={styles.imagescontainer} style={{position: imageSectionPosition}} >
                    {sections.map((section, index) => {
                        return (
                            <div
                                key={index}
                                className={`${styles.imagesectioncontainer} ${
                                index === activeSection ? styles.show : styles.hide
                                }`}>
                                <AspectRatio.Root ratio={16/9} className={styles.aspectratio} >
                                
                                    <Image
                                    src={section.imgSrc}
                                    alt={`Image for ${section.heading}`}
                                    width={0}
                                    height={0}
                                    className={styles.imagestyles}/>
                                </AspectRatio.Root>
                            </div>
                    )})}
                </div>
            </div>
            <LandingFooter />
        </div>
    );
}
