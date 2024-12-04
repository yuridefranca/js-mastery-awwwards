import React, { useEffect, useRef, useState } from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

import { Button } from '../Button';

export const Navbar = () => {
	const audioElementRef = useRef<HTMLAudioElement>(null);
	const navContainerRef = useRef<HTMLDivElement>(null);

	const [isAudioPlaying, setIsAudioPlaying] = useState(false);
	const [isIndicatorActive, setIsIndicatorActive] = useState(false);

	const [lastScrollY, setLastScrollY] = useState(0);
	const [isNavVisible, setIsNavVisible] = useState(true);

	const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact'];
	const { y: currentScrollY } = useWindowScroll();

	const toggleAudioIndicator = () => {
		setIsAudioPlaying((prev) => !prev);
		setIsIndicatorActive((prev) => !prev);
	};

	useEffect(() => {
		if (isAudioPlaying) {
			audioElementRef.current?.play();
		} else {
			audioElementRef.current?.pause();
		}
	}, [isAudioPlaying]);

	useEffect(() => {
		if (currentScrollY === 0) {
			setIsNavVisible(true);
			navContainerRef.current?.classList.remove('floating-nav');
		}

		if (currentScrollY > lastScrollY) {
			setIsNavVisible(false);
			navContainerRef.current?.classList.remove('floating-nav');
		}

		if (currentScrollY < lastScrollY) {
			setIsNavVisible(true);
			navContainerRef.current?.classList.add('floating-nav');
		}

		setLastScrollY(currentScrollY);
	}, [currentScrollY, lastScrollY]);

	useEffect(() => {
		gsap.to(navContainerRef.current, {
			y: isNavVisible ? 0 : -100,
			opacity: isNavVisible ? 1 : 0,
			duration: 0.2,
		});
	}, [isNavVisible]);

	return (
		<div
			ref={navContainerRef}
			className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
		>
			<header className="absolute top-1/2 w-full -translate-y-1/2">
				<nav className="flex size-full items-center justify-between p-4">
					<div className="flex items-center gap-7">
						<img
							src="/img/logo.png"
							alt="logo"
							className="w-10"
						/>
						<Button
							id="product-button"
							title="Product"
							rightIcon={<TiLocationArrow />}
							containerClassName="bg-blue-50 hidden items-center justify-center gap-1 md:flex"
						/>
					</div>
					<div className="flex h-full items-center">
						<div className="hidden md:block">
							{navItems.map((item) => (
								<a
									href={`#${item.toLowerCase()}`}
									key={item}
									className="nav-hover-btn"
								>
									{item}
								</a>
							))}
						</div>

						<button
							className="ml-10 flex items-center space-x-0.5"
							onClick={toggleAudioIndicator}
						>
							<audio
								src="/audio/loop.mp3"
								className="hidden"
								ref={audioElementRef}
								loop
							/>
							{[1, 2, 3, 4].map((bar) => (
								<div
									key={bar}
									className={`indicator-line ${isIndicatorActive ? 'active' : ''}`}
									style={{ animationDelay: `${bar * 0.1}s` }}
								></div>
							))}
						</button>
					</div>
				</nav>
			</header>
		</div>
	);
};
