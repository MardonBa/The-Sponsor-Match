// This page gets the relevant information from a creator
/*
  content format(s) (multiselect dropdown)
  community_size (number) (tell creators to add up their following on all socials. we'll ask them for specific later)
  niche (multiselect dropdown)
  content frequency (dropdown)
  platform(s) (multiselect dropdown)
*/

"use client";

import styles from "./page.module.css";
import Select from "react-select";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateCreator, updateCreatorPlatforms, updateUserFormats } from "./action";
import { sanitizeInput } from "../../../lib/auth/validation";

export default function Page() {

  const router = useRouter();

  const contentNiches = [
    { value: "educational", label: "Educational Content" },
    { value: "comedy", label: "Comedy" },
    { value: "gaming", label: "Gaming" },
    { value: "music", label: "Music" },
    { value: "movies", label: "Movies/TV Shows" },
    { value: "fan-fiction", label: "Fan Fiction" },
    { value: "fashion", label: "Fashion" },
    { value: "beauty", label: "Beauty" },
    { value: "health-fitness", label: "Health & Fitness" },
    { value: "travel", label: "Travel" },
    { value: "home-decor", label: "Home Décor" },
    { value: "tech-reviews", label: "Tech Reviews" },
    { value: "programming", label: "Programming" },
    { value: "productivity", label: "Productivity Tools" },
    { value: "science", label: "Science & Innovation" },
    { value: "entrepreneurship", label: "Entrepreneurship" },
    { value: "investments", label: "Investments" },
    { value: "personal-finance", label: "Personal Finance" },
    { value: "marketing", label: "Marketing" },
    { value: "recipes", label: "Recipes" },
    { value: "restaurant-reviews", label: "Restaurant Reviews" },
    { value: "food-challenges", label: "Food Challenges" },
    { value: "nutrition", label: "Nutrition" },
    { value: "visual-art", label: "Visual Art" },
    { value: "graphic-design", label: "Graphic Design" },
    { value: "photography", label: "Photography" },
    { value: "crafts-diy", label: "Crafts/DIY" },
    { value: "motivational", label: "Motivational Content" },
    { value: "life-coaching", label: "Life Coaching" },
    { value: "self-help", label: "Self-Help" },
    { value: "current-events", label: "Current Events" },
    { value: "pop-culture", label: "Pop Culture" },
    { value: "analysis", label: "Analysis" },
    { value: "sports", label: "Sports" },
    { value: "collectibles", label: "Collectibles" },
    { value: "books", label: "Books" },
    { value: "outdoors", label: "Outdoors" },
    { value: "non-profit", label: "Non-Profit Work" },
    { value: "advocacy", label: "Advocacy" },
    { value: "local-stories", label: "Local Stories" },
    { value: "memes", label: "Memes & Viral Trends" },
    { value: "unboxing", label: "Unboxing & Hauls" },
    { value: "asmr", label: "ASMR" },
    { value: "pet-content", label: "Pet Content" },
  ];

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
    { value: 'blog', label: 'Personal Blog' },
  ];

  const contentFrequencyOptions = [
    { value: 'several-per-day', label: 'Several per day' },
    { value: 'daily', label: 'Daily' },
    { value: 'several-per-week', label: 'Several per week' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'several-per-month', label: 'Several per month' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'whenever', label: 'Whenever' },
  ];

  const [selectedNiches, setSelectedNiches] = useState();
  const [selectedFormats, setSelectedFormats] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [selectedFrequency, setSelectedFrequency] = useState(null);

  const handleNichesChange = (selectedOptions) => {
    setSelectedNiches(selectedOptions);
  };

  const handleFormatsChange = (selectedOptions) => {
    setSelectedFormats(selectedOptions || []);
  };

  const handlePlatformsChange = (selectedOptions) => {
    setSelectedPlatforms(selectedOptions || []);
  };
  
  const handleFrequencyChange = (selectedOption) => {
    setSelectedFrequency(selectedOption);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // set the creator data
    const creatorData = {
      niche: e.target.contentNiche.value,
      size: sanitizeInput(e.target.communitySize.value, 'number', {
        min: 0,
        max: Infinity
      }), // this is the only one that needs to be sanitized since it relies on user input
      frequency: e.target.contentFrequency.value
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


    // call first function
    let {success, error} = await updateCreator(creatorData);

    if (success) {
      // call second function
      ({success, error} = await updateCreatorPlatforms(platformData));
      if (success) {
        // call third function
        ({success, error} = await updateUserFormats(formatData));
        if (success) {
          router.push(`${process.env.NEXT_PUBLIC_SITE_URL}/create-account/socials-info`);
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
        <Select
          id="contentFormats"
          name="contentFormats"
          options={contentFormats}
          value={selectedFormats}
          onChange={handleFormatsChange}
          isMulti
          className={styles.multiselect}
          placeholder="Select content formats..."
          required
        />
        <label className={styles.label} htmlFor="communitySize" >Community size:</label>
        <input id="communitySize" name="communitySize" type="number" className={styles.textinput} required placeholder="Enter a number" />
        <Select
          id="contentNiche"
          name="contentNiche"
          options={contentNiches}
          value={selectedNiches}
          onChange={handleNichesChange}
          placeholder="Choose niches..."
          className={styles.select}
          required
        />
        <Select
        id="contentPlatforms"
        name="contentPlatforms"
        options={contentPlatforms}
        value={selectedPlatforms}
        onChange={handlePlatformsChange}
        isMulti
        className={styles.select}
        placeholder="Select content platforms..."
        required
        />
        <Select
          id="contentFrequency"
          name="contentFrequency"
          options={contentFrequencyOptions}
          value={selectedFrequency}
          onChange={handleFrequencyChange}
          className={styles.select}
          placeholder="Select content frequency..."
          required
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}