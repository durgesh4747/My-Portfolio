import { type SchemaTypeDefinition } from 'sanity'
import { VaultSchema } from '../lib/vaultSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [VaultSchema],
}
