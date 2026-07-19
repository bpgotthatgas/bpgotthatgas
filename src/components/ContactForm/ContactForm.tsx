import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import styles from './ContactForm.module.css';

// Fill in one of these to make the form functional:
// - FORMSPREE_ENDPOINT: a Formspree form endpoint (e.g. https://formspree.io/f/xxxxxxx) — submits via fetch.
// - CONTACT_EMAIL: falls back to a mailto: link with the message pre-filled if no endpoint is set.
const FORMSPREE_ENDPOINT = '';
const CONTACT_EMAIL = 'bpgotthatgas@gmail.com';

const PROJECT_TYPES = [
  'Recording',
  'Mixing',
  'Mastering',
  'Recording + Mixing',
  'Mixing + Mastering',
  'Full Project',
  'Other',
];

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    projectType: PROJECT_TYPES[0],
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [feedback, setFeedback] = useState('');

  const updateField =
    (field: keyof FormState) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!EMAIL_PATTERN.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) next.message = 'Please add a message.';
    return next;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'submitting') return;

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setStatus('error');
      setFeedback('Please fix the highlighted fields and try again.');
      return;
    }

    if (FORMSPREE_ENDPOINT) {
      setStatus('submitting');
      setFeedback('');
      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            projectType: form.projectType,
            message: form.message,
          }),
        });

        if (!response.ok) throw new Error('Request failed');

        setStatus('success');
        setFeedback("Thanks — your inquiry is in. I'll get back to you soon.");
        setForm({ name: '', email: '', projectType: PROJECT_TYPES[0], message: '' });
      } catch {
        setStatus('error');
        setFeedback('Something went wrong sending that. Please try again or email directly.');
      }
      return;
    }

    if (CONTACT_EMAIL) {
      const subject = encodeURIComponent(`Mix inquiry — ${form.projectType}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.projectType}\n\n${form.message}`,
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus('success');
      setFeedback('Opening your email client to send this inquiry.');
      return;
    }

    setStatus('error');
    setFeedback(
      'This form is not connected yet — add a Formspree endpoint or contact email in ContactForm.tsx.',
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="contact-name" className={styles.label}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          className={styles.input}
          value={form.name}
          onChange={updateField('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
        />
        {errors.name && (
          <p id="contact-name-error" className={styles.fieldError}>
            {errors.name}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-email" className={styles.label}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          className={styles.input}
          value={form.email}
          onChange={updateField('email')}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
        />
        {errors.email && (
          <p id="contact-email-error" className={styles.fieldError}>
            {errors.email}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-project-type" className={styles.label}>
          Project type
        </label>
        <select
          id="contact-project-type"
          name="projectType"
          className={styles.input}
          value={form.projectType}
          onChange={updateField('projectType')}
        >
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message" className={styles.label}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          className={`${styles.input} ${styles.textarea}`}
          rows={4}
          value={form.message}
          onChange={updateField('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
        {errors.message && (
          <p id="contact-message-error" className={styles.fieldError}>
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className={styles.submit}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'SENDING…' : 'SEND INQUIRY'}
      </button>

      <p aria-live="polite" className={styles.feedback} data-status={status}>
        {feedback}
      </p>
    </form>
  );
}
