module.exports = {
	// purge: [],
  // darkMode: false,
	// theme: {
  //   extend: {},
  // },
  // variants: {},
  // plugins: [],
  purge: {
		enabled: true,
    content: ['./src/**/*.tsx'],
  },
  darkMode: 'class',
  variants: {
    typography: ['dark'],
  },
	theme: {
    typography: (theme) => ({}),
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: 'white',
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')]
}
