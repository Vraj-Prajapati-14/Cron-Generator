import CronTool from '@/components/CronTool';
import styles from './Home.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Online Cron Generator | Create & Validate Cron Expressions',
  description: 'Generate and validate cron expressions easily. Build cron schedules with a visual builder and see descriptions in plain English. Secure, client-side processing.',
  alternates: {
    canonical: 'https://www.crongenerator.online',
  },
  openGraph: {
    title: 'Best Online Cron Generator',
    description: 'Generate and validate cron expressions easily.',
    url: 'https://www.crongenerator.online',
    siteName: 'Cron Pro',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Cron Generator',
    url: 'https://www.crongenerator.online',
    description: 'A free online tool to generate and validate cron expressions.',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Cron Expression Generation',
      'Cron Validation',
      'Visual Builder',
      'Plain English Description',
      'Secure Client-Side Processing'
    ]
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Best Online Cron Generator
        </h1>
        <p className={styles.subtitle}>
          Generate and validate cron expressions easily. Build cron schedules with a visual builder and see descriptions in plain English.
        </p>
      </section>

      <CronTool />

      <section className={styles.section}>
        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Why use this Cron Generator?</h2>
          <div className={styles.grid}>
            <div>
              <h3 className={styles.featureTitle}>Visual Builder</h3>
              <p className={styles.text}>
                Build cron expressions easily using our intuitive form. No need to remember the cron syntax - just fill in the fields.
              </p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Real-time Validation</h3>
              <p className={styles.text}>
                Validate cron expressions as you type. Get instant feedback on whether your expression is valid or needs correction.
              </p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Plain English Description</h3>
              <p className={styles.text}>
                See what your cron expression means in plain English. Understand exactly when your scheduled task will run.
              </p>
            </div>
            <div>
              <h3 className={styles.featureTitle}>Secure & Client-Side</h3>
              <p className={styles.text}>
                All processing happens locally in your browser. No data is sent to any server, ensuring your privacy.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className={styles.faqItem}>
              <h4 className={styles.faqQuestion}>What is a cron expression?</h4>
              <p className={styles.text}>
                A cron expression is a string representing a schedule for tasks to run. It consists of five fields: minute, hour, day of month, month, and day of week.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h4 className={styles.faqQuestion}>What does * mean in cron?</h4>
              <p className={styles.text}>
                The asterisk (*) means "every" or "all values" for that field. For example, * in the minute field means every minute.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h4 className={styles.faqQuestion}>What is the cron format?</h4>
              <p className={styles.text}>
                The standard cron format uses 5 fields: minute (0-59), hour (0-23), day of month (1-31), month (1-12), and day of week (0-7, where 0 and 7 are Sunday).
              </p>
            </div>
            <div className={styles.faqItem}>
              <h4 className={styles.faqQuestion}>Is my data safe?</h4>
              <p className={styles.text}>
                Yes! All cron expression generation and validation happens locally on your device. Nothing is sent to any server.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

