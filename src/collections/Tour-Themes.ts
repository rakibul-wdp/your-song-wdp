import type { CollectionConfig } from 'payload'

export const TourThemes: CollectionConfig = {
  slug: 'tour-themes',
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'description', type: 'textarea' }
  ],
  admin: {
    useAsTitle: 'name'
  }
}

export default TourThemes
