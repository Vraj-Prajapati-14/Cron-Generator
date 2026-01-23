import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const baseUrl = 'https://www.crongenerator.online';
const siteName = 'Cron Generator Online';
const defaultTitle = 'Best Online Cron Generator | Create & Validate Cron Expressions';
const defaultDescription = 'Free online cron generator and validator. Create cron expressions with our visual builder, validate cron syntax, and get plain English descriptions. Secure client-side processing. No registration required.';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    // Primary keywords
    'cron generator', 'cron expression generator', 'cron job generator', 'crontab generator', 'cron schedule generator',
    // Secondary keywords
    'cron validator', 'cron builder', 'schedule generator', 'task scheduler', 'cron syntax', 'cron expression builder',
    'cron expression validator', 'cron maker', 'cron creator', 'cron tool', 'cron utility', 'cron helper',
    // Long-tail keywords
    'free online cron generator', 'cron expression builder tool', 'validate cron expression online', 'create cron expression',
    'build cron expression', 'generate cron schedule', 'cron expression maker online', 'online cron builder',
    'cron expression generator tool', 'free cron expression generator', 'cron job builder', 'cron schedule builder',
    'cron expression creator', 'cron syntax generator', 'cron pattern generator', 'cron format generator',
    // Technical keywords
    'unix cron', 'linux cron', 'cron format', 'cron schedule', 'cron pattern', 'cron syntax checker',
    'cron expression syntax', 'cron job syntax', 'crontab syntax', 'cron field', 'cron special characters',
    'cron asterisk', 'cron comma', 'cron hyphen', 'cron slash', 'cron step values', 'cron range',
    // Question-based keywords
    'how to create cron expression', 'how to write cron expression', 'how to use cron', 'what is cron expression',
    'cron expression examples', 'cron expression tutorial', 'cron expression guide', 'learn cron expression',
    'cron expression explained', 'cron expression meaning', 'cron expression format', 'cron expression syntax guide',
    // Use case keywords
    'schedule task cron', 'automate task cron', 'run script cron', 'schedule job cron', 'cron for backup',
    'cron for email', 'cron for database', 'cron for maintenance', 'cron for cleanup', 'cron for reports',
    // Platform-specific
    'cron for linux', 'cron for unix', 'cron for mac', 'cron for server', 'cron for web server',
    'cron for apache', 'cron for nginx', 'cron for nodejs', 'cron for python', 'cron for php',
    // Advanced keywords
    'cron expression tester', 'cron expression checker', 'verify cron expression', 'test cron expression',
    'cron expression validator online', 'cron expression parser', 'cron expression decoder', 'cron expression interpreter',
    'cron expression calculator', 'cron expression converter', 'cron expression editor', 'cron expression designer',
    // Additional variations
    'cronjob generator', 'cron job creator', 'cron job builder', 'cron job maker', 'cron job scheduler',
    'crontab builder', 'crontab generator', 'crontab creator', 'crontab maker', 'crontab editor',
    'schedule builder', 'task scheduler tool', 'job scheduler', 'automation scheduler', 'time-based scheduler',
  ].join(', '),
  authors: [{ name: 'Cron Generator Team' }],
  creator: 'Cron Generator Online',
  publisher: 'Cron Generator Online',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Cron Generator Online - Free Cron Expression Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [`${baseUrl}/og-image.png`],
    creator: '@crongenerator',
    site: '@crongenerator',
  },
  alternates: {
    canonical: baseUrl,
  },
  category: 'Developer Tools',
  classification: 'Web Application',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': siteName,
    'mobile-web-app-capable': 'yes',
    'theme-color': '#6366f1',
    'color-scheme': 'dark light',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container" style={{ minHeight: '80vh', padding: '40px 20px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

