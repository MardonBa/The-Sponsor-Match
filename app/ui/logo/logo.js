import styles from './logo.module.css';
import Image from 'next/image';

export default function Logo({ dimensions }) {
    return (
        <div className={styles.logocontainer} >
            <Image 
                src={'/logo.svg'}
                width={dimensions}
                height={dimensions}
                alt='The Sponsor Match Logo'
                className={styles.logo}
            />
            <p className={`${styles.colorgradient}`} style={{fontSize: dimensions/3.6}}  ><b>The<br />Sponsor<br />Match</b></p>
        </div>
    );
}