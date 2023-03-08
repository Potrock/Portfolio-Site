import Courses from "../components/courses/Courses";
import Header from "../components/header/Header";
import Hero from "../components/Hero";
import Projects from "../components/projects/Projects";

export default function Home() {
	return (
		<>
			<main>
				<Hero />
				<div className="mb-6">
					<h2 className="text-4xl font-medium text-white">
						Projects
					</h2>
				</div>
				<Projects />
				<div className="mb-6">
					<h2 className="text-4xl font-medium text-white">Courses</h2>
				</div>
				<Courses />
			</main>
		</>
	);
}
