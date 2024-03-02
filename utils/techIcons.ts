import { CSSProperties } from 'react';
import { Tech } from '@/types';

// * SOURCE 1: https://devicon.dev/
// * SOURCE 2: https://svgporn.com/

type Variant = 'solid' | 'transparent';

// eslint-disable-next-line no-unused-vars
type IconFn = (variant: Variant) => {
	url: string;
	styles: CSSProperties;
};

const ICONS_BASE_URL = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';
const ICONS_LOCAL_BASE_URL = '/assets/images/tech/';

const techToIconUrls: Record<Tech, IconFn> = {
	'Next.js': (variant) => ({
		url: ICONS_BASE_URL + 'nextjs/nextjs-original.svg',
		styles: {
			padding: 0,
			backgroundColor: variant === 'solid'
                ? 'black'
                : 'transparent',
		},
	}),
	React: (variant) => ({
		url: ICONS_BASE_URL + 'react/react-original.svg',
		styles: {
			padding: '0.2rem',
			backgroundColor: variant === 'solid'
                ? 'black'
                : 'transparent',
		},
	}),
	'Node.js': (variant) => ({
		url: ICONS_BASE_URL + 'nodejs/nodejs-original.svg',
		styles: {
			padding: '0.2rem',
			backgroundColor: variant === 'solid'
                ? 'black'
                : 'transparent',
		},
	}),
	'Express.js': (variant) => ({
		url: ICONS_LOCAL_BASE_URL + 'express-js-icon.svg',
		styles: {
			padding: 0,
			backgroundColor: variant === 'solid'
                ? 'white'
                : 'transparent',
		},
	}),
	MongoDB: (variant) => ({
		url: ICONS_BASE_URL + 'mongodb/mongodb-original.svg',
		styles: {
			padding: '0.15rem',
			backgroundColor: variant === 'solid'
                ? 'black'
                : 'transparent',
		},
	}),
	JavaScript: (variant) => ({
		url: ICONS_BASE_URL + 'javascript/javascript-original.svg',
		styles: {
			padding: '0.25rem',
			backgroundColor: variant === 'solid'
                ? 'black'
                : 'transparent',
		},
	}),
	TypeScript: (variant) => ({
		url: ICONS_BASE_URL + 'typescript/typescript-original.svg',
		styles: {
			padding: '0.25rem',
			backgroundColor: variant === 'solid'
                ? 'black'
                : 'transparent',
		},
	}),
	Redux: (variant) => ({
		url: ICONS_BASE_URL + 'redux/redux-original.svg',
		styles: {
			padding: '0.25rem',
			backgroundColor: variant === 'solid'
                ? 'black'
                : 'transparent',
		},
	}),
	'React Query': (variant) => ({
		url: ICONS_LOCAL_BASE_URL + 'react-query-icon.svg',
		styles: {
			padding: '0.1rem',
			backgroundColor: variant === 'solid'
                ? 'black'
                : 'transparent',
		},
	}),
	'React Router': (variant) => ({
		url: ICONS_LOCAL_BASE_URL + 'react-router-icon.svg',
		styles: {
			padding: '0.15rem',
			backgroundColor: variant === 'solid'
                ? 'white'
                : 'white',
		},
	}),
	Java: (variant) => ({
		url: ICONS_BASE_URL + 'java/java-original.svg',
		styles: {
			padding: '0.15rem',
			backgroundColor: variant === 'solid'
                ? 'white'
                : 'white',
		},
	}),
	MySQL: (variant) => ({
		url: ICONS_BASE_URL + 'mysql/mysql-original.svg',
		styles: {
			padding: '0.3rem',
			backgroundColor: variant === 'solid'
                ? 'white'
                : 'white',
		},
	}),
	PostgreSQL: (variant) => ({
		url: ICONS_BASE_URL + 'postgresql/postgresql-original.svg',
		styles: {
			padding: '0.2rem',
			backgroundColor: variant === 'solid'
                ? 'black'
                : 'transparent',
		},
	}),
	'Framer Motion': (variant) => ({
		url: ICONS_BASE_URL + 'framermotion/framermotion-original.svg',
		styles: {
			padding: '0.2rem',
			backgroundColor: variant === 'solid'
                ? 'white'
                : 'white',
		},
	}),
	'Material UI': (variant) => ({
		url: ICONS_BASE_URL + 'materialui/materialui-original.svg',
		styles: {
			padding: '0.25rem',
			backgroundColor: variant === 'solid'
                ? 'white'
                : 'white',
		},
	}),
	Mantine: (variant) => ({
		url: ICONS_LOCAL_BASE_URL + 'mantine-icon.svg',
		styles: {
			padding: 0,
			backgroundColor: variant === 'solid'
                ? 'black'
                : 'transparent',
		},
	}),
};

export const getTechIconUrl = (tech: Tech, variant: Variant) => {
	return techToIconUrls[tech](variant);
};
