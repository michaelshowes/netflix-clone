// Hero Component

import Image from 'next/image';
import scss from './hero.module.scss';

type HeroProps = {};

export default function Hero({}: HeroProps) {
	return (
		<div className={scss.hero}>
			<div className={scss.image}>{/* <Image /> */}</div>
		</div>
	);
}
