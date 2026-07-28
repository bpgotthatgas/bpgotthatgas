import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function About() {
  return (
    <>
      <section className={styles.intro} aria-labelledby="about-heading">
        <div className={styles.introImage}>
          <img
            src="/images/about-portrait-01.jpg"
            alt="Portrait of Brandon Porter"
            className={styles.introImg}
          />
        </div>
        <div className={styles.introContent}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className={styles.eyebrow}>About</p>
            <h1 id="about-heading" className={styles.heading}>
              BRANDON PORTER
            </h1>
            <p className={styles.subheading}>
              Recording, Mixing &amp; Mastering Engineer
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.story} aria-label="Biography">
        <motion.p
          className={styles.paragraph}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Brandon Porter is a Chicago-based recording, mixing, and mastering
          engineer at Classick Studios, where he works alongside a growing
          roster of independent artists shaping their sound from one release
          to the next.
        </motion.p>

        <motion.p
          className={styles.paragraph}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
        >
          His path began at Syracuse University, where he earned a Master of
          Arts in Audio Arts after completing a Bachelor of Science in
          Communication and Rhetorical Studies with a minor in Music
          Industry. He graduated summa cum laude through the Ren&eacute;e
          Crown Honors Program.
        </motion.p>

        <motion.p
          className={styles.paragraph}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          At Syracuse, Brandon managed Belfer Recording Studio while
          continuing to develop his skills as an engineer. His time there,
          along with an independent study in analog recording and mixing,
          gave him a hands-on foundation in signal flow, outboard gear, and
          shaping sound before it ever reached the computer.
        </motion.p>

        <motion.div
          className={styles.midImageRow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img
            src="/images/about-portrait-hands.jpg"
            alt="Portrait of Brandon Porter"
            className={styles.midImage}
          />
        </motion.div>

        <motion.p
          className={styles.paragraph}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Since joining Classick Studios in Chicago, he has built a client
          list that includes femdot., D. Lylez, and Brittney Carter. He
          approaches every session with the same goal: clean technical
          execution and a room where the artist feels comfortable
          experimenting, communicating, and creating.
        </motion.p>
      </section>

      <motion.section
        className={styles.cta}
        aria-label="Book a session"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className={styles.ctaHeading}>READY TO WORK TOGETHER?</h2>
        <Link to="/#book" className={styles.ctaButton}>
          BOOK A MIX
        </Link>
      </motion.section>
    </>
  );
}
