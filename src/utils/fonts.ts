import localFont from 'next/font/local';

export const netflixSans = localFont({
	src: [
		{
			path: '../../public/fonts/NetflixSans-Regular.woff2',
			weight: '400',
			style: 'normal'
		},
		{
			path: '../../public/fonts/NetflixSans-Medium.woff2',
			weight: '500',
			style: 'normal'
		},
		{
			path: '../../public/fonts/NetflixSans-Light.woff2',
			weight: '300',
			style: 'normal'
		},
		{
			path: '../../public/fonts/NetflixSans-Bold.woff2',
			weight: '700',
			style: 'normal'
		}
	],
	display: 'swap',
	variable: '--netflix-sans'
});
