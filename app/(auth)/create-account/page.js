// This page gets the username and type (creator or sponsor)
// tell creators that their username should be the same as their social media usernames so that they can be more easily recognized
"use client";

import styles from "./page.module.css";
import Select from "react-select";
import { useState } from "react";
import insertUser from "./action";
import { useRouter } from "next/navigation";
import { sanitizeInput } from "../../lib/auth/validation";
import { selectStyles } from "./selectStyles";

export default function Page() {
  // when the form is submitted, the user should be redirected to either /creator or /sponsor

  const router = useRouter();

  const accountTypes = [
    { value: 'content-creator', label: 'Content Creator' },
    { value: 'sponsor', label: 'Sponsor' },
  ];

  const [selectedAccountType, setSelectedAccountType] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedAccountType(selectedOption);
  };

  const  handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username: sanitizeInput(e.target.username?.value, 'text'),
      accountType: e.target.accountType?.value
    }

    const {success, error} = await insertUser(formData);

    if (success) {;
      router.push(`${process.env.NEXT_PUBLIC_SITE_URL}/create-account/${formData.accountType}`); // redirects to either /content-creator or /sponsor
    } else {
      // TODO add real error handling
      console.log(error);
    }
  }

  return (
    <div className={styles.container} >
      <h2 className={styles.heading} >Welcome to The Sponsor Match!</h2>
      <p className={styles.p} >Before you get started, we need to ask you some questions</p>
      <p className={styles.p} >Create a username and let us know what kind of account you want to create</p>
      <form className={styles.formcontainer} onSubmit={(e) => handleSubmit(e)} >
        <label className={styles.label} htmlFor="username">Username:</label>
        <input id="username" name="username" type="text" required className={styles.input} placeholder="Username" />
        <br />
        <p className={styles.p} htmlFor="accountType">Account type:</p>
        <Select
          id="accountType"
          name="accountType"
          options={accountTypes}
          value={selectedAccountType}
          onChange={handleChange}
          styles={selectStyles}
          placeholder="Select account type..."
          className="react-select-container"
          classNamePrefix="react-select"
          required
        />
        <button type="submit" className={styles.button} >Continue</button>
      </form>
    </div>
  );
}