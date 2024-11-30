import type { Block } from 'payload'

export const FlighEventBlock: Block = {
  slug: 'flight-event', // required
  fields: [
    {
      name: 'operator',
      type: 'select',
      options: [
        { value: 'srilankan_airlines', label: 'Sri Lankan Airlines' },
        { value: 'cinnamon_air', label: 'Cinnamon Air' },
        { value: 'fitsair', label: 'FitsAir' },
        { value: 'helitours', label: 'Helitours' },
        { value: 'iraqi_airways', label: 'Iraqi Airways' },
        { value: 'kuwait_airways', label: 'Kuwait Airways' },
        { value: 'qatar_airways', label: 'Qatar Airways' },
        { value: 'saudi_arabian_airlines', label: 'Saudi Arabian Airlines' },
        { value: 'singapore_airlines', label: 'Singapore Airlines' },
        { value: 'turkish_airlines', label: 'Turkish Airlines' },
      ],
      required: true,
    },
    {
      name: 'departure_time',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'timeOnly',
        },
      },
    },
    {
      name: 'arrival_time',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'timeOnly',
        },
      },
    },
    {
      name: 'next_day_arrival',
      type: 'checkbox',
      defaultValue: false,
    },
    { name: 'check_baggage_allowance', type: 'number' },
    { name: 'hand_baggage_allowance', type: 'number' },
  ],
}
