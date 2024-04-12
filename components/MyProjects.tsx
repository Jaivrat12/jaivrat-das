import { forwardRef } from 'react';
import { Avatar, AvatarGroup } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import { Tooltip } from '@nextui-org/tooltip';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { Project } from '@/types';
import { getTechIconUrl } from '@/utils/techIcons';

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
			image: 'https://raw.githubusercontent.com/Jaivrat12/Jaivrat12/master/images/clannad.gif',
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
				'https://github.com/Jaivrat12/autobot/releases/tag/first-release',
			githubLink: 'https://github.com/Jaivrat12/autobot',
			image: '/assets/images/autobot.png',
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
			image: 'https://raw.githubusercontent.com/Jaivrat12/Jaivrat12/master/images/weather-app.gif',
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
								<h4 className="text-lg mb-1">
									{project.title}
								</h4>
							</a>

							<p className="text-default-500 mb-2.5 flex-1">
								{project.description}
							</p>

							<div className="w-full flex justify-between gap-4 flex-wrap">
								<AvatarGroup
									size="sm"
									isGrid
									max={4}
									className="grid-cols-5 gap-[2px]"
									renderCount={(count) => (
										<Popover
											backdrop="blur"
											showArrow
										>
											<PopoverTrigger>
												<Button
													size="sm"
													radius="full"
													isIconOnly
												>
													+{count}
												</Button>
											</PopoverTrigger>

											<PopoverContent className="items-start gap-1.5 p-4">
												<h6 className="text-lg mb-2">
													Tech Stack used in{' '}
													{project.title}
												</h6>

												<div className="grid sm:grid-cols-3 grid-cols-2 gap-3">
													{project.techStack.map((tech, i) => (
														<div
															key={i}
															className="flex items-center gap-2 text-default-600"
														>
															<Avatar
																src={getTechIconUrl(tech, 'transparent').url}
																alt={tech}
																className="[&>img]:!object-contain"
																style={getTechIconUrl(tech, 'transparent').styles}
															/>
															{tech}
														</div>
													))}
												</div>
											</PopoverContent>
										</Popover>
									)}
								>
									{project.techStack.map((tech, i) => (
										<Tooltip
											key={i}
											content={tech}
											color="foreground"
											closeDelay={0}
										>
											<Avatar
												src={getTechIconUrl(tech, 'transparent').url}
												alt={tech}
												className="[&>img]:object-contain"
												style={{
													...getTechIconUrl(tech, 'transparent').styles,
													border: '2px solid #3338',
												}}
											/>
										</Tooltip>
									))}
								</AvatarGroup>

								<div className="ml-auto flex justify-end gap-2">
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
										className="bg-gradient-to-r from-pink-600 to-violet-600"
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
							</div>
						</CardFooter>
					</Card>
				))}
			</div>

			{/* // ! Removed spin animation bcz it was causing flickering of other elements */}
			{/* // ! In actual mobile device only (in portrait) (not in browser dev tool emulation) */}
			{/* // ! The above elements have icons (GitHub, ExternalLink) which are involved in this */}
			{/* // ! So instead of spin animation just giving it a rotation of -35deg for now */}
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
							/animate-[spin_3s_linear_infinite]
							rotate-[-35deg]
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
