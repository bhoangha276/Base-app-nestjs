export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  localhost: '127.0.0.1',
})
