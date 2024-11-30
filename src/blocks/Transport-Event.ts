import type { Block } from 'payload'

export const TransportEventBlock: Block = {
  slug: 'transport-event', // required
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'transport',
      type: 'relationship',
      relationTo: ['transports'],
      required: true,
    },
    {
      name: 'time',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'timeOnly',
        },
      },
    },
    {
      name: 'changeable',
      type: 'checkbox', // Is this event customizable?
      defaultValue: false,
    },
    {
      name: 'alternatives',
      type: 'array',
      fields: [
        {
          name: 'relation',
          type: 'relationship',
          relationTo: ['transports'], // Alternative entities
        },
        { name: 'additional_cost', type: 'number', defaultValue: 0 }, // Cost adjustment
      ],
    },
  ],
}
