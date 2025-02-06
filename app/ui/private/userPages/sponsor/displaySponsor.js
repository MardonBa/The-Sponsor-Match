import styles from "./displaySponsor.module.css";

export default function DisplaySponsor({ userData }) {

  let { company_name_out: company_name, industry_out: industry, size, platforms, formats } = userData;

  return (
    <>
      <div className={styles.platformcontainer}>
        {platforms.map((platform) => {
          return <p key={`${platform}`}>{platform}</p>
        })}
      </div>
      <div className={styles.formatscontainer}>
      {formats.map((format) => {
          return <p key={`${format}`}>{format}</p>
        })}
      </div>
      <div className={styles.biocontainer}>

      </div>
      <div className={styles.demographicscontainer}>

      </div>
    </>
  );
}