const withTypescript = require('@zeit/next-typescript')
module.exports = (phase, { defaultConfig }) => {
  return withTypescript({
    webpack: config =>
      Object.assign(config, {
        module: 'esnext',
        target: 'electron-renderer',
      }),
    exportPathMap: () => ({
      '/': { page: '/App' },
    }),
  })
}
