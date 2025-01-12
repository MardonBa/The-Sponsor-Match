"use client";

import styles from './searchbar.module.css';
import DropdownContainer from './dropdowns/dropdownContainer';
import { useState } from 'react';

export default function SearchBar({ userType }) {

  const [filters, setFilters] = useState({}); // State to hold all filter values

  const handleFilterChange = (name, selectedValues) => {
    setFilters((prev) => ({
      ...prev,
      [name]: selectedValues,
    }));
  };

  const handleSearch = () => { // to be used
    console.log('Filters:', filters);
    // Trigger your database search here using the filters
  };

  return (
    <div className={styles.container} >
      <textarea className={styles.searchbar} rows="1" placeholder='Search...' >
        {/*
        Probably need to set up redux to manage the state of the searchbar (what text has been entered)
        Might not be necessary, it just depends on how the databse can be queried when the user presses search
        */}
    </textarea>
      <button className={styles.searchbutton} onClick={handleSearch} >Search</button> {/* This should eventually be a button that triggers a database search */}
      <div className={styles.dropdowns} >
        <DropdownContainer userType={userType} onSelectionChange={handleFilterChange} />
      </div>
    </div>
  );
}