import styles from './dropdownContainer.module.css'
import DropdownItem from './dropdownItem';
import { getUserType } from '@/utils/helper/getUserType';
// For sponsors, it should have dropdowns to sort by platform, content type, community size, niche, content frequency

export default async function DropdownContainer() {

  const userType = await getUserType();
  console.log(userType);
  let platformOptions;
  let contentTypeOptions;
  let communitySizeOptions;
  let nicheOptions;
  let contentFrequencyOptions;
  let additionalText;

  if (userType == "sponsor") { // set all the values that a sponsor might want to search for, and the additional text

    additionalText = ""; // should be empty

    platformOptions = [
      { value: 'instagram', label: 'Instagram' },
      { value: 'youtube', label: 'YouTube' },
      { value: 'facebook', label: 'Facebook' },
      { value: 'blog', label: 'Personal Blog' }
    ];

    contentTypeOptions = [
      { value: 'short-form-video', label: 'Short form video' },
      { value: 'long-form-video', label: 'Long form video' },
      { value: 'short-form-writing', label: 'Short form writing' },
      { value: 'long-form-writing', label: 'Long form writing'}
    ];

    communitySizeOptions = [
      { value: '0_1000', label: '0-1000' },
      { value: '1001_10000', label: '1001-10000' },
      { value: '10001_50000', label: '10001-50000' },
      { value: '50001_100000', label: '50001-10000' },
      { value: '100001_500000', label: '100001-500000' },
      { value: '500001_1000000', label: '500001-10000' },
      { value: '1000001_5000000', label: '1000001-5000000' },
      { value: '5000001_10000000', label: '5000001-10000000'},
      { value: '10000000+', label: '10000000+' }
    ];

    nicheOptions = [
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

    contentFrequencyOptions = [
      { value: 'several-per-day', label: 'Several per day' },
      { value: 'daily', label: 'Daily' },
      { value: 'several-per-week', label: 'Several per week' },
      { value: 'weekly', label: 'Weekly' },
      { value: 'several-per-month', label: 'Several per month' },
      { value: 'monthly', label: 'Monthly' },
      { value: 'whenever', label: 'Whenever' }
    ];

  } else if (userType == "creator") { // set all the values that a creator might want to search for, and the additional text
    additionalText = "(by sponsor preferences)"; // should be empty

    platformOptions = [
      { value: 'instagram', label: 'Instagram' },
      { value: 'youtube', label: 'YouTube' },
      { value: 'facebook', label: 'Facebook' },
      { value: 'blog', label: 'Personal Blog' }
    ];

    contentTypeOptions = [
      { value: 'short-form-video', label: 'Short form video' },
      { value: 'long-form-video', label: 'Long form video' },
      { value: 'short-form-writing', label: 'Short form writing' },
      { value: 'long-form-writing', label: 'Long form writing'}
    ];

    communitySizeOptions = [
      { value: '0_1000', label: '0-1000' },
      { value: '1001_10000', label: '1001-10000' },
      { value: '10001_50000', label: '10001-50000' },
      { value: '50001_100000', label: '50001-10000' },
      { value: '100001_500000', label: '100001-500000' },
      { value: '500001_1000000', label: '500001-10000' },
      { value: '1000001_5000000', label: '1000001-5000000' },
      { value: '5000001_10000000', label: '5000001-10000000'},
      { value: '10000000+', label: '10000000+' }
    ];

    nicheOptions = [
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

    contentFrequencyOptions = [
      { value: 'several-per-day', label: 'Several per day' },
      { value: 'daily', label: 'Daily' },
      { value: 'several-per-week', label: 'Several per week' },
      { value: 'weekly', label: 'Weekly' },
      { value: 'several-per-month', label: 'Several per month' },
      { value: 'monthly', label: 'Monthly' },
      { value: 'whenever', label: 'Whenever' }
    ];
  };

  return (
    <div className={styles.container} >
      <p className={styles.text} >Filters: {additionalText}</p>
      <div className={styles.dropdownscontainer} >
        <DropdownItem text={'Platform'} options={platformOptions} name="platform" />
        <DropdownItem text={'Content Type'} options={contentTypeOptions} name="contentType" />
        <DropdownItem text={'Community Size'} options={communitySizeOptions} name="communitySize" />
        <DropdownItem text={'Niche'} options={nicheOptions} name="niche" />
        <DropdownItem text={'Content Frequency'} options={contentFrequencyOptions} name="contentFrequency" />
      </div>
    </div>
  );
}
