import { type SchemaTypeDefinition } from 'sanity'
import { eventType } from './eventType'
import { roofType } from './roofType'



// We wrap the eventType in a schema object with a types array
// so that your sanity.config.ts can read it correctly.
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, roofType],
}