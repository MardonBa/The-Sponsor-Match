// This page gets the relevant information from a sponsor
/*
    company name (text input)
    industry (dropdown)
    size (numerical range)
    preferred platform(s) (multiselect dropdown)
    preferred content format(s) (multiselect dropdown)
*/

"use client";

import styles from "../page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateSponsor, updateSponsorPlatforms } from "./action";
import { updateUserFormats } from "../content-creator/action"; // this function is user type agnostic, so no need to rewrite it
import { sanitizeInput } from "../../../lib/auth/validation";
import { selectStyles, selectStylesMulti } from "../selectStyles";
import dynamic from 'next/dynamic';

const Select = dynamic(() => import('react-select'), { ssr: false });

export default function Page() {

  const router = useRouter();

  const contentFormats = [
    { value: 'Short form video', label: 'Short form video' },
    { value: 'Long form video', label: 'Long form video' },
    { value: 'Short form writing', label: 'Short form writing' },
    { value: 'Long form writing', label: 'Long form writing' }
  ];

  const contentPlatforms = [
    { value: 'Instagram', label: 'Instagram' },
    { value: 'YouTube', label: 'YouTube' },
    { value: 'Facebook', label: 'Facebook' },
    { value: 'Personal Blog', label: 'Personal Blog' }
  ];

  const industryOptions = [
    { value: 'Consumer electronics', label: 'Consumer electronics' },
    { value: 'Gaming hardware and software', label: 'Gaming hardware and software' },
    { value: 'Streaming', label: 'Streaming' },
    { value: 'E-commerce', label: 'E-commerce' },
    { value: 'Fitness equipment', label: 'Fitness equipment' },
    { value: 'Health and wellness', label: 'Health and wellness' },
    { value: 'Fitness clothing', label: 'Fitness clothing' },
    { value: 'Gym/fitness', label: 'Gym/fitness' },
    { value: 'Weight loss', label: 'Weight loss' },
    { value: 'Yoga/meditation', label: 'Yoga/meditation' },
    { value: 'Clothing', label: 'Clothing' },
    { value: 'Beauty and skincare', label: 'Beauty and skincare' },
    { value: 'Haircare and grooming', label: 'Haircare and grooming' },
    { value: 'Cosmetic and makeup', label: 'Cosmetic and makeup' },
    { value: 'Jewelry and accessories', label: 'Jewelry and accessories' },
    { value: 'Meal delivery', label: 'Meal delivery' },
    { value: 'Kitchen appliances and tools', label: 'Kitchen appliances and tools' },
    { value: 'Health foods', label: 'Health foods' },
    { value: 'Grocery delivery', label: 'Grocery delivery' },
    { value: 'Airline', label: 'Airline' },
    { value: 'Hotels and resorts', label: 'Hotels and resorts' },
    { value: 'Travel agencies', label: 'Travel agencies' },
    { value: 'tourism-boards', label: 'Tourism boards' },
    { value: 'Travel gear and accessories', label: 'Travel gear and accessories' },
    { value: 'Vacation rental', label: 'Vacation rental' },
    { value: 'Event organizer', label: 'Event organizer' },
    { value: 'Online courses', label: 'Online courses' },
    { value: 'Educational tools and apps', label: 'Educational tools and apps' },
    { value: '-learning technology', label: 'E-learning technology' },
    { value: 'Financial', label: 'Financial' },
    { value: 'Investment platform', label: 'Investment platform' },
    { value: 'Business services', label: 'Business services' },
    { value: 'Startup accelerator', label: 'Startup accelerator' },
    { value: 'Sports apparel', label: 'Sports apparel' },
    { value: 'Outdoor equipment', label: 'Outdoor equipment' },
    { value: 'Sporting goods manufacturers (shoes, gear)', label: 'Sporting goods manufacturers (shoes, gear)' },
    { value: 'Car accessories', label: 'Car accessories' },
    { value: 'Fuel and energy', label: 'Fuel and energy' },
    { value: 'Car rental and ride-sharing services', label: 'Car rental and ride-sharing services' },
    { value: 'Home décor and furniture', label: 'Home décor and furniture' },
    { value: 'DIY tools and supplies', label: 'DIY tools and supplies' },
    { value: 'Cleaning and home improvement', label: 'Cleaning and home improvement' },
    { value: 'Home appliances', label: 'Home appliances' },
    { value: 'Smart home technology', label: 'Smart home technology' },
    { value: 'Ticketing platforms', label: 'Ticketing platforms' },
    { value: 'Nonprofit organizations', label: 'Nonprofit organizations' },
    { value: 'Fundraising platforms', label: 'Fundraising platforms' }
  ];

  const [selectedFormats, setSelectedFormats] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);

  const handleFormatsChange = (selectedOptions) => {
    setSelectedFormats(selectedOptions || []);
  };

  const handlePlatformsChange = (selectedOptions) => {
    setSelectedPlatforms(selectedOptions || []);
  };

  const handleIndustryChange = (selectedOptions) => {
    setSelectedIndustries(selectedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // set the sponsor data
    const sponsorData = {
      companyName: sanitizeInput(e.target.companyName.value, 'text'),
      companySize: sanitizeInput(e.target.companySize.value, 'number', {
        min: 1,
        max: Infinity
      }),
      industry: sanitizeInput(e.target.industry.value, 'text')
    };

    // set the platform data
    const platformData = {
      platforms: []
    };
    // iterate and add to the array since that's the only way it seems to work
    let platformsArray = Array.from(e.target.contentPlatforms);
    for (let i = 0; i < platformsArray.length; i++) {
      platformData.platforms.push(platformsArray[i].value);
    }
    if (platformsArray.length === 0) { // The array is empty when only one choice is selected. In that case, this is how you need add the format
      platformData.platforms = [e.target.contentPlatforms.value];
    }

    // set the format data
    const formatData = {
      formats: []
    };
    // iterate and add to the array since that's the only way it seems to work
    let formatsArray = Array.from(e.target.contentFormats);
    for (let i = 0; i < formatsArray.length; i++) {
      formatData.formats.push(formatsArray[i].value);
    }
    if (formatsArray.length === 0) { // The array is empty when only one choice is selected. In that case, this is how you need add the format
      formatData.formats = [e.target.contentFormats.value];
    }


    // call the first function
    let {success, error} = await updateSponsor(sponsorData);

    if (success) {
      // call second function
      ({success, error} = await updateSponsorPlatforms(platformData));
      if (success) {
        // call third function
        ({success, error} = await updateUserFormats(formatData));
        if (success) {
          router.push(`${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`);
        } else {
          // TODO add real error handling
          console.error(error);
        }
      } else {
        // TODO add real error handling
        console.error(error);
      }
    } else {
        // TODO add real error handling
        console.error(error);
    }
  }

  return (
    <div className={styles.container} >
      <form className={styles.formcontainer} onSubmit={(e) => handleSubmit(e)} >
        <h2 className={styles.h2} >Hey there! Are you ready to start advertising your products?</h2>
        <p className={styles.p} >Before you start, we need to get some information</p>
        <label className={styles.label} htmlFor="companyName">Company name:</label>
        <input id="companyName" name="companyName" type="text" required className={styles.input} placeholder="Company name" />
        <label className={styles.label} htmlFor="companySize">Company size (approximate):</label>
        <input id="companySize" name="companySize" type="number" required className={styles.input} placeholder="Enter an approximate size" />
        <p className={styles.p }>What platforms do you want to advertise on?</p>
        <Select
        id="contentPlatforms"
        instanceId="contentPlatforms"
        name="contentPlatforms"
        options={contentPlatforms}
        value={selectedPlatforms}
        defaultValue={null}
        onChange={handlePlatformsChange}
        styles={selectStylesMulti}
        isMulti
        className={styles.select}
        placeholder="Select content platforms..."
        required
        />
        <p className={styles.p }>What content formats would you like to advertise with?</p>
        <Select
          id="contentFormats"
          instanceId="contentFormats"
          name="contentFormats"
          options={contentFormats}
          value={selectedFormats}
          defaultValue={null}
          onChange={handleFormatsChange}
          styles={selectStylesMulti}
          isMulti
          className={styles.multiselect}
          placeholder="Select content formats..."
          required
        />
        <p className={styles.p }>What industry best describes your company?</p>
        <Select
          id="industry"
          instanceId="industry"
          name="industry"
          options={industryOptions}
          value={selectedIndustries}
          defaultValue={null}
          onChange={handleIndustryChange}
          styles={selectStyles}
          className={styles.select}
          placeholder="Select industries..."
          required
        />
        <button type="submit" className={styles.button} >Continue</button>
      </form>
    </div>
  );
}