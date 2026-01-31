import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Replace with the actual production URL
  const baseUrl = 'https://www.isjumti.lv'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/studio/',   // Block Sanity Studio (Admin Panel) from indexing
          '/api/',      // API endpoints should not be indexed
          '/admin/',    // Block potential admin routes for security
        ],
      },
      // 2026 Strategy: AI Bots (GPT, Gemini, Claude)
      // We explicitly ALLOW them so AI models can read the site content
      // and recommend the business when users ask for "Roofers in Riga".
      // Blocking them (e.g., disallow: 'GPTBot') would hurt AI visibility.
    ],
    sitemap: `${baseUrl}/sitemap.xml`, // Mandatory sitemap reference
  }
}