"use client";

import { useState } from 'react';
import Select from "react-select";

// function that returns a style object. needs to be a function to allow for variable dropdown widths
const getDropdownStyles = () => {
  return {
    // styles here
    container: (base) => ({
      ...base,
      margin: '15px 30px',
      width: '100%',
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

export default function DropdownItem({ text, options, name, onSelectChange }) {

  const [selectedValues, setSelectedValues] = useState([]);

  const handleValueChange = (selected) => {
    setSelectedValues(selected || []);
    onSelectChange(name, selected || []);
  };

    return (
      <>
        <Select
          id={name}
          name={name}
          options={options}
          value={selectedValues}
          onChange={handleValueChange}
          styles={getDropdownStyles()}
          isMulti
          placeholder={text}
          required
        />
      </>
    );
}