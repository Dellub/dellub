module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt'],
    // locales: ['pt', 'en', 'es'],
    defaultLocale: 'pt',
    domains: [
      {
        domain: 'https://dellub.com/pt',
        defaultLocale: 'pt',
      },
      // {
      //   domain: 'https://dellub.com/en',
      //   defaultLocale: 'en',
      // },
      // {
      //   domain: 'https://dellub.com/es',
      //   defaultLocale: 'es',
      // },
    ],
  },
}
