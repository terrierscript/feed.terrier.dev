const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  },
  async redirects() {
    return [
      {
        source: '/blog/:year/:slug', // automatically becomes /docs/with-basePath
        destination: 'https://blog.terrier.dev/blog/:year/:slug', // automatically becomes /docs/another
        permanent: false,
      }
    ]
  },
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN
  }
})