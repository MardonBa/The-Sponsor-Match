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
import Select from "react-select";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateSponsor, updateSponsorPlatforms } from "./action";
import { updateUserFormats } from "../content-creator/action"; // this function is user type agnostic, so no need to rewrite it
import { sanitizeInput } from "../../../lib/auth/validation";
import { selectStyles, selectStylesMulti } from "../selectStyles";

export default function Page() {

  const router = useRouter();

  const contentFormats = [
    { value: 'short-form-video', label: 'Short form video' },
    { value: 'long-form-video', label: 'Long form video' },
    { value: 'short-form-writing', label: 'Short form writing' },
    { value: 'long-form-writing', label: 'Long form writing' },
  ];

  const contentPlatforms = [
    { value: 'instagram', label: 'Instagram' },
    { value: 'youtube', label: 'YouTube' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'personal-blog', label: 'Personal Blog' },
  ];

  const industryOptions = [
    { value: 'consumer-electronics', label: 'Consumer electronics' },
    { value: 'gaming-hardware-and-software', label: 'Gaming hardware and software' },
    { value: 'streaming', label: 'Streaming' },
    { value: 'e-commerce', label: 'E-commerce' },
    { value: 'fitness-equipment', label: 'Fitness equipment' },
    { value: 'health-and-wellness', label: 'Health and wellness' },
    { value: 'fitness-clothing', label: 'Fitness clothing' },
    { value: 'gym-fitness', label: 'Gym/fitness' },
    { value: 'weight-loss', label: 'Weight loss' },
    { value: 'yoga-meditation', label: 'Yoga/meditation' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'beauty-and-skincare', label: 'Beauty and skincare' },
    { value: 'haircare-and-grooming', label: 'Haircare and grooming' },
    { value: 'cosmetic-and-makeup', label: 'Cosmetic and makeup' },
    { value: 'jewelry-and-accessories', label: 'Jewelry and accessories' },
    { value: 'meal-delivery', label: 'Meal delivery' },
    { value: 'kitchen-appliances-and-tools', label: 'Kitchen appliances and tools' },
    { value: 'health-foods', label: 'Health foods' },
    { value: 'grocery-delivery', label: 'Grocery delivery' },
    { value: 'airline', label: 'Airline' },
    { value: 'hotels-and-resorts', label: 'Hotels and resorts' },
    { value: 'travel-agencies', label: 'Travel agencies' },
    { value: 'tourism-boards', label: 'Tourism boards' },
    { value: 'travel-gear-and-accessories', label: 'Travel gear and accessories' },
    { value: 'vacation-rental', label: 'Vacation rental' },
    { value: 'event-organizer', label: 'Event organizer' },
    { value: 'online-courses', label: 'Online courses' },
    { value: 'educational-tools-and-apps', label: 'Educational tools and apps' },
    { value: 'e-learning-technology', label: 'E-learning technology' },
    { value: 'financial', label: 'Financial' },
    { value: 'investment-platform', label: 'Investment platform' },
    { value: 'business-services', label: 'Business services' },
    { value: 'startup-accelerator', label: 'Startup accelerator' },
    { value: 'sports-apparel', label: 'Sports apparel' },
    { value: 'outdoor-equipment', label: 'Outdoor equipment' },
    { value: 'sporting-goods-manufacturers', label: 'Sporting goods manufacturers (shoes, gear)' },
    { value: 'car-accessories', label: 'Car accessories' },
    { value: 'fuel-and-energy', label: 'Fuel and energy' },
    { value: 'car-rental-and-ride-sharing', label: 'Car rental and ride-sharing services' },
    { value: 'home-decor-and-furniture', label: 'Home décor and furniture' },
    { value: 'diy-tools-and-supplies', label: 'DIY tools and supplies' },
    { value: 'cleaning-and-home-improvement', label: 'Cleaning and home improvement' },
    { value: 'home-appliances', label: 'Home appliances' },
    { value: 'smart-home-technology', label: 'Smart home technology' },
    { value: 'ticketing-platforms', label: 'Ticketing platforms' },
    { value: 'nonprofit-organizations', label: 'Nonprofit organizations' },
    { value: 'fundraising-platforms', label: 'Fundraising platforms' },
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
        name="contentPlatforms"
        options={contentPlatforms}
        value={selectedPlatforms}
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
          name="contentFormats"
          options={contentFormats}
          value={selectedFormats}
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
          name="industry"
          options={industryOptions}
          value={selectedIndustries}
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