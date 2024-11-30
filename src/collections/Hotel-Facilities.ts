import type { CollectionConfig } from 'payload'

export const HotelFacilities: CollectionConfig = {
  slug: 'hotel-facilities',
  fields: [
    { name: 'name', type: 'text', required: true },
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

export default HotelFacilities
