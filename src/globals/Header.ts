import type { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'links',
      type: 'array',
      fields: [
        {
          type: 'group',
          fields: [
            {
              type: 'group',
              fields: [
                {
                  name: 'mainLinkText',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'mainLinkURL',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'subLinks',
              type: 'array',
              fields: [
                {
                  type: 'group',
                  fields: [
                    {
                      name: 'subLinkText',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'subLinkURL',
                      type: 'text',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      fields: [
        {
          name: 'ctaText',
          type: 'text',
          required: true,
        },
        {
          name: 'ctaURL',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
