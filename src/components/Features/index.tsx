import React, { useRef, useState } from 'react';
import { TiLocationArrow } from 'react-icons/ti';

type BentoTiltProps = {
	children: React.ReactNode;
	className?: string;
};

const BentoTilt = ({ children, className = '' }: BentoTiltProps) => {
	const [transformStyle, setTransformStyle] = useState('');
	const itemRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!itemRef.current) return;

		const { left, top, width, height } = itemRef.current.getBoundingClientRect();
		const relativeX = (e.clientX - left) / width;
		const relativeY = (e.clientY - top) / height;

		const tiltX = (relativeY - 0.5) * 5;
		const tiltY = (relativeX - 0.5) * -5;

		const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

		setTransformStyle(newTransform);
	};

	const handleMouseLeave = () => {
		setTransformStyle('');
	};

	return (
		<div
			ref={itemRef}
			className={className}
			onMouseLeave={handleMouseLeave}
			onMouseMove={handleMouseMove}
			style={{ transform: transformStyle }}
		>
			{children}
		</div>
	);
};

type BentoCardProps = {
	description: string;
	isComingSoon?: boolean;
	src: string;
	title: React.ReactNode;
};

const BentoCard = ({ description, /* isComingSoon, */ src, title }: BentoCardProps) => {
	return (
		<div className="relative size-full">
			<video
				src={src}
				className="absolute left-0 top-0 size-full object-cover object-center"
				autoPlay
				loop
				muted
			/>

			<div className="relative z-10 flex flex-col size-full justify-between p-5 text-blue-50">
				<h3 className="bento-title special-font">{title}</h3>
				{description && <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>}
			</div>
		</div>
	);
};

export const Features = () => {
	return (
		<section className="bg-black pb-52">
			<div className="container mx-auto px-3 md:px-10">
				<div className="px-5 py-32">
					<p className="font-circular-web text-lg text-blue-50">Into the Metagam Layer</p>
					<p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
						Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected
						overlay experience on your world.
					</p>
				</div>

				<BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
					<BentoCard
						src="videos/feature-1.mp4"
						title={
							<>
								radia<b>n</b>t
							</>
						}
						description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
						isComingSoon
					/>
				</BentoTilt>

				<div className="h-[135vh] w-full grid grid-cols-2 grid-rows-3 gap-7">
					<BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
						<BentoCard
							src="videos/feature-2.mp4"
							title={
								<>
									zig<b>m</b>a
								</>
							}
							description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
							isComingSoon
						/>
					</BentoTilt>

					<BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
						<BentoCard
							src="videos/feature-3.mp4"
							title={
								<>
									n<b>e</b>xus
								</>
							}
							description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
							isComingSoon
						/>
					</BentoTilt>

					<BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
						<BentoCard
							src="videos/feature-4.mp4"
							title={
								<>
									az<b>u</b>l
								</>
							}
							description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
							isComingSoon
						/>
					</BentoTilt>

					<BentoTilt className="bento-tilt_2">
						<div className="flex flex-col size-full justify-between bg-violet-300 p-5">
							<h3 className="bento-title special-font max-w-64 text-black">
								M<b>o</b>re c<b>o</b>ming s<b>o</b>on!
							</h3>
							<TiLocationArrow className="m-5 scale-[5] self-end" />
						</div>
					</BentoTilt>

					<BentoTilt className="bento-tilt_2">
						<video
							src="videos/feature-5.mp4"
							className="size-full object-cover object-center"
							autoPlay
							loop
							muted
						/>
					</BentoTilt>
				</div>
			</div>
		</section>
	);
};
