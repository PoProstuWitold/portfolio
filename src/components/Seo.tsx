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
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
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
