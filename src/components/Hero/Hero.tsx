import { useState } from 'react';
import type { MouseEvent } from 'react';
import { scrollToId } from '../../utils/scroll';
import styles from './Hero.module.css';

// Optional hero portrait. Drop a photo at public/images/hero-portrait.jpg to enable it —
// the dark panel remains as a fallback background if this file doesn't exist.
const HERO_PORTRAIT_SRC = '/images/hero-portrait.jpg';

export function Hero() {
  const [portraitFailed, setPortraitFailed] = useState(false);

  const handleViewDiscography = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToId('discography');
  };

  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.imagePanel}>
        {!portraitFailed && (
          <img
            src={HERO_PORTRAIT_SRC}
            alt="Portrait of Brandon Porter"
            className={styles.portrait}
            onError={() => setPortraitFailed(true)}
          />
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.heading}>BRANDON PORTER</h1>
          <p className={styles.body}>
            chicago-based recording, mixing, and mastering engineer at
            classick studios. selected work below.
          </p>
          <a
            href="#discography"
            className={styles.cta}
            onClick={handleViewDiscography}
          >
            VIEW DISCOGRAPHY
          </a>
        </div>
      </div>
    </section>
  );
}
