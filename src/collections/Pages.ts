import { CardGrid } from '@/blocks/CardGrid'
import { Hero } from '@/blocks/Hero'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            // Auto-generate a URL-friendly slug from the title if left blank
            const source = value || data?.title
            if (typeof source === 'string') {
              return source
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '')
            }
            return source === '/home' ? '/' : value
          },
        ],
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [Hero, CardGrid],
    },
  ],
}
