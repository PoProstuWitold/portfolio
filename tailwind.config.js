/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {}
	},
	plugins: [
        require('@tailwindcss/typography'), 
        require('daisyui'),
        require('@tailwindcss/line-clamp')
    ],
	daisyui: {
		styled: true,
		themes: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		themes: [
			{
                light: {
                    "primary": "#2ecc71",
                    "secondary": "#377DFB",
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
                    "secondary": "#377DFB",
                    "accent": "#3498db",
                    "neutral": "#1f2229",
                    "base-100": "#2A303C",
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
