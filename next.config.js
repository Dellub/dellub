module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt', 'en', 'es'],
    defaultLocale: 'pt',
    domains: [
      {
        domain: '/pt',
        defaultLocale: 'pt',
      },
      {
        domain: '/en',
        defaultLocale: 'en',
      },
      {
        domain: '/es',
        defaultLocale: 'es',
      },
    ],
  },
}
