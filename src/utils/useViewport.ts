import { useContext } from 'react';
import { ViewportContext } from '@utils/ViewportProvider';

export const useViewport = () => {
	const width = useContext(ViewportContext);
	return width;
};
