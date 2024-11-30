import type { CollectionConfig } from 'payload'

export const Tours: CollectionConfig = {
  slug: 'tours',
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'customizable', type: 'checkbox', defaultValue: true },
    { name: 'summary', type: 'textarea' },
    { name: 'description', type: 'richText' },
    {
      name: 'themes',
      type: 'relationship',
      relationTo: 'tour-themes',
      hasMany: true,
      required: true,
      admin: {
        allowCreate: true,
      },
    },
    {
      name: 'locations',
      type: 'relationship',
      relationTo: 'locations',
      hasMany: true,
      required: true,
      admin: {
        allowCreate: true,
      },
    },
    { name: 'duration_nights', type: 'number', required: true },
    { name: 'visa_included', type: 'checkbox' },
    { name: 'visa_price', type: 'number' },
    { 
      name: 'currency', 
      type: 'select', 
      options: [
        { label: 'US Dollar', value: 'USD' },
        { label: 'Euro', value: 'EUR' },
        { label: 'British Pound', value: 'GBP' },
        { label: 'Sri Lankan Rupee', value: 'LKR' }
      ], 
      defaultValue: 'LKR' 
    },
    { name: 'base_price_child', type: 'number', required: true },
    { name: 'base_price_adult', type: 'number', required: true },
    { name: 'price_range', type: 'text' },
    {
      name: 'availability_start',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'monthOnly',
        },
      },
    },
    {
      name: 'availability_end',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'monthOnly',
        },
      },
    },
    { name: 'flight_included', type: 'checkbox', defaultValue: true },
    {
      name: 'tour-highlights',
      type: 'relationship',
      relationTo: 'tour-highlights',
      hasMany: true,
      admin: {
        allowCreate: true,
      },
    },
  ],
  admin: {
    useAsTitle: 'name',
  },
}

export default Tours
