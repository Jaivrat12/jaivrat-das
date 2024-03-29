'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { Button } from '@nextui-org/button';
import { Image as NextUiImage } from '@nextui-org/image';
import {
	IconBrandGithub,
	IconBrandLeetcode,
	IconBrandLinkedin,
	IconMail,
} from '@tabler/icons-react';
import MyProjects from '@/components/MyProjects';

export default function Home() {

	const myProjectsRef = useRef<HTMLHeadingElement>(null);

	return (
		<div className="md:px-6 max-w-screen-xl md:mx-auto">
			<div className="md:pt-16 md:min-h-0 min-h-[calc(100vh-64px-5rem)] flex flex-col justify-between">
				<div className="flex md:flex-row flex-col md:items-center md:gap-10 gap-5">
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

					<div className="lg:px-6 md:px-2 px-6 font-semibold">
						<h1 className="lg:text-5xl sm:text-4xl min-[343px]:text-3xl text-2xl font-extrabold">
							I&apos;m{' '}
							<span
								className="
									bg-gradient-to-r from-[#92fe9d] to-[#00c9ff]
									bg-clip-text
									tracking-widest
								"
								style={{
									WebkitTextFillColor: 'transparent',
								}}
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
								href="https://www.linkedin.com/in/jaivratdas/"
								target="_blank"
								color="success"
								variant="flat"
								className="sm:w-12 sm:h-12 sm:p-0 w-10 p-2"
								isIconOnly
							>
								<IconMail size="2rem" />
							</Button>
						</div>
					</div>
				</div>

				<div className="md:my-16 mt-10 grid place-content-center flex-1">
					<Button
						size="lg"
						onPress={() => scrollTo(0, (myProjectsRef.current?.offsetTop ?? 70) - 70)}
						className="
							w-[64px]
							h-[80px]
							p-[4px]
							flex
							items-center
							rounded-full
						"
						isIconOnly
					>
						<span
							className="
								absolute
								inset-[-1000%]
								animate-[spin_2s_linear_infinite]
								bg-[conic-gradient(from_90deg_at_50%_50%,#F54180_0%,#338EF7_50%,#F54180_100%)]
							"
						/>

						<div
							className="
								h-full
								w-full
								inline-flex
								justify-center
								rounded-full
								bg-background
								group-hover:bg-background/70
								transition-background
								backdrop-blur-3xl
							"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								role="img"
								className="
									outline-none
									transition-transform
									rotate-90
									animate-[jumpInfinite_2s_ease-in-out_infinite]
								"
								width="60"
								height="60"
								viewBox="-12 -12 48 48"
							>
								<path
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="4"
									d="M4 12h16m0 0l-6-6m6 6l-6 6"
								/>
							</svg>
						</div>
					</Button>
				</div>
			</div>

			<div className="md:px-0 px-6 pb-10">
				<div className="mt-20">
					<MyProjects ref={myProjectsRef} />
				</div>
			</div>
		</div>
	);
}
