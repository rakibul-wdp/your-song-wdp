import type { Block } from 'payload'

export const ActivityEventBlock: Block = {
  slug: 'activity-event', // required
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
      name: 'activity',
      type: 'relationship',
      relationTo: ['activities'],
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
        name: 'duration',
        type: 'number',
        label: 'Duration (Hrs)'
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
          relationTo: ['activities'], // Alternative entities
        },
        { name: 'additional_cost', type: 'number', defaultValue: 0 }, // Cost adjustment
      ],
    },
  ],
}
