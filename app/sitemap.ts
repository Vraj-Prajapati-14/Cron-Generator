import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.crongenerator.online';
    const now = new Date();
    
    // Set lastModified dates based on content update frequency
    const homeLastModified = new Date('2024-12-01');
    const mainPagesLastModified = new Date('2024-11-15');
    const staticPagesLastModified = new Date('2024-10-01');

    return [
        {
            url: baseUrl,
            lastModified: homeLastModified,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/guide`,
            lastModified: mainPagesLastModified,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/examples`,
            lastModified: mainPagesLastModified,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/features`,
            lastModified: mainPagesLastModified,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/reference`,
            lastModified: mainPagesLastModified,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: staticPagesLastModified,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: staticPagesLastModified,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: staticPagesLastModified,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];
}
