// Hero Component

'use client';

import scss from './hero.module.scss';
import { Media } from '../../../types';
import Image from 'next/image';
import { baseUrl } from '@constants/movie';
import { useViewport } from '@utils/useViewport';

export default function Hero({ category: media }: { category: Media }) {
	const width = useViewport();

	console.log(width);

	return (
		<section className={scss.hero}>
			<div className={scss.image}>
				<Image
					src={
						width! > 768
							? `${baseUrl}${media.backdrop_path}`
							: `${baseUrl}${media.poster_path}`
					}
					width={1920}
					height={width! > 768 ? 1080 : 2880}
					alt='Media backdrop'
				/>
			</div>

			<div className={scss.content}>
				<h1>{media.title}</h1>
				<p>{media.overview}</p>

				<div className={scss.buttons}>
					<button className={scss.play}>Play</button>
					<button className={scss.info}>More Info</button>
				</div>
			</div>
		</section>
	);
}
