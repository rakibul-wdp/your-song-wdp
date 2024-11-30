import type { CollectionConfig } from 'payload'

export const Transports: CollectionConfig = {
  slug: 'transports',
  fields: [
    { name: 'name', type: 'text', required: true, index: true },
    { 
      name: 'type', 
      type: 'select', 
      options: [
        { label: 'Luxury', value: 'luxury' },
        { label: 'Cheap', value: 'cheap' },
        { label: 'Public Transport', value: 'public_transport' }
      ] 
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

export default Transports
