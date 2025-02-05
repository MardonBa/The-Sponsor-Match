import styles from "./displayCreator.module.css";

export default function DisplayCreator({ userData }) {
  let { community_size_out: communitySize, niche_out: niche, content_frequency_out: contentFrequency, blog_link_out: blogLink, platforms, formats} = userData;
  console.log(communitySize);
  console.log('creator') 
  return (
    <>
      <div className={styles.platformcontainer}>

      </div>
      <div className={styles.formatscontainer}>

      </div>
      <div className={styles.biocontainer}>

      </div>
      <div className={styles.demographicscontainer}>

      </div>
    </>
  );
}