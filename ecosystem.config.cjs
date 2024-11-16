module.exports = {
    apps: [
      {
        name: 'MyCash',
        port: '3000',
        instances: '1',
        script: './.output/server/index.mjs'
      }
    ]
  }