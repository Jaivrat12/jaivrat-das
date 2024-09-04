import Image from 'next/image';
import { forwardRef } from 'react';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Image as NextUiImage } from '@nextui-org/image';
import { RiExternalLinkLine, RiGithubLine } from 'react-icons/ri';
import { Project } from '@/types';
import TechIconGroup from './TechIconGroup';

const MyProjects = forwardRef<HTMLHeadingElement>(function MyProjects(
	props,
	ref,
) {
	const projects: Project[] = [
		{
			title: 'Clannad',
			description:
				'A Family Tree Maker where you can create various family trees that are related to each other.',
			techStack: [
				'Next.js',
				'Redux',
				'Express.js',
				'MongoDB',
				'React',
				'Node.js',
				'JavaScript',
				'Material UI',
			],
			demoLink: 'https://clannad.jaivratdas.in/',
			githubLink: 'https://github.com/Jaivrat12/clannad-family-tree',
			image: '/assets/images/clannad.jpeg',
		},
		{
			title: 'Autobot',
			description:
				'Web Automation Toolkit: A Chrome Extension enabling users to build customizable bots to automate tedious tasks.',
			techStack: [
				'React',
				'Mantine',
			],
			demoLink:
				'http://autobot.jaivratdas.in/',
			githubLink: 'https://github.com/Jaivrat12/autobot',
			image: '/assets/images/autobot.jpeg',
		},
		{
			title: 'Weather App',
			description:
				'A visually appealing Weather App with user-engaging animations and backgrounds that resemble the current weather.',
			techStack: [
				'React',
				'React Router',
				'Material UI',
				'Framer Motion',
			],
			demoLink: 'https://weather.jaivratdas.in/',
			githubLink: 'https://github.com/Jaivrat12/weather-app',
			image: '/assets/images/weather-app.png',
		},
	];

	return (
		<>
			<h2
				ref={ref}
				className="
					mb-10
					text-center
					lg:text-4xl
					sm:text-3xl
					text-2xl
					uppercase
					tracking-widest
				"
			>
				My Projects
			</h2>

			<div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
				{projects.map((project, i) => (
					<Card
						key={i}
						className="max-w-[480px] mx-auto"
						shadow="sm"
					>
						<CardBody className="overflow-visible p-0 flex-none">
							<a
								href={project.demoLink}
								target="_blank"
							>
								<NextUiImage
									as={Image}
									src={project.image}
									alt={project.title}
									className="w-full"
									quality={100}
									height="405"
									width="720"
									radius="lg"
									shadow="sm"
									isZoomed
									isBlurred
								/>
							</a>
						</CardBody>

						<CardFooter className="text-small items-start flex-col flex-1">
							<a
								href={project.demoLink}
								target="_blank"
							>
								<h4 className="text-lg mb-1">
									{project.title}
								</h4>
							</a>

							<p className="text-default-500 mb-2.5 flex-1">
								{project.description}
							</p>

							<div className="w-full flex justify-between gap-4 flex-wrap">
								<TechIconGroup project={project} />

								<div className="ml-auto flex justify-end gap-2">
									<Button
										as="a"
										href={project.githubLink}
										target="_blank"
										variant="ghost"
										isIconOnly
									>
										<RiGithubLine size="1.5rem" />
									</Button>

									<Button
										className="bg-gradient-to-r from-pink-600 to-violet-600"
										as="a"
										href={project.demoLink}
										target="_blank"
										color="secondary"
										variant="shadow"
										endContent={
											<RiExternalLinkLine size="1.25rem" />
										}
									>
										Try it!
									</Button>
								</div>
							</div>
						</CardFooter>
					</Card>
				))}
			</div>

			<div className="mt-8 text-center">
				<Button
					as="a"
					href="https://github.com/jaivrat12"
					target="_blank"
					size="lg"
					className="
						sm:w-fit w-full
						max-w-[480px]
						mx-auto
						p-[2px]
						rounded-full
						font-semibold
						text-foreground
						shadow-sm
					"
				>
					<span
						className="
							absolute
							inset-[-1000%]
							animate-[spin_5s_linear_infinite]
							bg-[conic-gradient(from_90deg_at_50%_50%,#F54180_0%,#338EF7_50%,#F54180_100%)]
						"
					/>

					<div
						className="
							h-full
							w-full
							inline-flex
							gap-2
							cursor-pointer
							items-center
							justify-center
							rounded-full
							bg-background
							group-hover:bg-background/70
							transition-background
							px-3
							py-1
							text-sm
							font-medium
							text-foreground
							backdrop-blur-3xl
						"
					>
						View All Projects
						<RiExternalLinkLine size="1.25rem" />
					</div>
				</Button>
			</div>
		</>
	);
});

export default MyProjects;
