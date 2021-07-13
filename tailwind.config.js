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
		flex: {
			auto: 'auto',
		},
    typography: (theme) => ({}),
		screens: {
			sm: '540px',
			md: '720px',
			lg: '960px',
			xl: '1440px',
		},
		extend: {
			fontFamily: {
				sans: ['Heebo', 'sans-serif'],
				serif: ['Heebo', 'serif'],
			},
			fontSize: {
				text: {
					'3xl': '2rem',
					'4xl': '2.5rem',
					'5xl': '3.5rem',
					'8xl': '6.5rem',
				}
			},
			lineHeight: {
	
			},
			colors: {
				gray: {
					900: '#3B3F49',
					800: '#474F63',
					700: '#6E778D',
					600: '#B3B9C9',
					500: '#C6CAD6',
					400: '#E2E5ED',
				},
				pink: {
					900: '#E54181',
				},
				primary: '#4B74EB',
			},
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
