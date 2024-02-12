import Link from 'next/link';
import { Button } from '@nextui-org/button';
import {
	IconBrandGithub,
	IconBrandLeetcode,
	IconBrandLinkedin,
	IconMail,
} from '@tabler/icons-react';

export default function Home() {

	return (

		<div
			className="
				h-full
				max-w-screen-xl
				mx-auto
				pt-32
				px-6
			"
		>
			<h1
				className="
					sm:mb-10
					mb-6
					flex
					flex-col
					sm:gap-4
					gap-2
					lg:text-3xl
					sm:text-2xl
					text-1xl
					font-semibold
				"
			>
				<span>Welcome! 🤩</span>

				<span className="lg:text-7xl sm:text-5xl text-3xl">
					I am{' '}
					<span
						className="
							bg-gradient-to-r from-violet-600 to-fuchsia-600
							bg-clip-text
						"
						style={{
							letterSpacing: '0.25rem',
							WebkitTextFillColor: 'transparent',
						}}
					>
						JAIVRAT DAS
					</span>
				</span>

				<span className="lg:text-4xl sm:text-3xl text-1xl">
					💻 A{' '}
					<span
						className="
							bg-gradient-to-r from-sky-400 to-emerald-400
							bg-clip-text
							tracking-widest
						"
						style={{
							WebkitTextFillColor: 'transparent',
						}}
					>
						Full-Stack
					</span>{' '}
					Developer
				</span>
			</h1>

			<div className="flex gap-4">
				<Button
					as={Link}
					href="https://github.com/jaivrat12"
					target="_blank"
					variant="flat"
					className="sm:w-12 sm:h-12 sm:p-0 w-10 p-2"
					isIconOnly
				>
					<IconBrandGithub size="2rem" />
				</Button>

				<Button
					as={Link}
					href="https://www.linkedin.com/in/jaivratdas/"
					target="_blank"
					color="primary"
					variant="flat"
					className="sm:w-12 sm:h-12 sm:p-0 w-10 p-2"
					isIconOnly
				>
					<IconBrandLinkedin size="2rem" />
				</Button>

				<Button
					as={Link}
					href="https://leetcode.com/jaivrat12/"
					target="_blank"
					color="warning"
					variant="flat"
					className="sm:w-12 sm:h-12 sm:p-0 w-10 p-2"
					isIconOnly
				>
					<IconBrandLeetcode size="2rem" />
				</Button>

				<Button
					as={Link}
					href="mailto:jaivrat.das@gmail.com"
					target="_blank"
					color="success"
					variant="flat"
					className="sm:w-12 sm:h-12 sm:p-0 w-10 p-2"
					isIconOnly
				>
					<IconMail size="2rem" />
				</Button>
			</div>

			<div className="mt-32 text-center">
				<h2
					className="
						pb-2
						lg:text-6xl
						sm:text-4xl
						text-2xl
						bg-gradient-to-r from-amber-500 to-pink-500
						bg-clip-text
						tracking-widest
					"
					style={{
						WebkitTextFillColor: 'transparent',
					}}
				>
					More Coming Soon...
				</h2>

				<span
					className="
						lg:text-3xl
						sm:text-2xl
						text-1xl
					"
				>
					This page is a work in progress, so please wait 😅
				</span>
			</div>
		</div>
	);
};