"use client";

import styles from './searchbar.module.css';
import DropdownContainer from './dropdowns/dropdownContainer';
import { useState, useRef, useEffect } from 'react';
import { sanitizeInput } from '@/app/lib/auth/validation';

export default function SearchBar({ userType, handleSearch }) {

  const searchInputRef = useRef(null);
  const [filters, setFilters] = useState({}); // State to hold all filter values

  // This useEffect hook initializes the filters as empty lists based on the user type. only runs on initial render
  useEffect(() => {
    if (userType == "creator") { // filters to search for a sopnsors
      setFilters({
        formats: [],
        platforms: [],
        industry: [],
        companySize: []
      });
    } else if (userType == "sponsor") { // filters to search for a sponsors
      setFilters({
        formats: [],
        platforms: [],
        communitySize: [],
        niche: [],
        contentFrequency: []
      });
    } else {
      console.log("Invalid user type");
      // TODO add real error handling
    }
  }, []);

  console.log(filters);

  const handleFilterChange = (name, selectedValues) => {
    setFilters((prev) => ({
      ...prev,
      [name]: selectedValues?.value || selectedValues,
    }));
  };

  const search = () => { // to be used
    
    // change the communitySize filter to be a min and max, if it is provided
    if (filters.communitySize) {
      filters.communitySizeMin = [];
      filters.communitySizeMax = [];
      for (let i = 0; i < filters.communitySize.length; i++) {
        const range = filters.communitySize[i].split("_");
        filters.communitySizeMin[i] = int(range[0]);
        filters.communitySizeMax[i] = int(range[1]);
      }
    } else if (filters.companySize) {
      filters.companySizeMin = [];
      filters.companySizeMax = [];
      for (let  i = 0; i < filters.companySize.length; i++) {
        const range = filters.companySize[i].split("_");
      filters.companySizeMin[i] = int(range[0]);
      filters.companySizeMax[i] = int(range[1]);
      }
    }

    console.log('Filters:', filters);
    console.log('Search Input:', searchInputRef.current.value);
    const input = sanitizeInput(searchInputRef.current.value, 'text')
    // Trigger your database search here using the filters
    handleSearch(filters, input, userType);
  };

  return (
    <div className={styles.container} >
      <textarea className={styles.searchbar} rows="1" placeholder='Search...' ref={searchInputRef} >
        {/*
        Probably need to set up redux to manage the state of the searchbar (what text has been entered)
        Might not be necessary, it just depends on how the databse can be queried when the user presses search
        */}
    </textarea>
      <button className={styles.searchbutton} onClick={search} >Search</button> {/* This should eventually be a button that triggers a database search */}
      <div className={styles.dropdowns} >
        <DropdownContainer userType={userType} onSelectionChange={handleFilterChange} />
      </div>
    </div>
  );
}