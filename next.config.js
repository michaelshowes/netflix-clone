/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true
	},
	// Enables support for importing SVGs as components
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack']
		});
		return config;
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				hostname: 'localhost'
			}
		],
		domains: []
	},
	sassOptions: {
		prependData: `
			@use "~@styles/functions" as *;
			@use "~@styles/mixins" as *;
			@use "~@styles/global/colors.scss" as *;
			@use "~@styles/global/settings.scss" as *;
		`
	}
};

module.exports = nextConfig;
