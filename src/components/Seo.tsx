import React from 'react'
import Head from 'next/head'

import config from '../config'

interface SeoProps {
    title?: string
    description?: string
}

export const SEO: React.FC<SeoProps> = ({ description, title }) => {

	return (
		<Head>
            <title>{`${title}`}</title>
            <meta name="description" content={description ? description : config.description} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={config.description} />
            <meta property="og:site_name" content={config.title} />
            <meta property="github:card" content="summary" />
            <meta property="github:title" content={config.social.github.title} />
            <meta property="github:creator" content={config.social.github.link} />
        </Head>
	)
}
