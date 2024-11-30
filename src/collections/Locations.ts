import type { CollectionConfig } from 'payload'

export const Locations: CollectionConfig = {
  slug: 'locations',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { value: 'city', label: 'City' },
        { value: 'country', label: 'Country' },
      ],
      required: true,
    },
    { name: 'parent', type: 'relationship', relationTo: 'locations' },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
    },
  ],
  admin: {
    useAsTitle: 'name',
  },
}

export default Locations
