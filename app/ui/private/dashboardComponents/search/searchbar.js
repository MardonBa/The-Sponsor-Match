"use client";

import styles from './searchbar.module.css';
import DropdownContainer from './dropdowns/dropdownContainer';
import { useState } from 'react';

export default function SearchBar({ userType }) {

    // create stateful variable
    const [selectedValues, setSelectedValues] = useState([]);

    // event handler for when it is changed
    const handleValueChange = (selectedOptions) => {
      setSelectedValues(selectedOptions || []);
    };


  return (
    <div className={styles.container} >
      <textarea className={styles.searchbar} rows="1" >
        {/*
        Probably need to set up redux to manage the state of the searchbar (what text has been entered)
        Might not be necessary, it just depends on how the databse can be queried when the user presses search
        */}
    </textarea>
      <p className={styles.searchbutton} >Search</p> {/* This should eventually be a button that triggers a database search */}
      <div className={styles.dropdowns} >
        <DropdownContainer userType={userType} />
      </div>
    </div>
  );
}