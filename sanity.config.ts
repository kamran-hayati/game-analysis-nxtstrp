import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const config = defineConfig({
  name: 'default',
  title: 'Next Sanity Studio (game analysis)',

  projectId: 'oukgh3p0',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  apiVersion: "v1",
  basePath: "/admin"
})

export default config