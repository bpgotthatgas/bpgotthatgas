import type { MouseEvent } from 'react';
import { APPLE_MUSIC_PLAYLIST_URL } from '../ListeningPanel';
import { scrollToTop } from '../../utils/scroll';
import styles from './Footer.module.css';

// Fill these in — left empty intentionally, no placeholder values invented.
const EMAIL_ADDRESS = 'bpgotthatgas@gmail.com';
const INSTAGRAM_URL = 'https://www.instagram.com/bpgotthatgas/';

export function Footer() {
  const year = new Date().getFullYear();

  const handleBackToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToTop();
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.panel}>
        <div className={styles.identity}>
          <p className={styles.name}>BRANDON PORTER</p>
          <p className={styles.tagline}>Recording · Mixing · Mastering</p>
          <p className={styles.location}>Chicago, Illinois</p>
        </div>
        <nav className={styles.links} aria-label="Footer">
          <ul className={styles.linkList}>
            <li>
              {EMAIL_ADDRESS ? (
                <a href={`mailto:${EMAIL_ADDRESS}`} className={styles.link}>
                  Email
                </a>
              ) : (
                <span className={styles.linkDisabled} aria-disabled="true">
                  Email (add address)
                </span>
              )}
            </li>
            <li>
              {INSTAGRAM_URL ? (
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Instagram
                </a>
              ) : (
                <span className={styles.linkDisabled} aria-disabled="true">
                  Instagram (add link)
                </span>
              )}
            </li>
            <li>
              {APPLE_MUSIC_PLAYLIST_URL ? (
                <a
                  href={APPLE_MUSIC_PLAYLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Apple Music
                </a>
              ) : (
                <span className={styles.linkDisabled} aria-disabled="true">
                  Apple Music (add link)
                </span>
              )}
            </li>
            <li>
              <a href="#top" className={styles.link} onClick={handleBackToTop}>
                Back to top
              </a>
            </li>
          </ul>
        </nav>
        <p className={styles.copyright}>
          &copy; {year} Brandon Porter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
