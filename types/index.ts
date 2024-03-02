export type Tech =
	| 'Next.js'
	| 'React'
	| 'Node.js'
	| 'Express.js'
	| 'MongoDB'
    | 'JavaScript'
    | 'TypeScript'
	| 'Redux'
	| 'React Query'
	| 'React Router'
    | 'Java'
    | 'MySQL'
    | 'PostgreSQL'
    | 'Framer Motion'
    | 'Material UI'
    | 'Mantine';

export type Project = {
	title: string;
	description: string;
	techStack: Tech[];
	demoLink: string;
	githubLink: string;
	image: string;
};