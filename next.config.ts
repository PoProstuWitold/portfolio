import { NextConfig } from 'next'
import withBundleAnalyzer from '@next/bundle-analyzer'

const nextConfig: NextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
    productionBrowserSourceMaps: true,
}

export default withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})(nextConfig)
