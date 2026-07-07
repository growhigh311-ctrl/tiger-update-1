export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api', '/admin', '/_next'],
    },
    sitemap: 'https://tiger365id.website/sitemap.xml',
  };
}