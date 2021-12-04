module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|jpeg)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ]
  },
}