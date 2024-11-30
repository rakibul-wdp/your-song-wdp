import type { CollectionConfig } from 'payload'

export const TourHighlights: CollectionConfig = {
  slug: 'tour-highlights',
  fields: [
    { name: 'name', type: 'text', required: true }, // e.g., "Round trip flight"
    { name: 'description', type: 'textarea' }, // Optional detailed explanation
    {
      name: 'icon',
      type: 'text',
    }
  ],
  admin: {
    useAsTitle: 'name'
  }
}

export default TourHighlights
