import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import MyProjects from '@/components/MyProjects';

export default function Home() {

	return (
		<main>
			<section
				id="intro"
				className="container"
				style={{
					backgroundImage: 'url("/assets/images/hero-bg.svg")',
					backgroundPosition: 'left',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<div className="md:pt-16">
					<Hero />
				</div>

				<div className="py-10">
					<AboutMe />
				</div>
			</section>

			<section
				id="projects"
				className="container mt-20 pb-10"
			>
				<MyProjects />
			</section>
		</main>
	);
}
