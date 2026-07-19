import { ContactForm } from '../ContactForm';
import styles from './BookingSection.module.css';

export function BookingSection() {
  return (
    <section
      id="book"
      className={styles.section}
      aria-labelledby="booking-heading"
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h2 id="booking-heading" className={styles.heading}>
            BOOK A MIX
          </h2>
          <p className={styles.description}>
            Need recording, mixing, or mastering? Tell me about your project,
            timeline, and what you need help with!
          </p>
          <p className={styles.availability}>
            Chicago-based. Remote mixing available.
          </p>
        </div>
        <div id="contact" className={styles.panel}>
          <h3 className={styles.panelHeading}>GET IN TOUCH</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
