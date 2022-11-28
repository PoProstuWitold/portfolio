import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
	siteMetadata: {
		title: 'Witold Zawada',
		siteUrl: `https://www.witoldzawada.dev`,
	},
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-pnpm',
		'gatsby-plugin-postcss',
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`
	]
}

export default config
