import styles from '../Home.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Cron Generator',
  description: 'Terms of service for Cron Generator. Read our terms and conditions for using this tool.',
  alternates: {
    canonical: 'https://www.crongenerator.online/terms',
  },
};

export default function TermsPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.subtitle}>
          Last updated: December 2024
        </p>
      </section>

      <section className={styles.section}>
        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Acceptance of Terms</h2>
          <p className={styles.text}>
            By accessing and using Cron Pro, you accept and agree to be bound by the terms and 
            provisions of this agreement.
          </p>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Use License</h2>
          <p className={styles.text}>
            Permission is granted to temporarily use this tool for personal, non-commercial purposes. 
            This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Disclaimer</h2>
          <p className={styles.text}>
            The materials on this website are provided on an 'as is' basis. We make no warranties, 
            expressed or implied, and hereby disclaim and negate all other warranties including, 
            without limitation, implied warranties or conditions of merchantability, fitness for 
            a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Limitations</h2>
          <p className={styles.text}>
            In no event shall Cron Pro or its suppliers be liable for any damages (including, without 
            limitation, damages for loss of data or profit, or due to business interruption) arising 
            out of the use or inability to use the materials on this website.
          </p>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Accuracy of Materials</h2>
          <p className={styles.text}>
            The materials appearing on this website could include technical, typographical, or 
            photographic errors. We do not warrant that any of the materials on its website are 
            accurate, complete, or current.
          </p>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.text}>
            If you have any questions about these Terms of Service, please contact us at:{' '}
            <a href="mailto:connect@rivonixtech.com" style={{ color: 'var(--accent-primary)' }}>
              connect@rivonixtech.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

