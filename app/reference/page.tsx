import styles from '../Home.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cron Syntax Reference | Complete Cron Field Guide',
  description: 'Complete cron syntax reference. Learn about all cron fields, special characters, and syntax rules.',
  alternates: {
    canonical: 'https://www.crongenerator.online/reference',
  },
};

export default function ReferencePage() {
  const fields = [
    { name: 'Minute', range: '0-59', description: 'The minute of the hour when the command will run.' },
    { name: 'Hour', range: '0-23', description: 'The hour of the day when the command will run (24-hour format).' },
    { name: 'Day of Month', range: '1-31', description: 'The day of the month when the command will run.' },
    { name: 'Month', range: '1-12', description: 'The month when the command will run.' },
    { name: 'Day of Week', range: '0-7', description: 'The day of the week (0 and 7 are Sunday).' },
  ];

  const specialChars = [
    { char: '*', name: 'Asterisk', description: 'Matches all possible values for the field.' },
    { char: ',', name: 'Comma', description: 'Specifies a list of values (e.g., 1,3,5).' },
    { char: '-', name: 'Hyphen', description: 'Specifies a range of values (e.g., 1-5).' },
    { char: '/', name: 'Slash', description: 'Specifies step values (e.g., */5 for every 5 units).' },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Cron Syntax Reference</h1>
        <p className={styles.subtitle}>
          Complete reference guide for cron expression syntax and special characters.
        </p>
      </section>

      <section className={styles.section}>
        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Cron Fields</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary)' }}>Field</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary)' }}>Range</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary)' }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {fields.map((field, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                    <td style={{ padding: '12px', color: 'var(--accent-primary)', fontWeight: 600 }}>{field.name}</td>
                    <td style={{ padding: '12px', fontFamily: 'JetBrains Mono, monospace' }}>{field.range}</td>
                    <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>{field.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Special Characters</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary)' }}>Character</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary)' }}>Name</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: 'var(--text-secondary)' }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {specialChars.map((item, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                    <td style={{ padding: '12px', fontFamily: 'JetBrains Mono, monospace', fontSize: '1.25rem', color: 'var(--accent-primary)' }}>{item.char}</td>
                    <td style={{ padding: '12px', fontWeight: 600 }}>{item.name}</td>
                    <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Month Names</h2>
          <p className={styles.text}>
            Some cron implementations allow month names: JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC
          </p>
          <h2 className={styles.sectionTitle} style={{ marginTop: '24px' }}>Day Names</h2>
          <p className={styles.text}>
            Some cron implementations allow day names: SUN, MON, TUE, WED, THU, FRI, SAT
          </p>
        </div>
      </section>
    </div>
  );
}

