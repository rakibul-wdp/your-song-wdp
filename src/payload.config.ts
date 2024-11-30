// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Locations } from './collections/Locations'
import Hotels from './collections/Hotels'
import TourHighlights from './collections/Tour-Highlights'
import Tours from './collections/Tours'
import Activities from './collections/Activities'
import Transports from './collections/Transports'
import TourItineraries from './collections/Tour-Itineraries'
import TourThemes from './collections/Tour-Themes'
import HotelFacilities from './collections/Hotel-Facilities'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Locations,
    Hotels,
    TourHighlights,
    TourThemes,
    Tours,
    Activities,
    Transports,
    TourItineraries,
    HotelFacilities
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
