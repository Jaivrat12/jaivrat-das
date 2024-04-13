import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import React from 'react';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';

import './globals.css';

const poppins = Poppins({
	subsets: ['latin'],
	weight: [
		'100', '200', '300',
		'400', '500', '600',
		'700', '800', '900',
	],
});

export const metadata: Metadata = {
	title: 'Jaivrat Das',
	description: 'Full-Stack Developer',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={poppins.className}>
                <Providers>
					<Navbar />
                    {children}
                </Providers>
            </body>
		</html>
	);
};