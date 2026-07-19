import { discography } from '../../data/credits';
import { CreditRow } from '../CreditRow';
import { ListeningPanel } from '../ListeningPanel';
import styles from './Discography.module.css';

export function Discography() {
  return (
    <section id="discography" className={styles.section} aria-labelledby="discography-heading">
      <div className={`container ${styles.grid}`}>
        <div className={styles.discographyCol}>
          <h2 id="discography-heading" className={styles.heading}>
            FULL DISCOGRAPHY
          </h2>
          <ul className={styles.list}>
            {discography.map((credit) => (
              <CreditRow key={credit.id} credit={credit} />
            ))}
          </ul>
        </div>
        <div className={styles.listenCol} aria-labelledby="listen-heading">
          <h2 id="listen-heading" className={styles.heading}>
            TAKE A LISTEN
          </h2>
          <ListeningPanel />
        </div>
      </div>
    </section>
  );
}
