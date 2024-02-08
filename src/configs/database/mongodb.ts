export default () => ({
  name: process.env.DATABASE_NAME || 'base-app-nestjs',
  uri: process.env.MONGODB_URI || 'mongodb://localhost:27017',
})
