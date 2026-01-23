import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.crongenerator.online';
    
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/', '/private/'],
                crawlDelay: 0,
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/api/', '/_next/', '/private/'],
                crawlDelay: 0,
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/api/', '/_next/', '/private/'],
                crawlDelay: 1,
            },
            {
                userAgent: 'Slurp',
                allow: '/',
                disallow: ['/api/', '/_next/', '/private/'],
                crawlDelay: 1,
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}

