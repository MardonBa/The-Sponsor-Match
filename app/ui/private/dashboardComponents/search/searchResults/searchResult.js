import styles from './searchResult.module.css';
import ProfilePicPreview from '../../profilePicPreview/profilePicPreview';
import Link from 'next/link';

export function CreatorSearchResult({ name, communitySize, niche, contentFrequency }) {
  return (
    <Link className={styles.creatorcontainer} href={`/creator/${name}`} >
      <ProfilePicPreview />
      <p className={styles.creatorname} >{name}</p>
      <p className={styles.communitysize} >{communitySize}</p>
      <p className={styles.niche} >{niche}</p>
      <p className={styles.contentfrequency} >{contentFrequency}</p>
      <div className={styles.socials} >icons {/* Shuold have an icon linking to their account on each platform */}</div>
    </Link>
  );
}

export function SponsorSearchResult({ name, size, industry }) {
  return (
    <Link className={styles.sponsorcontainer} href={`/sponsor/${name}`} >
      <ProfilePicPreview />
      <p className={styles.sponsorname} >{name}</p>
      <p className={styles.size} >{size}</p>
      <p className={styles.industry} >{industry}</p>
    </Link>
  );
}