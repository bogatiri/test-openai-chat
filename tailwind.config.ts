/* eslint-disable @typescript-eslint/no-explicit-any */
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
		'./src/**/*.scss'
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			backgroundImage: {
				'radial-gradient': 'radial-gradient(circle, rgba(28, 100, 242, 0.38), rgba(0, 0, 0, 0))',
				grid: 'linear-gradient(to right, rgba(0, 0, 255, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 255, 0.2) 1px, transparent 1px)'
			},
			backgroundSize: {
				'grid-size': '50px 50px'
			},
			colors: {
				'card-background': 'rgba(18, 24, 37, 1)',
				'gradient-color-1': 'rgba(28, 100, 242, 0.38)',
				'gradient-color-2': 'rgba(0, 0, 0, 0)',
				'chat': 'rgba(18, 24, 37, 1)',
				'avatar': 'rgba(17, 36, 65, 1)',
				border: {
					DEFAULT: 'hsl(var(--border))',
					header: 'rgba(34, 43, 68, 0.35)',
					form: 'linear-gradient(to right, rgba(28, 100, 242, 1), rgba(28, 100, 242, 0) 1px' 
				},
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				footer: 'rgba(34,43,68,1)',
				header: 'rgba(18, 24, 37, 0.4)',
				logo: 'rgba(28, 100, 242, 1)',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontSize: {
				md: '1rem'
			},
			keyframes: {
				'slideInLeft': {
          '0%': {
            transform: 'translateX(20px)',
            opacity: '0.5',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
				'slideInRight': {
          '0%': {
            transform: 'translateX(-20px)',
            opacity: '0.5',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'menuDown':{
					from: {height: '0', opacity: '0'},
					to: {opacity:'1'}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slideInLeft': 'slideInLeft 0.5s ease-out',
				'slideInRight': 'slideInRight 0.5s ease-out',
				'menuDown': 'menuDown 0.2s ease-out',
			}
		},
		screens: {
			sm: '576px',
			'sm-max': { max: '576px' },
			md: '768px',
			'md-max': { max: '768px' },
			lg: '992px',
			'lg-max': { max: '992px' },
			xl: '1200px',
			'xl-max': { max: '1200px' },
			'2xl': '1320px',
			'2xl-max': { max: '1320px' },
			'3xl': '1600px',
			'3xl-max': { max: '1600px' },
			'4xl': '1850px',
			'4xl-max': { max: '1850px' }
		},
	},
	plugins: [
		function ({ addUtilities }: { addUtilities: any }) {
			addUtilities({
				'.custom-scrollbar::-webkit-scrollbar': {
					width: '6px',
					height: '8px'
				},
				'.custom-scrollbar::-webkit-scrollbar-thumb': {
					backgroundColor: '#1c1c1c',
					width: '8px',
					borderRadius: '10px',
					opacity: '0'
				},
				'.custom-scrollbar::-webkit-scrollbar-thumb:hover': {
					backgroundColor: '#383838',
					width: '8px',
					opacity: '100',
					cursor: 'pointer'
				},
				'.custom-scrollbar::-webkit-scrollbar-track': {
					backgroundColor: 'transition',
					width: '8px',
					opacity: '10',
					borderRadius: '10px',
					marginLeft: '2px'
				}
			})
		},
		require('tailwindcss-animate')
	]
}
