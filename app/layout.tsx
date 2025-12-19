import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Best Online Cron Generator | Create & Validate Cron Expressions',
  description: 'Generate and validate cron expressions easily. Build cron schedules with a visual builder and see descriptions in plain English. Secure, client-side processing.',
  keywords: 'cron generator, cron expression, cron validator, cron builder, schedule generator, cron job, crontab',
  openGraph: {
    title: 'Best Online Cron Generator',
    description: 'Generate and validate cron expressions easily.',
    type: 'website',
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

