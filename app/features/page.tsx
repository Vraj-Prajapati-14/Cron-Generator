import styles from '../Home.module.css';
import { Metadata } from 'next';
import { Clock, Shield, Zap, Eye, Copy, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Features | Cron Generator Online Tool - All Features Explained',
  description: 'Explore all features of our free online cron generator. Visual builder, real-time validation, plain English descriptions, secure client-side processing, and more. See why developers choose our cron tool.',
  keywords: [
    'cron generator features', 'cron tool features', 'cron builder features', 'cron generator capabilities', 'cron tool benefits',
    'cron generator advantages', 'cron tool advantages', 'cron builder advantages', 'cron generator tools', 'cron tool tools',
    'visual cron builder', 'cron expression validator', 'cron syntax checker', 'cron expression generator', 'cron expression builder',
    'real-time cron validation', 'cron expression description', 'plain english cron', 'cron expression interpreter', 'cron expression parser',
    'secure cron generator', 'client-side cron', 'privacy cron tool', 'free cron generator', 'online cron generator',
    'cron generator without registration', 'cron tool no signup', 'cron builder free', 'cron generator instant', 'cron tool fast',
  ].join(', '),
  alternates: {
    canonical: 'https://www.crongenerator.online/features',
  },
  openGraph: {
    title: 'Features | Cron Generator Online Tool',
    description: 'Explore all features of our free online cron generator. Visual builder, real-time validation, plain English descriptions, and more.',
    url: 'https://www.crongenerator.online/features',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Features | Cron Generator Online Tool',
    description: 'Explore all features of our free online cron generator.',
  },
};

export default function FeaturesPage() {
  const baseUrl = 'https://www.crongenerator.online';
  
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

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Cron Generator Features',
    description: 'Explore all features of our free online cron generator tool.',
    itemListElement: features.map((feature, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: feature.title,
      description: feature.description,
    })),
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
        name: 'Features',
        item: `${baseUrl}/features`,
      },
    ],
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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

