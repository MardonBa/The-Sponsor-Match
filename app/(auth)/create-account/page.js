// This page gets the username and type (creator or sponsor)
// tell creators that their username should be the same as their social media usernames so that they can be more easily recognized
"use client";

import styles from "./page.module.css";
import Select from "react-select";
import { useState } from "react";

export default function Page() {
  // when the form is submitted, the user should be redirected to either /creator or /sponsor

  const accountTypes = [
    { value: 'content-creator', label: 'Content Creator' },
    { value: 'sponsor', label: 'Sponsor' },
  ];

  const [selectedAccountType, setSelectedAccountType] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedAccountType(selectedOption);
  };

  return (
    <div className={styles.container} >
      <form className={styles.formcontainer}>
        <label className={styles.label} htmlFor="username">Username:</label>
        <input id="username" name="username" type="text" required className={styles.input} placeholder="Username" />
        <label className={styles.label} htmlFor="account type">Account type:</label>
        <Select
          id="account-type"
          name="account-type"
          options={accountTypes}
          value={selectedAccountType}
          onChange={handleChange}
          className={styles.select}
          placeholder="Select account type..."
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}