"use client";

import styles from './dropdownItem.module.css';
import DownArrow from '@/app/ui/public/downArrow/downArrow'; // TODO remove
import { useState } from 'react';
import Select from "react-select";

// function that returns a style object. needs to be a function to allow for variable dropdown widths
const getDropdownStyles = (width) => {
  return {
    // styles here
    container: (base) => ({
      ...base,
      margin: '15px 0px',
      width: width,
      fontSize: '12px'
    }),
    control: (base, state) => ({
      ...base,
      backgroundColor: 'var(--background)',
      borderRadius: '15px',
      border: state.isFocused ? '2px solid var(--primary-variant) !important': '2px solid var(--primary)',
      boxShadow: 'none',
      color: 'var(--text)'
    }),
    valueContainer: (base) => ({
      ...base,
      color: 'var(--text)'
    }),
    singleValue: (base) => ({
      ...base,
      color: 'var(--text)',
    }),
    menuList: (base) => ({
      ...base,
      backgroundColor: 'var(--background) !important',
      color: 'var(--text) !important'
    }), 
    option: (base, state) => ({
      ...base,
      color: state.isFocused? 'var(--background)' : 'var(--text)',
      backgroundColor: state.isFocused ? 'var(--primary)' : 'var(--background)',
      cursor: state.isFocused ? 'pointer' : 'auto'
    }),
    multiValue: (base) => ({
      ...base,
      padding: '1px',
      backgroundColor: 'var(--primary)'
    }),
    multiValueLabel: (base) => ({
      ...base, 
      color: 'var(--background)',
      backgroundColor: 'var(--primary)'
    })
  }
}

export default function DropdownItem({ text, options, name }) {

    // create stateful variable
    const [selectedValues, setSelectedValues] = useState([]);

    // event handler for when it is changed
    const handleValueChange = (selectedOptions) => {
      setSelectedValues(selectedOptions || []);
    };

    // conditionals for the dropdown width
    let dropdownWidth;
    if (name == "platform") {
      dropdownWidth = '150px';
    } else if (name == "contentType") {
      dropdownWidth = '220px';
    } else if (name == "communitySize") {
      dropdownWidth = '180px';
    } else if (name == "niche") {
      dropdownWidth = '150px';
    } else if (name == "contentFrequency") {
      dropdownWidth = '210px';
    } else {
      dropdownWidth = '210px'; // this should never run, but it's here in case
    }

    return (
      <>
        <Select
          id={name}
          name={name}
          options={options}
          value={selectedValues}
          onChange={handleValueChange}
          styles={getDropdownStyles(dropdownWidth)}
          isMulti
          placeholder={text}
          required
        />
      </>
    );
}