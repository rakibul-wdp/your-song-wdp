import { ItineraryDetailsBlock } from '@/blocks/Itinerary-Details'
import type { CollectionConfig } from 'payload'

export const TourItineraries: CollectionConfig = {
  slug: 'tour-itineraries',
  fields: [
    { name: 'tour', type: 'relationship', relationTo: 'tours', required: true },
    { name: 'itinerary', type: 'blocks', blocks: [ItineraryDetailsBlock] },
  ],
  admin: {
    useAsTitle: 'tour',
  }
}

export default TourItineraries
