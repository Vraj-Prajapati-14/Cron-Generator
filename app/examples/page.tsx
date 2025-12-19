import styles from '../Home.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cron Expression Examples | Common Cron Schedules',
  description: 'Common cron expression examples for various scheduling needs. Copy and use these cron expressions for your tasks.',
  alternates: {
    canonical: 'https://www.crongenerator.online/examples',
  },
};

export default function ExamplesPage() {
  const examples = [
    { expression: '* * * * *', description: 'Every minute' },
    { expression: '0 * * * *', description: 'Every hour (at minute 0)' },
    { expression: '0 0 * * *', description: 'Every day at midnight' },
    { expression: '0 12 * * *', description: 'Every day at noon' },
    { expression: '0 0 * * 0', description: 'Every Sunday at midnight' },
    { expression: '0 0 * * 1', description: 'Every Monday at midnight' },
    { expression: '0 9 * * 1-5', description: 'Every weekday at 9 AM' },
    { expression: '0 0 1 * *', description: 'First day of every month at midnight' },
    { expression: '0 0 1 1 *', description: 'Every year on January 1st at midnight' },
    { expression: '*/5 * * * *', description: 'Every 5 minutes' },
    { expression: '*/15 * * * *', description: 'Every 15 minutes' },
    { expression: '0 */2 * * *', description: 'Every 2 hours' },
    { expression: '0 0 */2 * *', description: 'Every 2 days at midnight' },
    { expression: '30 4 * * *', description: 'Every day at 4:30 AM' },
    { expression: '0 22 * * 1-5', description: 'Every weekday at 10 PM' },
    { expression: '0 0 15 * *', description: '15th of every month at midnight' },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Cron Expression Examples</h1>
        <p className={styles.subtitle}>
          Common cron expressions for various scheduling scenarios. Click to copy any expression.
        </p>
      </section>

      <section className={styles.section}>
        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Common Cron Expressions</h2>
          <div style={{ display: 'grid', gap: '12px', marginTop: '20px' }}>
            {examples.map((example, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px',
                  background: 'var(--bg-secondary)',
                  borderRadius: '8px',
                  border: '1px solid var(--glass-border)',
                }}
              >
                <code style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--accent-primary)' }}>
                  {example.expression}
                </code>
                <span className={styles.text}>{example.description}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Pro Tips</h2>
          <div className={styles.grid}>
            <div>
              <h3 className={styles.featureTitle}>Testing Your Cron</h3>
              <p className={styles.text}>
                Always test your cron expressions in a staging environment before deploying to production.
              </p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Time Zones</h3>
              <p className={styles.text}>
                Remember that cron typically uses the server's local time zone. Consider using UTC for consistency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

