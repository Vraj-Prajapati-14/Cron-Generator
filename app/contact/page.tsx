import styles from '../Home.module.css';
import { Metadata } from 'next';
import { Mail, MessageSquare, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Cron Generator - Get in Touch',
  description: 'Get in touch with the Cron Generator team. We\'d love to hear from you. Have questions, feedback, or suggestions? Contact us for support and inquiries.',
  keywords: [
    'cron generator contact', 'cron tool contact', 'cron builder contact', 'cron generator support',
    'cron tool support', 'cron builder support', 'cron generator help', 'cron tool help', 'cron builder help',
    'cron generator feedback', 'cron tool feedback', 'cron builder feedback', 'cron generator email',
    'cron tool email', 'cron builder email', 'cron generator inquiry', 'cron tool inquiry', 'cron builder inquiry',
  ].join(', '),
  alternates: {
    canonical: 'https://www.crongenerator.online/contact',
  },
  openGraph: {
    title: 'Contact Us | Cron Generator',
    description: 'Get in touch with the Cron Generator team. We\'d love to hear from you.',
    url: 'https://www.crongenerator.online/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us | Cron Generator',
    description: 'Get in touch with the Cron Generator team.',
  },
};

export default function ContactPage() {
  const baseUrl = 'https://www.crongenerator.online';

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Us | Cron Generator',
    description: 'Get in touch with the Cron Generator team. We\'d love to hear from you.',
    url: `${baseUrl}/contact`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact',
        item: `${baseUrl}/contact`,
      },
    ],
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className={styles.hero}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          Have questions, feedback, or suggestions? We'd love to hear from you.
        </p>
      </section>

      <section className={styles.section}>
        <div className="glass-card">
          <div className={styles.grid}>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <div style={{ color: 'var(--accent-primary)', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                <Mail size={48} />
              </div>
              <h3 className={styles.featureTitle}>Email Us</h3>
              <p className={styles.text}>
                <a href="mailto:connect@rivonixtech.com" style={{ color: 'var(--accent-primary)', fontSize: '1.125rem' }}>
                  connect@rivonixtech.com
                </a>
              </p>
            </div>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <div style={{ color: 'var(--accent-primary)', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                <Clock size={48} />
              </div>
              <h3 className={styles.featureTitle}>Response Time</h3>
              <p className={styles.text}>
                We typically respond within 24-48 hours during business days.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.text}>
            Whether you have a question about features, need technical support, or want to provide 
            feedback, our team is ready to answer all your questions.
          </p>
          <div style={{ marginTop: '24px' }}>
            <a 
              href="mailto:connect@rivonixtech.com" 
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
            >
              <MessageSquare size={18} />
              Send us a message
            </a>
          </div>
        </div>

        <div className="glass-card">
          <h2 className={styles.sectionTitle}>Feedback Welcome</h2>
          <p className={styles.text}>
            We're constantly improving Cron Pro based on user feedback. If you have suggestions 
            for new features or improvements, please don't hesitate to reach out. Your input helps 
            us make this tool better for everyone.
          </p>
        </div>
      </section>
    </div>
  );
}

