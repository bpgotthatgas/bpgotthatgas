import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import styles from './LandingIntro.module.css';

const STORAGE_KEY = 'bp-intro-seen';

const KEYPAD_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

const GRADES = [
  { label: 'RECORDING', code: '87', stripe: 'accent' as const },
  { label: 'MIXING', code: '89', stripe: 'moss' as const },
  { label: 'MASTERING', code: '93', stripe: 'umber' as const },
];

export function LandingIntro() {
  const [visible, setVisible] = useState(false);
  const [enteredKeys, setEnteredKeys] = useState('');
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;

    document.body.style.overflow = 'hidden';

    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const mainSiblings = document.querySelectorAll(
      'main > *:not([data-intro-root])',
    );
    const inertTargets = [header, footer, ...mainSiblings].filter(
      (el): el is HTMLElement => el instanceof HTMLElement,
    );
    inertTargets.forEach((el) => el.setAttribute('inert', ''));

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Enter') {
        dismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      inertTargets.forEach((el) => el.removeAttribute('inert'));
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  };

  const handleKeyPress = (key: string) => {
    setEnteredKeys((prev) => {
      const next = prev + key;
      const isValidCode = GRADES.some((grade) => grade.code === next.slice(-2));
      if (isValidCode || next.length >= 3) dismiss();
      return next;
    });
  };

  const transitionDuration = prefersReducedMotion ? 0 : 0.5;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.overlay}
          data-intro-root
          role="dialog"
          aria-label="Site intro — press a button to enter"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: transitionDuration, ease: 'easeInOut' }}
        >
          <motion.div
            className={styles.pump}
            initial={{ y: 0, scale: 1 }}
            exit={{ y: -24, scale: 1.02 }}
            transition={{ duration: transitionDuration, ease: 'easeInOut' }}
          >
            <img
              src="/images/bp-logo-mark.png"
              alt="BP Got That Gas"
              className={styles.brandMark}
            />

            <div className={styles.pumpTop}>
              <div className={styles.keypad}>
                {KEYPAD_KEYS.map((key) => (
                  <button
                    key={key}
                    type="button"
                    className={styles.key}
                    onClick={() => handleKeyPress(key)}
                  >
                    {key}
                  </button>
                ))}
              </div>
              <div className={styles.screen}>
                <p className={styles.screenSub}>
                  {enteredKeys || 'AWAITING SELECTION'}
                  <span className={styles.cursor} aria-hidden="true">
                    _
                  </span>
                </p>
              </div>
            </div>

            <div className={styles.grades}>
              {GRADES.map((grade) => (
                <div
                  key={grade.label}
                  className={`${styles.gradeCol} ${styles[grade.stripe]}`}
                >
                  <div className={styles.stripe}>
                    <p className={styles.octaneLabel}>octane rating</p>
                    <div className={styles.display}>{grade.code}</div>
                    <p className={styles.gradeLabel}>{grade.label}</p>
                  </div>
                  <button
                    type="button"
                    className={styles.pressButton}
                    onClick={dismiss}
                    aria-label={`Enter site — ${grade.label}`}
                  >
                    PRESS <span aria-hidden="true">▼</span>
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
