import styles from '../Home.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cron Expression Guide | How to Use Cron Generator',
  description: 'Complete guide on how to use cron expressions. Learn cron syntax, understand each field, and create scheduled tasks easily.',
  alternates: {
    canonical: 'https://www.crongenerator.online/guide',
  },
};

export default function GuidePage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Cron Expression Guide</h1>
        <p className={styles.subtitle}>
          Learn how to create and understand cron expressions for scheduling tasks.
        </p>
      </section>

      <section className={styles.section}>
        <div className="glass-card">
          <h2 className={styles.sectionTitle}>What is a Cron Expression?</h2>
          <p className={styles.text}>
            A cron expression is a string consisting of five fields that represent a schedule. 
            Each field represents a unit of time (minute, hour, day of month, month, day of week). 
            Cron expressions are used to schedule recurring tasks in Unix-like operating systems.
          </p>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Cron Expression Format</h2>
          <div className={styles.text}>
            <p>A standard cron expression has 5 fields:</p>
            <pre style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '8px', marginTop: '16px', fontFamily: 'JetBrains Mono, monospace' }}>
              ┌───────────── minute (0 - 59){'\n'}
              │ ┌───────────── hour (0 - 23){'\n'}
              │ │ ┌───────────── day of month (1 - 31){'\n'}
              │ │ │ ┌───────────── month (1 - 12){'\n'}
              │ │ │ │ ┌───────────── day of week (0 - 7){'\n'}
              │ │ │ │ │{'\n'}
              * * * * *
            </pre>
          </div>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Special Characters</h2>
          <div className={styles.grid}>
            <div>
              <h3 className={styles.featureTitle}>* (Asterisk)</h3>
              <p className={styles.text}>Matches all values. For example, * in the hour field means every hour.</p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>, (Comma)</h3>
              <p className={styles.text}>Specifies multiple values. For example, 1,3,5 means on the 1st, 3rd, and 5th.</p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>- (Hyphen)</h3>
              <p className={styles.text}>Defines a range. For example, 1-5 means from 1 to 5.</p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>/ (Slash)</h3>
              <p className={styles.text}>Specifies increments. For example, */5 in minutes means every 5 minutes.</p>
            </div>
          </div>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>How to Use This Tool</h2>
          <div className={styles.text}>
            <ol style={{ marginLeft: '20px', lineHeight: '2' }}>
              <li>Use the visual builder on the left to set values for each field</li>
              <li>The cron expression will be generated automatically</li>
              <li>View the human-readable description of your expression</li>
              <li>Copy the expression to use in your crontab or scheduler</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

