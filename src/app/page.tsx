import { Hero } from '@components';
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
		</main>
	);
}
