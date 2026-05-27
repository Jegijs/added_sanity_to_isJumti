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
      description: 'e.g., Clay Tiles, Metal Roofing, Bitumen Shingles',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug / URL Path',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Photo Gallery',
      type: 'array',
      description: 'Upload your 20+ images here. Drag and drop them to rearrange the order.',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true, // Let's you crop/focus on images
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Important for SEO and accessibility describing the picture.',
            },
          ],
        },
      ],
    }),
  ],
})