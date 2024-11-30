import type { Block } from 'payload'

export const HotelEventBlock: Block = {
  slug: 'hotel-event', // required
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'hotel',
      type: 'relationship',
      relationTo: ['hotels'],
      required: true,
      label: 'Hotel',
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Check-in', value: 'checkin' },
        { label: 'Check-out', value: 'checkout' },
      ],
      label: 'Type',
    },
    {
      name: 'time',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'timeOnly',
        },
      },
      label: 'Time',
    },
    {
      name: 'changeable',
      type: 'checkbox', // Is this event customizable?
      label: 'Changeable',
      defaultValue: false,
    },
    {
      name: 'alternatives',
      type: 'array',
      fields: [
        {
          name: 'relation',
          type: 'relationship',
          relationTo: ['hotels'], // Alternative entities
        },
        { name: 'additional_cost', type: 'number', defaultValue: 0 }, // Cost adjustment
      ],
    },
  ],
}
