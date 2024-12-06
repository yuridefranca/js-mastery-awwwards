import React, { useRef } from 'react';
import gsap from 'gsap';

import { AnitmatedTitle } from '../AnimatedTitle';
import { Button } from '../Button';

export const Story = () => {
	const frameRef = useRef<HTMLImageElement>(null);

	const handleMouseLeave = () => {
		const element = frameRef.current;

		gsap.to(element, {
			duration: 0.3,
			rotateX: 0,
			rotateY: 0,
			ease: 'power1.inOut',
		});
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
		const element = frameRef.current;
		if (!element) return;

		const rect = element.getBoundingClientRect();

		const { clientX, clientY } = e;
		const x = clientX - rect.left;
		const y = clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = ((y - centerY) / centerY) * -10;
		const rotateY = ((x - centerX) / centerX) * 10;

		gsap.to(element, {
			duration: 0.3,
			rotateX: rotateX,
			rotateY: rotateY,
			transformPerspective: 500,
			ease: 'power1.inOut',
		});
	};

	return (
		<section
			id="story"
			className="min-h-dvh w-screen bg-black text-blue-50"
		>
			<div className="flex flex-col size-full items-center pt-10 pb-24">
				<p className="font-general text-sm uppercase md:text-[10px]">The multiversal ip world</p>

				<div className="relative size-full">
					<AnitmatedTitle
						containerClassName="mt-5 pointer-events-none mix-blend-difference relative z-10"
						title="The st<b>o</b>ry of <br /> a hidden real<b>m</b>"
					/>

					<div className="story-img-container">
						<div className="story-img-mask">
							<div className="story-img-content">
								<img
									ref={frameRef}
									src="/img/entrance.webp"
									alt="Entrance"
									className="object-contain"
									onMouseEnter={handleMouseLeave}
									onMouseUp={handleMouseLeave}
									onMouseLeave={handleMouseLeave}
									onMouseMove={handleMouseMove}
								/>
							</div>
						</div>

						{/* Add rounded corners to the image above */}
						<svg
							className="invisible absolute size-0"
							xmlns="http://www.w3.org/2000/svg"
						>
							<defs>
								<filter id="flt_tag">
									<feGaussianBlur
										in="SourceGraphic"
										stdDeviation="8"
										result="blur"
									/>
									<feColorMatrix
										in="blur"
										mode="matrix"
										values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
										result="flt_tag"
									/>
									<feComposite
										in="SourceGraphic"
										in2="flt_tag"
										operator="atop"
									/>
								</filter>
							</defs>
						</svg>
					</div>
				</div>

				<div className="-mt-80 flex w-full justify-center md:-mt-64 md:me:44 md:justify-end">
					<div className="flex h-full w-fit flex-col items-center md:items-start">
						<p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
							Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite
							opportunities.
						</p>

						<Button
							id="realm-button"
							title="Discover prologue"
							containerClassName="mt-5"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
