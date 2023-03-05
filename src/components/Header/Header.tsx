'use client';

import scss from './header.module.scss';
import { usePathname } from 'next/navigation';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { routes } from '@utils/routes';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { FaRegBell } from 'react-icons/fa';
import { IoIosMenu } from 'react-icons/io';

type HeaderProps = {};

export default function Header({}: HeaderProps) {
	const currentRoute = usePathname();
	const { ref, inView } = useInView({
		threshold: 1
	});

	console.log(currentRoute);

	return (
		<>
			<span ref={ref}></span>
			<header
				className={scss.header}
				style={{
					backgroundColor: inView ? 'transparent' : '#141414'
				}}
			>
				<button className={scss.mobileMenu}>
					<IoIosMenu />
				</button>
				{/* Logo */}
				<div className={scss.logo}>
					<Link href={'/'}>
						<Image
							src='images/netflix-logo.svg'
							width={100}
							height={100}
							alt='neflix logo'
							aria-label='Netflix'
						/>
					</Link>
				</div>

				{/* Links */}
				<nav
					className={scss.primaryNav}
					aria-label='primary navigation'
				>
					<ul>
						{routes.map((route) => (
							<li key={route.name}>
								<Link
									href={route.path}
									className={
										currentRoute === route.path ? scss.active : scss.inactive
									}
								>
									{route.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<nav className={scss.secondaryNav}>
					<ul>
						<li>
							<RxMagnifyingGlass className={scss.searchIcon} />
						</li>

						<li>DVD</li>

						<li>
							<FaRegBell />
						</li>
						<li>
							<Image
								className={scss.avatar}
								src='/images/netflix-avatar.png'
								width={32}
								height={40}
								alt='profile'
							/>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
