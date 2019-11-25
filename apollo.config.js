module.exports = {
  client: {
    includes: [
      './pages/**/*.tsx',
      './components/**/*.tsx'
    ],
    service: {
      name: 'datocms',
      localSchemaFile: './schema.json'
    }
  }
};