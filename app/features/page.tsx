import styles from '../Home.module.css';
import { Metadata } from 'next';
import { Clock, Shield, Zap, Eye, Copy, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Features | Cron Generator Online Tool',
  description: 'Explore all features of our free online cron generator. Visual builder, real-time validation, plain English descriptions, and more.',
  alternates: {
    canonical: 'https://www.crongenerator.online/features',
  },
};

export default function FeaturesPage() {
  const features = [
    {
      icon: <Clock size={32} />,
      title: 'Visual Cron Builder',
      description: 'Build cron expressions easily using our intuitive form interface. No need to memorize the syntax - just fill in the fields.',
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Real-time Validation',
      description: 'Validate cron expressions as you type. Get instant feedback on whether your expression is valid or needs correction.',
    },
    {
      icon: <Eye size={32} />,
      title: 'Human-Readable Descriptions',
      description: 'See what your cron expression means in plain English. Understand exactly when your scheduled task will run.',
    },
    {
      icon: <Shield size={32} />,
      title: '100% Client-Side Processing',
      description: 'All processing happens in your browser. Your data never leaves your device, ensuring complete privacy and security.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Instant Generation',
      description: 'Generate cron expressions instantly with no delays. Real-time updates as you modify any field.',
    },
    {
      icon: <Copy size={32} />,
      title: 'One-Click Copy',
      description: 'Copy your cron expression to clipboard with a single click. Ready to paste into your crontab or scheduler.',
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Features</h1>
        <p className={styles.subtitle}>
          Powerful features to make cron expression creation effortless.
        </p>
      </section>

      <section className={styles.section}>
        <div className="glass-card">
          <div className={styles.grid}>
            {features.map((feature, index) => (
              <div key={index} style={{ padding: '20px' }}>
                <div style={{ color: 'var(--accent-primary)', marginBottom: '16px' }}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.text}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Why Choose Cron Pro?</h2>
          <p className={styles.text}>
            Cron Pro is designed for developers who need a fast, reliable, and secure way to create 
            cron expressions. Whether you're setting up scheduled tasks for a web server, automating 
            backups, or configuring CI/CD pipelines, our tool makes it simple.
          </p>
        </div>
      </section>
    </div>
  );
}

