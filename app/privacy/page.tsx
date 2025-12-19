import styles from '../Home.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Cron Generator',
  description: 'Privacy policy for Cron Generator. Learn how we handle your data and protect your privacy.',
  alternates: {
    canonical: 'https://www.crongenerator.online/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.subtitle}>
          Last updated: December 2024
        </p>
      </section>

      <section className={styles.section}>
        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.text}>
            At Cron Pro, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, and protect your information when you use our cron generator tool.
          </p>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Data Collection</h2>
          <p className={styles.text}>
            <strong>We do not collect, store, or transmit any of the cron expressions you create.</strong> 
            All processing happens entirely in your browser (client-side). Your data never leaves your device.
          </p>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Analytics</h2>
          <p className={styles.text}>
            We may use anonymous analytics to understand how our tool is used. This includes general 
            usage statistics like page views and browser types. No personal information is collected.
          </p>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Cookies</h2>
          <p className={styles.text}>
            We may use essential cookies to ensure the website functions properly. These cookies do not 
            track personal information or browsing behavior across other websites.
          </p>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Third-Party Services</h2>
          <p className={styles.text}>
            Our website may include links to third-party websites. We are not responsible for the 
            privacy practices of these external sites.
          </p>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.text}>
            If you have any questions about this Privacy Policy, please contact us at:{' '}
            <a href="mailto:connect@rivonixtech.com" style={{ color: 'var(--accent-primary)' }}>
              connect@rivonixtech.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

