import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
	const links = [
		{
			href: '#',
			icon: <FaDiscord />,
		},
		{
			href: '#',
			icon: <FaTwitter />,
		},
		{
			href: '#',
			icon: <FaGithub />,
		},
		{
			href: '#',
			icon: <FaTwitch />,
		},
	];

	return (
		<footer className="w-screen bg-violet-300 py-4 text-black">
			<div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
				<p className="text-center text-sm md:text-left">&copy; Nova 2024. All rights reserved.</p>

				<div className="flex justify-center gap-4 md:justify-start">
					{links.map(({ href, icon }, index) => (
						<a
							key={index}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-black transition-colors duration-500 ease-in-out hover:text-white"
						>
							{icon}
						</a>
					))}
				</div>

				<a
					href="#privacy-policy"
					className="text-center text-sm hover:underline md:text-right"
				>
					Privacy Policy.
				</a>
			</div>
		</footer>
	);
};
