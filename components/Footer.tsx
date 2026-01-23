import Link from 'next/link';
import { Clock } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    const productLinks = [
        { href: '/', label: 'Generator' },
        { href: '/features', label: 'Features' },
        { href: '/guide', label: 'User Guide' },
        { href: '/examples', label: 'Examples' },
        { href: '/reference', label: 'Syntax Reference' },
    ];

    const resourceLinks = [
        { href: '/guide', label: 'Documentation' },
        { href: '/examples', label: 'Cron Examples' },
        { href: '/reference', label: 'Cron Syntax' },
    ];

    const legalLinks = [
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms of Service' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brandSection}>
                        <Link href="/" className={styles.logo} aria-label="Cron Generator Online - Home">
                            <Clock size={24} aria-hidden="true" />
                            <span>Cron Pro</span>
                        </Link>
                        <p className={styles.description}>
                            Generate and validate cron expressions instantly. Free, fast, and secure.
                        </p>
                    </div>

                    <nav className={styles.linksSection} aria-labelledby="product-links">
                        <h4 id="product-links" className={styles.linksTitle}>Product</h4>
                        <ul className={styles.linksList} role="list">
                            {productLinks.map((link) => (
                                <li key={link.href + link.label} role="listitem">
                                    <Link href={link.href} className={styles.link} aria-label={`Navigate to ${link.label}`}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav className={styles.linksSection} aria-labelledby="resources-links">
                        <h4 id="resources-links" className={styles.linksTitle}>Resources</h4>
                        <ul className={styles.linksList} role="list">
                            {resourceLinks.map((link) => (
                                <li key={link.href + link.label} role="listitem">
                                    <Link href={link.href} className={styles.link} aria-label={`Navigate to ${link.label}`}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav className={styles.linksSection} aria-labelledby="legal-links">
                        <h4 id="legal-links" className={styles.linksTitle}>Legal</h4>
                        <ul className={styles.linksList} role="list">
                            {legalLinks.map((link) => (
                                <li key={link.href} role="listitem">
                                    <Link href={link.href} className={styles.link} aria-label={`Navigate to ${link.label}`}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Cron Pro. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
