import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
	containerClassName?: string;
	title: string;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ containerClassName, leftIcon, rightIcon, title, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClassName}`}
		>
			{leftIcon}
			<span className="relative inline-flex overflow-hidden font-general text-xs uppercase">{title}</span>
			{rightIcon}
		</button>
	);
};
