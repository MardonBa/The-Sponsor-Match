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

export default function Page() {

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
    { value: 'short form video', label: 'Short form video' },
    { value: 'long form video', label: 'Long form video' },
    { value: 'short form writing', label: 'Short form writing' },
    { value: 'long form writing', label: 'Long form writing' },
  ];

  const contentPlatforms = [
    { value: 'instagram', label: 'Instagram' },
    { value: 'youtube', label: 'YouTube' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'twitch', label: 'Twitch' },
    { value: 'personal-blog', label: 'Personal Blog' },
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

  const [selectedNiches, setSelectedNiches] = useState([]);
  const [selectedFormats, setSelectedFormats] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [selectedFrequency, setSelectedFrequency] = useState(null);

  const handleNichesChange = (selectedOptions) => {
    setSelectedNiches(selectedOptions || []);
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

  return (
    <div className={styles.container} >
      <form className={styles.formcontainer}>
        <Select
          id="content-format"
          name="content-format"
          options={contentFormats}
          value={selectedFormats}
          onChange={handleFormatsChange}
          isMulti
          className={styles.multiselect}
          placeholder="Select content formats..."
        />
        <label className={styles.label} htmlFor="community size" >Community size:</label>
        <input id="community-size" name="community-size" type="number" className={styles.textinput} required placeholder="Enter a number" />
        <Select
          id="content-niches"
          isMulti
          options={contentNiches}
          value={selectedNiches}
          onChange={handleNichesChange}
          placeholder="Choose niches..."
          className={styles.multiselect}
        />
        <Select
        id="content-platforms"
        name="content-platforms"
        options={contentPlatforms}
        value={selectedPlatforms}
        onChange={handlePlatformsChange}
        isMulti
        className={styles.select}
        placeholder="Select content platforms..."
        />
        <Select
          id="content-frequency"
          name="content-frequency"
          options={contentFrequencyOptions}
          value={selectedFrequency}
          onChange={handleFrequencyChange}
          className={styles.select}
          placeholder="Select content frequency..."
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}