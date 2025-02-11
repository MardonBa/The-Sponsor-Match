import styles from "./displayCreator.module.css";

export default function DisplayCreator({ userData }) {
  let { community_size_out: communitySize, niche_out: niche, content_frequency_out: contentFrequency, blog_link_out: blogLink, platforms, formats} = userData;
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
        Community size: {communitySize}
        Content frequency: {contentFrequency}
        Niche: {niche}
      </div>
    </>
  );
}