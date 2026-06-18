import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  const baseUrl = 'https://www.crongenerator.online';
  
  return {
    name: 'Cron Generator Online - Free Cron Expression Builder',
    short_name: 'Cron Generator',
    description: 'Free online cron generator and validator. Create cron expressions with our visual builder, validate cron syntax, and get plain English descriptions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#6366f1',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    categories: ['developer', 'productivity', 'utilities'],
    lang: 'en',
    dir: 'ltr',
    scope: '/',
    id: 'cron-generator-online',
    shortcuts: [
      {
        name: 'Generate Cron',
        short_name: 'Generate',
        description: 'Quickly generate a cron expression',
        url: '/',
        icons: [{ src: '/icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'Examples',
        short_name: 'Examples',
        description: 'View cron expression examples',
        url: '/examples',
        icons: [{ src: '/icon-192.png', sizes: '192x192' }],
      },
    ],
  };
}
