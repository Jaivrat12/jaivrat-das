import { forwardRef } from 'react';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { Project } from '@/types';

const MyProjects = forwardRef<HTMLHeadingElement>(function MyProjects(props, ref) {

	const projects: Project[] = [
		{
			title: 'Clannad',
			description:
				'A Family Tree Maker where you can create various family trees that are related to each other.',
			techStack: 'MERN + Next.js',
			demoLink: 'https://clannad.jaivratdas.in/',
			githubLink: 'https://github.com/Jaivrat12/clannad-family-tree',
			image: 'https://raw.githubusercontent.com/Jaivrat12/Jaivrat12/master/images/clannad.gif',
		},
		{
			title: 'Autobot',
			description:
				'Web Automation Toolkit: A Chrome Extension enabling users to build customizable bots to automate tedious tasks.',
			techStack: 'Plasmo (React)',
			demoLink:
				'https://github.com/Jaivrat12/autobot/releases/tag/first-release',
			githubLink: 'https://github.com/Jaivrat12/autobot',
			image: '/assets/images/autobot.png',
		},
		{
			title: 'Weather App',
			description:
				'A visually appealing Weather App with user-engaging animations and backgrounds that resemble the current weather.',
			techStack: 'React, Material UI',
			demoLink: 'https://weather.jaivratdas.in/',
			githubLink: 'https://github.com/Jaivrat12/weather-app',
			image: 'https://raw.githubusercontent.com/Jaivrat12/Jaivrat12/master/images/weather-app.gif',
		},
	];

	return (
		<>
			<h2
				ref={ref}
				className="
					pb-10
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
								<Image
									src={project.image}
									alt={project.title}
									className="w-full"
									width="100%"
									radius="lg"
									shadow="sm"
									isZoomed
									// isBlurred
								/>
							</a>
						</CardBody>

						<CardFooter className="text-small items-start flex-col flex-1">
							<a
								href={project.demoLink}
								target="_blank"
							>
								<h4 className="text-lg">{project.title}</h4>
							</a>

							<p className="text-default-500 mb-1.5">
								<i>{project.techStack}</i>
							</p>

							<p className="text-default-500 mb-2.5 flex-1">
								{project.description}
							</p>

							<div className="w-full flex justify-end gap-2">
								<Button
									as="a"
									href={project.githubLink}
									target="_blank"
									variant="ghost"
									isIconOnly
								>
									<IconBrandGithub />
								</Button>

								<Button
									className="bg-gradient-to-r from-violet-600 to-pink-600"
									as="a"
									href={project.demoLink}
									target="_blank"
									color="secondary"
									variant="shadow"
									endContent={
										<IconExternalLink size="1.25rem" />
									}
								>
									Try it!
								</Button>
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
						w-fit
						mx-auto
						p-[2px]
						flex
						items-center
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
							animate-[spin_3s_linear_infinite]
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
						<IconExternalLink size="1.25rem" />
					</div>
				</Button>
			</div>
		</>
	);
});

export default MyProjects;
