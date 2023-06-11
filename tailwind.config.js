/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {}
	},
	plugins: [
        require('@tailwindcss/typography'), 
        require('daisyui')
    ],
	daisyui: {
		themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
		prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    	logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themes: [
			{
                light: {
                    "primary": "#2ecc71",
                    "secondary": "#0450DC",
                    "accent": "#3498db",
                    'neutral' : '#333c4d',
                    'neutral-focus' : '#1f242e',
                    'neutral-content' : '#f9fafb',
                    "base-100": "#e6e6e6",
                    "info": "#2980b9",
                    "success": "#27ae60",
                    "warning": "#f39c12",
                    "error": "#c0392b"
                }
            },
            {
					dark: {
						"primary": "#2ecc71",
						"secondary": "#0450DC",
						"accent": "#3498db",
						"neutral": "#19222d",
						"neutral-focus": "#1c2531",
						"neutral-content": "#B2B9C3",
						"base-100": "#25303d",
						"base-200": "#1e2731",
						"base-300": "#1b222c",
						"base-content": "#AEB5C0",
						"info": "#2980b9",
						"success": "#27ae60",
						"warning": "#f39c12",
						"error": "#c0392b"
					}
            },
			'synthwave',
			'halloween',
			'forest',
			'winter'
		]
	}
}
