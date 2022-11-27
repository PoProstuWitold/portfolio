import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
	siteMetadata: {
		siteUrl: `https://www.yourdomain.tld`
	},
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-pnpm',
		'gatsby-plugin-postcss'
	]
}

export default config
