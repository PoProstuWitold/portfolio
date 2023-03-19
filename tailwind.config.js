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
                    "primary": "#66cc8a",
                    "secondary": "#377cfb",
                    "accent": "#ea5234", 
                    "neutral": "#333c4d",
                    "base-100": "#ffffff", 
                    "info": "#1c92f2",  
                    "success": "#009485", 
                    "warning": "#ff9900",   
                    "error": "#ff5724",
                }
            },
            {
                dark: {
                    "primary": "#66cc8a",
                    "secondary": "#377cfb",
                    "accent": "#ea5234", 
                    "neutral": "#2a2e37",
                    "base-100": "#3b424e", 
                    "info": "#1c92f2",  
                    "success": "#009485", 
                    "warning": "#ff9900",   
                    "error": "#ff5724",
                }
            },
			'synthwave',
			'halloween',
			'forest',
			'winter'
		]
	}
}
