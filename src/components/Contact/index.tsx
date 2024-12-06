import { Button } from '../Button';

type ImageClipBoxProps = {
	className: string;
	src: string;
};

const ImageClipBox = ({ src, className }: ImageClipBoxProps) => {
	return (
		<div className={className}>
			<img src={src} />
		</div>
	);
};

export const Contact = () => {
	return (
		<section
			id="contact"
			className="my-20 min-h-96 w-screen px-10"
		>
			<div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
				<div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
					<ImageClipBox
						src="img/contact-1.webp"
						className="contact-clip-path-1"
					/>
					<ImageClipBox
						src="img/contact-2.webp"
						className="contact-clip-path-2 translate-y-60 lg:translate-y-40"
					/>
				</div>

				<div className="absolute left-20 -top-40 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
					<ImageClipBox
						src="img/swordman-partial.webp"
						className="absolute md:scale-125"
					/>
					<ImageClipBox
						src="img/swordman.webp"
						className="sword-man-clip-path md:scale-125"
					/>
				</div>

				<div className="flex flex-col items-center text-center">
					<p className="font-general text-[10px] uppercase">Join Zentry</p>
					<p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
						Let's b<b>u</b>ild the <br /> n<b>e</b>w era <b>o</b>f <br /> g<b>a</b>ming togeth<b>e</b>r!
					</p>

					<Button
						title="Contact us"
						containerClassName="mt-10 cursor-pointer"
					/>
				</div>
			</div>
		</section>
	);
};
