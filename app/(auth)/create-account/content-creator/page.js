// This page gets the relevant information from a creator
/*
  content format(s) (multiselect dropdown)
  community_size (number) (tell creators to add up their following on all socials. we'll ask them for specific later)
  niche (multiselect dropdown)
  content frequency (dropdown)
  platform(s) (multiselect dropdown)
*/

"use client";

import styles from "../page.module.css";
import Select from "react-select";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateCreator, updateCreatorPlatforms, updateUserFormats } from "./action";
import { sanitizeInput } from "../../../lib/auth/validation";
import { selectStyles, selectStylesMulti } from "../selectStyles";

export default function Page() {

  const router = useRouter();

  const contentNiches = [
    { value: "Educational Content", label: "Educational Content" },
    { value: "Comedy", label: "Comedy" },
    { value: "Gaming", label: "Gaming" },
    { value: "Music", label: "Music" },
    { value: "Movies/TV Shows", label: "Movies/TV Shows" },
    { value: "Fan Fiction", label: "Fan Fiction" },
    { value: "Fashion", label: "Fashion" },
    { value: "Beauty", label: "Beauty" },
    { value: "Health & Fitness", label: "Health & Fitness" },
    { value: "Travel", label: "Travel" },
    { value: "Home Décor", label: "Home Décor" },
    { value: "Tech Reviews", label: "Tech Reviews" },
    { value: "m", label: "Programming" },
    { value: "Productivity Tools", label: "Productivity Tools" },
    { value: "Science & Innovation", label: "Science & Innovation" },
    { value: "Entrepreneurship", label: "Entrepreneurship" },
    { value: "Investments", label: "Investments" },
    { value: "Personal Finance", label: "Personal Finance" },
    { value: "Marketing", label: "Marketing" },
    { value: "Recipes", label: "Recipes" },
    { value: "Restaurant Reviews", label: "Restaurant Reviews" },
    { value: "Food Challenges", label: "Food Challenges" },
    { value: "Nutrition", label: "Nutrition" },
    { value: "Visual Art", label: "Visual Art" },
    { value: "Graphic Design", label: "Graphic Design" },
    { value: "Photography", label: "Photography" },
    { value: "Crafts/DIY", label: "Crafts/DIY" },
    { value: "Motivational Content", label: "Motivational Content" },
    { value: "Life Coaching", label: "Life Coaching" },
    { value: "Self-Help", label: "Self-Help" },
    { value: "Current Events", label: "Current Events" },
    { value: "Pop Culture", label: "Pop Culture" },
    { value: "Analysis", label: "Analysis" },
    { value: "Sports", label: "Sports" },
    { value: "Collectibles", label: "Collectibles" },
    { value: "Books", label: "Books" },
    { value: "Outdoors", label: "Outdoors" },
    { value: "Non-Profit Work", label: "Non-Profit Work" },
    { value: "Advocacy", label: "Advocacy" },
    { value: "Local Stories", label: "Local Stories" },
    { value: "Memes & Viral Trends", label: "Memes & Viral Trends" },
    { value: "Unboxing & Hauls", label: "Unboxing & Hauls" },
    { value: "ASMR", label: "ASMR" },
    { value: "Pet Content", label: "Pet Content" }
  ];

  const contentFormats = [
    { value: 'Short form video', label: 'Short form video' },
    { value: 'Long form video', label: 'Long form video' },
    { value: 'Short form writing', label: 'Short form writing' },
    { value: 'Long form writing', label: 'Long form writing'}
  ];

  const contentPlatforms = [
    { value: 'Instagram', label: 'Instagram' },
    { value: 'YouTube', label: 'YouTube' },
    { value: 'Facebook', label: 'Facebook' },
    { value: 'Personal Blog', label: 'Personal Blog' }
  ];

  const contentFrequencyOptions = [
    { value: 'Several per day', label: 'Several per day' },
    { value: 'Daily', label: 'Daily' },
    { value: 'Several per week', label: 'Several per week' },
    { value: 'Weekly', label: 'Weekly' },
    { value: 'Several per month', label: 'Several per month' },
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Whenever', label: 'Whenever' }
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
    console.log(e.target.contentNiche.value);
    console.log(e.target.contentNiche);

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
      <h2 className={styles.h2} >Hey there! Are you ready to start monetizing your content?</h2>
      <p className={styles.p} >Before you start, we need to get some information</p>
      <form className={styles.formcontainer} onSubmit={(e) => handleSubmit(e)} >
        <p className={styles.p} >How would you describe the format of the content you create?</p>
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
        <label className={styles.label} htmlFor="communitySize" >How large is your following?</label>
        <input id="communitySize" name="communitySize" type="number" className={styles.input} required placeholder="Enter a number" />
        <p className={styles.p} >What category best describes your content?</p>
        <Select
          id="contentNiche"
          name="contentNiche"
          options={contentNiches}
          value={selectedNiches}
          onChange={handleNichesChange}
          styles={selectStyles}
          placeholder="Choose category..."
          className={styles.select}
          required
        />
        <p className={styles.p} >Which of our supported platforms do you use?</p>
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
        <p className={styles.p} >How often do you post?</p>
        <Select
          id="contentFrequency"
          name="contentFrequency"
          options={contentFrequencyOptions}
          value={selectedFrequency}
          onChange={handleFrequencyChange}
          styles={selectStyles}
          className={styles.select}
          placeholder="Select content frequency..."
          required
        />
        <button type="submit" className={styles.button} >Continue</button>
      </form>
    </div>
  );
}