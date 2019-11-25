module.exports = {
  client: {
    includes: ['./pages/**/*.tsx'],
    service: {
      name: 'datocms',
      localSchemaFile: './schema.json'
    }
  }
};