import '../styles/main.scss';

import { Header } from '@components';
import { netflixSans } from '@utils/fonts';
import { ViewPortProvider } from '@utils/ViewportProvider';

export const metadata = {
	title: 'Netflix Clone',
	description: 'Netflix clone built with Next.js 13'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={netflixSans.className}
		>
			<body>
				<ViewPortProvider>
					<Header />
					{children}
				</ViewPortProvider>
			</body>
		</html>
	);
}
