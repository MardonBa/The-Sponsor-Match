// This page gets the relevant information from a sponsor
/*
    company name (text input)
    industry (dropdown)
    size (numerical range)
    preferred platform(s) (multiselect dropdown)
    preferred content format(s) (multiselect dropdown)
*/

"use client";

import styles from "./page.module.css";
import Select from "react-select";
import { useState } from "react";

export default function Page() {

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

  return (
    <div className={styles.container} >
      <form className={styles.formcontainer}>
        <label className={styles.label} htmlFor="company-name">Company name:</label>
        <input id="company-name" name="company-name" type="text" required className={styles.input} placeholder="Company name" />
        <label className={styles.label} htmlFor="company-size">Company size (approximate):</label>
        <input id="company-size" name="company-size" type="number" required className={styles.input} placeholder="Enter an approximate size" />
        <button type="submit">Continue</button>
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
          id="content-format"
          name="content-format"
          options={contentFormats}
          value={selectedFormats}
          onChange={handleFormatsChange}
          isMulti
          className={styles.multiselect}
          placeholder="Select content formats..."
        />
        <Select
          id="industry"
          name="industry"
          options={industryOptions}
          value={selectedIndustries}
          onChange={handleIndustryChange}
          isMulti
          className={styles.select}
          placeholder="Select industries..."
        />
      </form>
    </div>
  );
}