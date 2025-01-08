"use client";

import styles from './dropdownItem.module.css';
import DownArrow from '@/app/ui/public/downArrow/downArrow'; // TODO remove
import { useState } from 'react';
import Select from "react-select";

// styles object
const style = {
  // styles here
  container: (base) => ({
    ...base,
    margin: '15px 0px',
    width: '170px',
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
  })
}

export default function DropdownItem({ text, options, name }) {

    // create stateful variable
    const [selectedValues, setSelectedValues] = useState([]);

    // event handler for when it is changed
    const handleValueChange = (selectedOptions) => {
      setSelectedValues(selectedOptions || []);
    };

    return (
      <>
        <Select
          id={name}
          name={name}
          options={options}
          value={selectedValues}
          onChange={handleValueChange}
          styles={style}
          isMulti
          placeholder={text}
          required
        />
      </>
    );
}