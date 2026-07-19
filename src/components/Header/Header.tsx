import type { MouseEvent } from 'react';
import { scrollToId, scrollToTop } from '../../utils/scroll';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'WORK', id: 'work' },
  { label: 'BOOK', id: 'book' },
  { label: 'CONTACT', id: 'contact' },
];

export function Header() {
  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToTop();
  };

  const handleNavClick =
    (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      scrollToId(id);
    };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} onClick={handleLogoClick}>
          BP GOT THAT GAS
        </a>
        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={styles.navLink}
                  onClick={handleNavClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
