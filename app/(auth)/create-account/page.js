// This page gets the username and type (creator or sponsor)
// tell creators that their username should be the same as their social media usernames so that they can be more easily recognized
"use client";

import styles from "./page.module.css";
import Select from "react-select";
import { useState } from "react";
import insertUser from "./action";
import { useRouter } from "next/navigation";

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
      username: e.target.username?.value,
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
      <form className={styles.formcontainer} onSubmit={(e) => handleSubmit(e)} >
        <label className={styles.label} htmlFor="username">Username:</label>
        <input id="username" name="username" type="text" required className={styles.input} placeholder="Username" />
        <label className={styles.label} htmlFor="accountType">Account type:</label>
        <Select
          id="accountType"
          name="accountType"
          options={accountTypes}
          value={selectedAccountType}
          onChange={handleChange}
          className={styles.select}
          placeholder="Select account type..."
          required
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}