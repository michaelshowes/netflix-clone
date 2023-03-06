import { useEffect, useState } from 'react';

export function useRandomNumber(count: number) {
	const [randomNumber, setRandomNumber] = useState(
		Math.floor(Math.random() * count)
	);

	// This will run one time after the component mounts
	useEffect(() => {
		// callback function to call when event triggers
		const onPageLoad = () => {
			console.log('page loaded');
			setRandomNumber(Math.floor(Math.random() * count));
		};

		// Check if the page has already loaded
		if (document.readyState === 'complete') {
			onPageLoad();
		} else {
			window.addEventListener('load', onPageLoad, false);
			// Remove the event listener when component unmounts
			return () => window.removeEventListener('load', onPageLoad);
		}
	}, [count]);

	return randomNumber;
}
