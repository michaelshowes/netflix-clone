import { Hero, Row } from '@components';
import getMediaCategories from '@utils/requests';

export default async function Home() {
	const {
		netflixOriginals,
		trendingNow,
		topRated,
		actionMovies,
		comedyMovies,
		horrorMovies,
		romanceMovies,
		documentaries
	} = await getMediaCategories();

	const randomHeroMedia =
		netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)];

	return (
		<main>
			<Hero category={randomHeroMedia} />
			<Row
				title='Trending Now'
				category={trendingNow}
				url={'#'}
			/>
			<Row
				title='Top Rated'
				category={topRated}
				url={'#'}
			/>
			<Row
				title='Action Movies'
				category={actionMovies}
				url={'#'}
			/>
			{/* {list.length > 0 && (
				<Row
					title='My List'
					category={list}
				/>
			)} */}
			<Row
				title='Comedy Movies'
				category={comedyMovies}
				url={'#'}
			/>
			<Row
				title='Horror Movies'
				category={horrorMovies}
				url={'#'}
			/>
			<Row
				title='Romance Movies'
				category={romanceMovies}
				url={'#'}
			/>
			<Row
				title='Documentaries'
				category={documentaries}
				url={'#'}
			/>
		</main>
	);
}
