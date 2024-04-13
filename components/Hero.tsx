import Image from 'next/image';
import Link from 'next/link';
import { type JSX } from 'react';
import {
	Button,
	Image as NextUiImage,
	Tooltip,
	type ButtonProps,
} from '@nextui-org/react';
import {
	IconBrandGithub,
	IconBrandLeetcode,
	IconBrandLinkedin,
	IconFileDownload,
	type TablerIconsProps,
} from '@tabler/icons-react';

type QuickLinks = {
	title: string;
	href: string;
	color: ButtonProps['color'];
	// eslint-disable-next-line no-unused-vars
	Icon: (props: TablerIconsProps) => JSX.Element;
};

const Hero = () => {

	const quickLinks: QuickLinks[] = [
		{
			title: 'GitHub',
			href: 'https://github.com/jaivrat12',
			color: 'default',
			Icon: IconBrandGithub,
		},
		{
			title: 'Linkedin',
			href: 'https://www.linkedin.com/in/jaivratdas/',
			color: 'primary',
			Icon: IconBrandLinkedin,
		},
		{
			title: 'LeetCode',
			href: 'https://leetcode.com/jaivrat12/',
			color: 'warning',
			Icon: IconBrandLeetcode,
		},
		{
			title: 'Resume',
			href: 'https://drive.google.com/file/d/187PeuDl64T4rgU86VwNBfn6cU9PxgqA3/view',
			color: 'success',
			Icon: IconFileDownload,
		},
	];

	return (
		<div
			className="
                flex
                flex-col md:flex-row
                md:items-center
                gap-5 md:gap-10
            "
		>
			<div className="relative flex justify-center">
				<div
					className="absolute h-full w-full"
					style={{
						backgroundImage:
							'url("/assets/images/jaivrat-das.jpeg")',
						backgroundPosition: 'center',
						filter: 'blur(100px)',
					}}
				/>

				<div className="lg:p-4 md:p-2 p-4">
					<NextUiImage
						as={Image}
						src="/assets/images/jaivrat-das.jpeg"
						alt="Portrait of Jaivrat Das"
						width={300}
						height={300}
						className="md:min-w-[300px] w-full"
						radius="full"
						priority
					/>
				</div>
			</div>

			<div className="lg:px-6 md:px-2">
				<h1 className="lg:text-5xl sm:text-4xl min-[343px]:text-3xl text-2xl font-semibold">
					I&apos;m{' '}
					<span
						className="
                            bg-gradient-to-r from-[#92fe9d] to-[#00c9ff]
                            bg-clip-text
                            text-transparent
                            tracking-widest
                            font-bold
                        "
					>
						JAIVRAT DAS
					</span>
				</h1>

				<p className="mt-5 lg:text-xl">
					💻 A{' '}
					<strong
						className="
                            bg-gradient-to-r from-[#f9d423] to-[#f83600]
                            bg-clip-text
                            tracking-widest
                            uppercase
                        "
						style={{
							WebkitTextFillColor: 'transparent',
						}}
					>
						Full-Stack
					</strong>{' '}
					Software Developer who thrives in collaborative
					environments, tackling challenges with a passion for
					building and continuously learning.
					{/* who thrives in collaborative environments, tackling challenges head-on with a passion for building innovative solutions and continuously expanding my skillset. */}
					{/* who thrives in collaborative environments, tackling challenges with a passion for building and learning. */}
					{/* constantly driven to explore new technologies, motivated by the joy of creation and the satisfaction of overcoming complex problems alongside a skilled team. */}
					{/* . Driven by creation & collaboration. Thrives on challenges & new technologies. */}
				</p>

				<div className="sm:mt-8 mt-6 flex gap-4">
					{quickLinks.map(({ title, href, color, Icon }, i) => (
						<Tooltip
							key={i}
							content={title}
							color={color}
							placement="bottom"
							closeDelay={0}
						>
							<Button
								as={Link}
								href={href}
								target="_blank"
								color={color}
								variant="flat"
								className="sm:w-12 sm:h-12 sm:p-0 w-10 p-2"
								isIconOnly
							>
								<Icon size="2rem" />
							</Button>
						</Tooltip>
					))}
				</div>
			</div>
		</div>
	);
};

export default Hero;