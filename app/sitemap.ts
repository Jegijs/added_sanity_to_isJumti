import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/site-content'

// Ja izmanto Sanity (iekopē šo, kad būs gatavs CMS)
// import { client } from "@/lib/sanity" 

const BASE_URL = 'https://www.isjumti.lv'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    // 1. Statiskās lapas (Tās, kas nemainās)
    const staticRoutes = [
        '',
        '/pakalpojumi',
        '/galerija',
        '/kontakti',
        '/izmaksas',
        '/padomi', // Bloga sākums
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const blogRoutes = blogPosts.map((post) => ({
        url: `${BASE_URL}/padomi/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...staticRoutes, ...blogRoutes]
}
