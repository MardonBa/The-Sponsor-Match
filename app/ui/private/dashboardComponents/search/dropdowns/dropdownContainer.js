import styles from './dropdownContainer.module.css'
import DropdownItem from './dropdownItem';
import { getUserType } from '@/utils/helper/getUserType';
// For sponsors, it should have dropdowns to sort by platform, content type, community size, niche, content frequency

export default async function DropdownContainer() {

  const userType = await getUserType();
  let filters;

  if (userType == "sponsor") { // set all the values that a sponsor might want to search for

    const platformOptions = [
      { value: 'instagram', label: 'Instagram' },
      { value: 'youtube', label: 'YouTube' },
      { value: 'facebook', label: 'Facebook' },
      { value: 'blog', label: 'Personal Blog' }
    ];

    const contentTypeOptions = [
      { value: 'short-form-video', label: 'Short form video' },
      { value: 'long-form-video', label: 'Long form video' },
      { value: 'short-form-writing', label: 'Short form writing' },
      { value: 'long-form-writing', label: 'Long form writing'}
    ];

    const communitySizeOptions = [
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

    const nicheOptions = [
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

    const contentFrequencyOptions = [
      { value: 'several-per-day', label: 'Several per day' },
      { value: 'daily', label: 'Daily' },
      { value: 'several-per-week', label: 'Several per week' },
      { value: 'weekly', label: 'Weekly' },
      { value: 'several-per-month', label: 'Several per month' },
      { value: 'monthly', label: 'Monthly' },
      { value: 'whenever', label: 'Whenever' }
    ];

    filters = [
      {text: "Platform", options: platformOptions, name: "platform"},
      {text: "Content Type", options: contentTypeOptions, name: "contentType"},
      {text: "Community Size", options: communitySizeOptions, name: "communitySize"},
      {text: "Niche", options: nicheOptions, name: "niche"},
      {text: "Content Frequency", options: contentFrequencyOptions, name: "contentFrequency"}
    ];

  } else if (userType == "creator") { // set all the values that a creator might want to search for

    const contentFormatOptions = [
      { value: 'short-form-video', label: 'Short form video' },
      { value: 'long-form-video', label: 'Long form video' },
      { value: 'short-form-writing', label: 'Short form writing' },
      { value: 'long-form-writing', label: 'Long form writing' },
    ];

    const contentPlatformOtions = [
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

    const sizeOptions = [
      { value: '0_10', label: '0-10' },
      { value: '11_50', label: '11-50' },
      { value: '51_100', label: '51-100' },
      { value: '101_500', label: '101-500' },
      { value: '501_1000', label: '501-1000' },
      { value: '1000+', label: '1000+' }
    ];

    filters = [
      {text: "Preferred Formats", options: contentFormatOptions, name: "formats"},
      {text: "Preferred Platforms", options: contentPlatformOtions, name: "platforms"},
      {text: "Industry", options: industryOptions, name: "industry"},
      {text: "Size", options: sizeOptions, name: "size"}
    ];
  };

  return (
    <div className={styles.container} >
      <p className={styles.text} >Filters:</p>
      <div className={styles.dropdownscontainer} >
        {filters.map((item, index) => {
          return <DropdownItem text={item.text} options={item.options} name={item.name} key={index} />
        })}
      </div>
    </div>
  );
}
