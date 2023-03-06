// MediaCardGroup Component

import scss from './mediaCardGroup.module.scss';
import { MediaCard, TeaserCard } from '@components';
import { Media } from '../../../types';

type MediaCardGroupProps = {
	movie: Media;
};

export default function MediaCardGroup({ movie }: MediaCardGroupProps) {
	return (
		<article className={scss.mediaCardGroup}>
			<div className={scss.inner}>
				<TeaserCard movie={movie} />
				<div className={scss.mediaCardContainer}>
					<MediaCard movie={movie} />
				</div>
			</div>
		</article>
	);
}
