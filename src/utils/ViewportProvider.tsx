'use client';

import { createContext, useState, useEffect } from 'react';

export const ViewportContext = createContext<number | null>(null);

export function ViewPortProvider({ children }: { children: React.ReactNode }) {
	const [width, setWidth] = useState(
		typeof window !== 'undefined' ? window.innerWidth : null
	);

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [window.innerWidth]);

	return (
		<ViewportContext.Provider value={width}>
			{children}
		</ViewportContext.Provider>
	);
}
