import type { MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { scrollToTop } from '../../utils/scroll';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'WORK', to: '/#work' },
  { label: 'ABOUT', to: '/about' },
  { label: 'BOOK', to: '/#book' },
];

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      event.preventDefault();
      scrollToTop();
    }
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} onClick={handleLogoClick}>
          BP GOT THAT GAS
        </Link>
        <Link
          to="/"
          className={styles.markLink}
          onClick={handleLogoClick}
          aria-label="Back to top"
        >
          <span className={styles.markBounce}>
            <img
              src="/images/bp-logo-mark.png"
              alt=""
              className={styles.markImg}
            />
          </span>
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
