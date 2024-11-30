import type { CollectionConfig } from 'payload'

export const Hotels: CollectionConfig = {
  slug: 'hotels',
  fields: [
    { name: 'name', type: 'text', required: true, index: true, label: 'Hotel Name' },
    { name: 'location', type: 'relationship', relationTo: 'locations', label: 'Location' },
    { name: 'address', type: 'text', label: 'Address' },
    { name: 'description', type: 'textarea', label: 'Description' },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: '2-star', value: '2-star' },
        { label: '3-star', value: '3-star' },
        { label: '4-star', value: '4-star' },
        { label: '5-star', value: '5-star' },
      ],
      label: 'Category',
    },
    {
      name: 'facilities',
      type: 'relationship',
      relationTo: ['hotel-facilities'],
      hasMany: true,
      label: 'Facilities',
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      label: 'Media',
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      label: 'Thumbnail',
    },
  ],
  admin: {
    useAsTitle: 'name',
  },
}

export default Hotels
