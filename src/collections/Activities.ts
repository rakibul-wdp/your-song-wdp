import type { CollectionConfig } from 'payload'

export const Activities: CollectionConfig = {
  slug: 'activities',
  fields: [
    { name: 'name', type: 'text', required: true, index: true },
    { name: 'summary', type: 'textarea' },
    { name: 'description', type: 'richText' },
    { name: 'location', type: 'relationship', relationTo: 'locations' },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Adventure', value: 'adventure' },
        { label: 'Fun', value: 'fun' },
        { label: 'Romantic', value: 'romantic' },
      ],
    },
    { name: 'duration', type: 'number', label: 'Duration (Hrs)' },
    {
      name: 'suitable_for',
      type: 'select',
      options: [
        { label: 'Kids', value: 'kids' },
        { label: 'Adults', value: 'adults' },
        { label: 'Elders', value: 'elders' },
        { label: 'Infants', value: 'infants' },
      ],
      hasMany: true,
    },
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

export default Activities
