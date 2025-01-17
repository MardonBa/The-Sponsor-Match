"use client";

import styles from './dropdownContainer.module.css'
import DropdownItem from './dropdownItem';
// For sponsors, it should have dropdowns to sort by platform, content type, community size, niche, content frequency

export default function DropdownContainer({ userType, onSelectionChange }) {

  let filters;

  if (userType == "sponsor") { // set all the values that a sponsor might want to search for

    const platformOptions = [
      { value: 'Instagram', label: 'Instagram' },
      { value: 'YouTube', label: 'YouTube' },
      { value: 'Facebook', label: 'Facebook' },
      { value: 'Personal Blog', label: 'Personal Blog' }
    ];

    const contentTypeOptions = [
      { value: 'Short form video', label: 'Short form video' },
      { value: 'Long form video', label: 'Long form video' },
      { value: 'Short form writing', label: 'Short form writing' },
      { value: 'Long form writing', label: 'Long form writing'}
    ];

    const communitySizeOptions = [
      { value: '0-1000', label: '0-1000' },
      { value: '1001-10000', label: '1001-10000' },
      { value: '10001-50000', label: '10001-50000' },
      { value: '50001-10000', label: '50001-10000' },
      { value: '100001-500000', label: '100001-500000' },
      { value: '500001-10000', label: '500001-10000' },
      { value: '1000001-5000000', label: '1000001-5000000' },
      { value: '5000001-10000000', label: '5000001-10000000'},
      { value: '10000000+', label: '10000000+' }
    ];

    const nicheOptions = [
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
      { value: "Pet Content", label: "Pet Content" },
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

    filters = [
      {text: "Platform", options: platformOptions, name: "platforms"},
      {text: "Content Type", options: contentTypeOptions, name: "formats"},
      {text: "Community Size", options: communitySizeOptions, name: "communitySize"},
      {text: "Niche", options: nicheOptions, name: "niche"},
      {text: "Content Frequency", options: contentFrequencyOptions, name: "contentFrequency"}
    ];

  } else if (userType == "creator") { // set all the values that a creator might want to search for

    const contentFormatOptions = [
      { value: 'Short form video', label: 'Short form video' },
      { value: 'Long form video', label: 'Long form video' },
      { value: 'Short form writing', label: 'Short form writing' },
      { value: 'Long form writing', label: 'Long form writing' },
    ];

    const contentPlatformOtions = [
      { value: 'Instagram', label: 'Instagram' },
      { value: 'YouTube', label: 'YouTube' },
      { value: 'Facebook', label: 'Facebook' },
      { value: 'Personal Blog', label: 'Personal Blog' },
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
      { value: 'Fundraising platforms', label: 'Fundraising platforms' },
    ];

    const sizeOptions = [
      { value: '0-10', label: '0-10' },
      { value: '11-50', label: '11-50' },
      { value: '51-100', label: '51-100' },
      { value: '101-500', label: '101-500' },
      { value: '501-1000', label: '501-1000' },
      { value: '1000+', label: '1000+' }
    ];

    filters = [
      {text: "Preferred Formats", options: contentFormatOptions, name: "formats"},
      {text: "Preferred Platforms", options: contentPlatformOtions, name: "platforms"},
      {text: "Industry", options: industryOptions, name: "industry"},
      {text: "Size", options: sizeOptions, name: "companySize"}
    ];
  };

  return (
    <div className={styles.container} >
      <p className={styles.text} >Filters:</p>
      <div className={styles.dropdownscontainer} >
        {filters.map((item, index) => {
          return <DropdownItem text={item.text} options={item.options} name={item.name} key={index} onSelectChange={onSelectionChange} />
        })}
      </div>
    </div>
  );
}
