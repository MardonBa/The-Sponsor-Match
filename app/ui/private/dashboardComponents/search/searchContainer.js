"use client";

import styles from './searchContainer.module.css';
import SearchResults from './searchResults';
import SearchBar from './searchbar';
import { useState, useEffect } from 'react';

export default function SearchContainer({ userType, res }) {

  // define stateful variables, to be passed down the components
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(res);
  }, []);

  return (
    <div className={`${styles.searchcontainer}`} >
        <SearchBar userType={userType} handleSearch={setResults} />
        <SearchResults userType={userType} userData={results} />
    </div>
  );
}