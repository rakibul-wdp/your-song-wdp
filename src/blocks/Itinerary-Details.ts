import { FlighEventBlock } from './Flight-Event';
import type { Block } from 'payload'
import { HotelEventBlock } from './Hotel-Event'
import { ActivityEventBlock } from './Activity-Event'
import { TransportEventBlock } from './Transport-Event'

export const ItineraryDetailsBlock: Block = {
  slug: 'itinerary-details', // required
  fields: [
    {
      name: 'day',
      type: 'select',
      options: [
        { value: '0', label: 'Day 0' },
        { value: '1', label: 'Day 1' },
        { value: '2', label: 'Day 2' },
        { value: '3', label: 'Day 3' },
        { value: '4', label: 'Day 4' },
        { value: '5', label: 'Day 5' },
        { value: '6', label: 'Day 6' },
        { value: '7', label: 'Day 7' },
        { value: '8', label: 'Day 8' },
        { value: '9', label: 'Day 9' },
        { value: '10', label: 'Day 10' }
      ],
      required: true,
    },
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'events',
      type: 'blocks',
      blocks: [FlighEventBlock, HotelEventBlock, ActivityEventBlock, TransportEventBlock]
    },
  ],
}
