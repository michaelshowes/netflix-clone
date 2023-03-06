// TeaserCard Component

import scss from './teaserCard.module.scss';
import { Media } from '../../../types';
import Image from 'next/image';
import { baseUrl } from '@constants/movie';

type TeaserCardProps = {
	movie: Media;
};

export default function TeaserCard({ movie }: TeaserCardProps) {
	return (
		<div className={scss.teaserCard}>
			<div className={scss.inner}>
				<Image
					src={`${baseUrl}${movie.backdrop_path}`}
					width={1920}
					height={1080}
					alt={movie.name || movie.title}
				/>
				<h3>{movie.name || movie.title}</h3>
			</div>
		</div>
	);
}
