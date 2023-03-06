// MediaCard Component

import scss from './mediaCard.module.scss';
import { Media } from '../../../types';
import Image from 'next/image';
import { baseUrl } from '@constants/movie';
import Link from 'next/link';
import { IoPlaySharp } from 'react-icons/io5';
import { FiCheck } from 'react-icons/fi';
import { HiPlusSmall } from 'react-icons/hi2';
import { BsHandThumbsUp } from 'react-icons/bs';
import { TeaserCard } from '@components';

type MediaCardProps = {
	movie: Media;
};

export default function MediaCard({ movie }: MediaCardProps) {
	return (
		<article className={scss.mediaCard}>
			<div className={scss.inner}>
				<div className={scss.image}>
					<Image
						src={`${baseUrl}${movie.backdrop_path}`}
						width={1920}
						height={1080}
						alt={movie.name || movie.title}
					/>
					<h3>{movie.name || movie.title}</h3>
				</div>
				<div className={scss.details}>
					<div className={scss.buttonControls}>
						<Link
							className={scss.play}
							href={'#'}
						>
							<IoPlaySharp />
						</Link>
						<button className={scss.addRemove}>
							<HiPlusSmall />
							{/* <FiCheck /> */}
						</button>
						<button className={scss.like}>
							<BsHandThumbsUp />
						</button>
					</div>
					<div className={scss.metadata}>
						{movie.media_type === 'tv' ? (
							<>
								<span className={scss.rating}>TV-14</span>
								<span className={scss.episodeCount}>10 episodes</span>
							</>
						) : (
							<>
								<span className={scss.rating}>PG-13</span>
								<span className={scss.duration}>2h 12m</span>
							</>
						)}
						<span className={scss.hd}>HD</span>
					</div>
					<div className={scss.tags}>
						<span>Action</span>
						<span>Comedy</span>
						<span>Drama</span>
					</div>
				</div>
			</div>
		</article>
	);
}
