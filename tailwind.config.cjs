/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'cards': 'repeat(auto-fit, minmax(18rem, 1fr))',
			},
			keyframes: {
				btn_anim1: {
				  '0%': { left: '-100%' },
				  '50%, 100%': { left: '100%' },
				},
				btn_anim2: {
					'0%': { top: '-100%' },
					'50%, 100%': { top: '100%' },
				},
				btn_anim3: {
					'0%': { right: '-100%' },
					'50%, 100%': { right: '100%' },
				},
				btn_anim4: {
					'0%': { bottom: '-100%' },
					'50%, 100%': { bottom: '100%' },
				}
			},
			animation: {
				btn_anim1: 'btn_anim1 1.5s linear infinite',
				btn_anim2: 'btn_anim2 1.5s linear infinite',
				btn_anim3: 'btn_anim3 1.5s linear infinite',
				btn_anim4: 'btn_anim4 1.5s linear infinite',
			}
		},
	},
	plugins: [],
}
