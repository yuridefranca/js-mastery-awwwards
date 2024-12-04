import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { AnitmatedTitle } from '../AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
	useGSAP(() => {
		const clipAnimation = gsap.timeline({
			scrollTrigger: {
				trigger: '#clip',
				start: 'center center',
				end: '+=800 center',
				scrub: 0.5,
				pin: true,
				pinSpacing: true,
			},
		});

		clipAnimation.to('.mask-clip-path', {
			width: '100vw',
			height: '100vh',
			borderRadius: 0,
		});
	});

	return (
		<section
			id="about"
			className="min-h-screen w-screen"
		>
			<div className="relative mb-8 flex flex-col items-center gap-5">
				<h2 className="font-general text-sm uppercase md:text-[10px]">Welcome to Zentry</h2>
				<AnitmatedTitle
					containerClassName="mt-5 !text-black text-center"
					title="Disc<b>o</b>ver the world's <br />l<b>a</b>rgest shared adventure"
				/>
				<div className="about-subtext">
					<p>The game of Games begins your life, now an epic MMORPG</p>
					<p>Zentry unites every player from countless games and platforms</p>
				</div>
			</div>

			<div
				id="clip"
				className="h-dvh w-screen"
			>
				<div className="mask-clip-path about-image">
					<img
						src="img/about.webp"
						alt="Background"
						className="absolute left-0 top-0 size-full object-cover"
					/>
				</div>
			</div>
		</section>
	);
};
