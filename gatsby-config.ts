import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
	siteMetadata: {
		title: 'Witold Zawada',
		description: 'Developer portfolio of Witold Zawada (PoProstuWitold)',
		siteUrl: `https://www.witoldzawada.dev`,
	},
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-pnpm',
		'gatsby-plugin-postcss',
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Witold Zawada's Portfolio`,
				short_name: `Portfolio`,
				description: `Developer portfolio of Witold Zawada (PoProstuWitold)`,
				lang: `en`,
				display: `standalone`,
				icon: `src/images/icon.png`
			}
		}
	]
}

export default config
