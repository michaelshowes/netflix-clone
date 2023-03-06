// Row Component

import scss from './row.module.scss';
import { Media } from '../../../types';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Link from 'next/link';
import { MediaCardGroup } from '@components';

type RowProps = {
	title: string;
	category: Media[];
	url: string;
};

export default function Row({ title, category: movies, url }: RowProps) {
	return (
		<section className={scss.row}>
			<h2>
				<Link href={url}>{title}</Link>
			</h2>
			{/* <BsChevronLeft className={scss.left} />
			<BsChevronRight className={scss.right} /> */}
			<ul className={scss.movies}>
				{movies.map((movie) => (
					<li
						key={movie.id}
						className={scss.movie}
					>
						<MediaCardGroup movie={movie} />
					</li>
				))}
			</ul>
		</section>
	);
}
