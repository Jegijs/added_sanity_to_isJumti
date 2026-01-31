import { MetadataRoute } from 'next'

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

    // 2. Dinamiskās lapas (Blogs no Sanity vai CMS)
    // Šo daļu atkomentē, kad tev būs reāli raksti datubāzē
    /*
    const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current, _updatedAt }`)
    
    const blogRoutes = posts.map((post: any) => ({
      url: `${BASE_URL}/padomi/${post.slug}`,
      lastModified: new Date(post._updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
    */

    // Pagaidām atgriežam tikai statiskās (kamēr nav CMS datu)
    // Kad būs blogRoutes, tad: return [...staticRoutes, ...blogRoutes]
    return [...staticRoutes]
}