// Hero Component

'use client';

import scss from './hero.module.scss';
import { Media } from '../../../types';
import Image from 'next/image';
import { baseUrl } from '@constants/movie';
import { useViewport } from '@utils/useViewport';
import { IoPlaySharp } from 'react-icons/io5';
import { BiInfoCircle } from 'react-icons/bi';

export default function Hero({ category: media }: { category: Media }) {
	const width = useViewport();

	return (
		<section className={scss.hero}>
			<div className={scss.image}>
				<Image
					src={
						width! < 900
							? `${baseUrl}${media.poster_path}`
							: `${baseUrl}${media.backdrop_path}`
					}
					width={1920}
					height={width! > 900 ? 1080 : 2880}
					alt='Media backdrop'
				/>
			</div>

			<div className={scss.content}>
				<h1>{media.title}</h1>
				<p>{media.overview}</p>

				<div className={scss.buttons}>
					<button className={scss.play}>
						<IoPlaySharp />
						<span>Play</span>
					</button>
					<button className={scss.info}>
						<BiInfoCircle />
						<span>More Info</span>
					</button>
				</div>
			</div>
		</section>
	);
}
