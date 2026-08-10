import { defineField, defineType } from 'sanity'

export const roofType = defineType({
  name: 'roofType',
  title: 'Roof Type Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Roof Type Name',
      type: 'string',
      description: 'e.g., Privātmājas, Daudzdzīvokļu nami, Rūpnieciskie objekti',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug / URL Path',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    // --- NEW NESTED STRUCTURE ---
    defineField({
      name: 'projects',
      title: 'Ēku / Objektu Projekti',
      type: 'array',
      description: 'Grupejiet attēlus pa konkrētām ēkām / objektiem.',
      of: [
        {
          type: 'object',
          name: 'buildingProject',
          title: 'Ēkas Projekts',
          fields: [
            defineField({
              name: 'title',
              title: 'Objekta nosaukums / Adrese',
              type: 'string',
              description: 'piem., Jumta montāža Mārupē',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'slug',
              title: 'Projekta Slug',
              type: 'slug',
              options: {
                source: (doc, options) => {
                  const parent = options.parent as { title?: string };
                  return parent?.title || '';
                },
                maxLength: 96,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'gallery',
              title: 'Objekta Fotoattēli (Karuseļa bildes)',
              type: 'array',
              validation: (Rule) => Rule.required().min(1),
              of: [
                {
                  type: 'image',
                  options: { hotspot: true },
                  fields: [
                    {
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative Text',
                    },
                  ],
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'gallery.0',
              images: 'gallery',
            },
            prepare({ title, media, images }) {
              const count = images ? images.length : 0;
              return {
                title: title || 'Beznosaukuma objekts',
                subtitle: `Kopā attēli: ${count}`,
                media,
              };
            },
          },
        },
      ],
    }),

    // --- OLD FIELD (Kept to prevent "Unknown field" warning on existing data) ---
    defineField({
      name: 'images',
      title: 'Vecās Bildes (Neizmantotās / Arhīvs)',
      type: 'array',
      description: 'Šeit ir jūsu iepriekš augšupielādētās bildes.',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    }),
  ],
})