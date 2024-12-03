import React, { useEffect, useRef, useState } from 'react';

import { TiLocationArrow } from 'react-icons/ti';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import { Button } from '../Button';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
	const [currentIndex, setCurrentIndex] = useState(1);
	const [hasClicked, setHasClicked] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [lodaedVideos, setLodaedVideos] = useState(0);

	const MAX_VIDEOS = 4;

	const upcomingVideoIndex = (currentIndex % MAX_VIDEOS) + 1;
	const upcomingVideoRef = useRef<HTMLVideoElement>(null);

	const handleMiniVideoClick = () => {
		setHasClicked(true);
		setCurrentIndex(upcomingVideoIndex);
	};

	const handleVideoLoaded = () => {
		setLodaedVideos((prev) => prev + 1);
	};

	useEffect(() => {
		if (lodaedVideos === MAX_VIDEOS - 2) setIsLoading(false);
	}, [lodaedVideos]);

	// handle video transition
	useGSAP(
		() => {
			if (hasClicked) {
				gsap.from('#current-video', {
					transformOrigin: 'center center',
					scale: 0,
					width: '100%',
					height: '100%',
					duration: 1,
					ease: 'power1.inOut',
					onStart: () => {
						upcomingVideoRef?.current?.play();
					},
				});

				gsap.set('#next-video', { visibility: 'visible' });

				gsap.to('#next-video', {
					transformOrigin: 'center center',
					scale: 1,
					width: '100%',
					height: '100%',
					duration: 1,
					ease: 'power1.inOut',
					onStart: () => {
						upcomingVideoRef?.current?.play();
					},
				});
			}
		},
		{ dependencies: [currentIndex], revertOnUpdate: true }
	);

	// handle video scroll effect
	useGSAP(() => {
		gsap.set('#video-frame', {
			clipPath: 'polygon(14% 0, 72% 0, 88% 90%, 0 95%)',
			borderRadius: '0 0 40% 10%',
		});

		gsap.from('#video-frame', {
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			borderRadius: '0 0 0 0',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '#video-frame',
				start: 'center center',
				end: 'bottom center',
				scrub: true,
			},
		});
	});

	const getVideoSrc = (index: number) => `videos/hero-${index}.mp4`;

	return (
		<section className="relative h-dvh w-screen overflow-x-hidden">
			{isLoading && (
				<div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
					<div className="three-body">
						<span className="three-body__dot"></span>
						<span className="three-body__dot"></span>
						<span className="three-body__dot"></span>
					</div>
				</div>
			)}

			<div
				id="video-frame"
				className="relative z-10 h-dvh w-screen overflow-x-hidden rounded-lg bg-blue-50"
			>
				<div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
					<div
						className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
						onClick={handleMiniVideoClick}
					>
						<video
							src={getVideoSrc(upcomingVideoIndex)}
							ref={upcomingVideoRef}
							id="current-video"
							className="size-64 origin-center scale-150 object-cover object-center"
							onLoadedData={handleVideoLoaded}
							loop
							muted
							disablePictureInPicture
						/>
					</div>
				</div>

				<video
					src={getVideoSrc(currentIndex)}
					ref={upcomingVideoRef}
					id="next-video"
					className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
					loop
					muted
					disablePictureInPicture
				/>

				<video
					src={getVideoSrc(currentIndex === MAX_VIDEOS - 1 ? 1 : currentIndex)}
					className="absolute left-0 top-0 size-full object-cover object-center"
					autoPlay
					loop
					muted
					disablePictureInPicture
					onLoadedData={handleVideoLoaded}
				/>

				<h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-50">
					G<b>a</b>ming
				</h1>

				<div className="absolute left-0 top-0 z-40 size-full">
					<div className="mt-24 px-5 sm:px-10">
						<h1 className="special-font hero-heading text-blue-100">
							Redefi<b>n</b>e
						</h1>
						<p className="mb-5 max-w-64 font-robert-regular text-blue-100">
							Enter the Metagame Layer <br /> Unleash the Play Economy
						</p>
						<Button
							id="watch-trailer"
							title="Watch trailer"
							leftIcon={<TiLocationArrow />}
							containerClassName="!bg-yellow-300 flex-center gap-1"
						/>
					</div>
				</div>
			</div>

			<h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
				G<b>a</b>ming
			</h1>
		</section>
	);
};
