import type { CreditRow as CreditRowData } from '../../data/credits';
import styles from './CreditRow.module.css';

interface CreditRowProps {
  credit: CreditRowData;
}

export function CreditRow({ credit }: CreditRowProps) {
  return (
    <li className={styles.row}>
      <span className={styles.cell}>
        <span className={styles.label}>Year</span>
        <span className={styles.value}>{credit.year}</span>
      </span>
      <span className={styles.cell}>
        <span className={styles.label}>Artist</span>
        <span className={styles.value}>{credit.artist}</span>
      </span>
      <span className={styles.cell}>
        <span className={styles.label}>Release</span>
        <span className={styles.value}>{credit.release}</span>
      </span>
      <span className={styles.cell}>
        <span className={styles.label}>Role</span>
        <span className={styles.value}>{credit.role}</span>
      </span>
    </li>
  );
}
