import withBundleAnalyzer from '@next/bundle-analyzer'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	experimental: {
		optimizePackageImports: ['react-icons', 'motion', '@headlessui/react'],
		useTypeScriptCli: true
	}
}

export default withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true'
})(nextConfig)
