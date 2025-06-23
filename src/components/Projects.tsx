import { projects } from "../utils";

const Projects = () => {
	return (
		<article
			id="projects"
			className="p-4 flex flex-col justify-center items-center gap-4"
		>
			<h2 className="title">Projects</h2>
			<div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-6">
				{projects.map((project) => (
					<div
						key={project.title}
						className="border-2 border-gray-300 rounded-md overflow-hidden flex flex-col items-start gap-2 p-4"
					>
						<img
							className="w-full object-cover"
							src={project.img}
							alt={project.title}
						/>
						<h2 className="text-xl font-cinzel font-semibold">{project.title}</h2>
						<p className="text-md text-gray-600">{project.des}</p>
						<div className="text-gray-600 text-xs">
							{project.stack.map((s) => (
								<div
									key={project.title + s}
									className="inline-block mr-2 mb-1 px-2 py-1 rounded border-2 border-gray-300"
								>
									{s}
								</div>
							))}
						</div>
						<div className="w-full flex justify-between mt-4">
							<a
								className="inline-block bg-orange-600 hover:bg-orange-700 text-primary border-2 border-orange-400 font-bold px-4 py-1 text-sm rounded-xs ease-in-out duration-300"
								href={project.live}
								target="_blank"
							>
								Live
							</a>
							<a
								className="inline-block text-orange-600 hover:text-orange-700 font-bold border-2 border-orange-400 hover:border-orange-600 px-4 py-1 text-sm rounded-xs ease-in-out duration-300"
								href={project.github}
								target="_blank"
							>
								Code
							</a>
						</div>
					</div>
				))}
			</div>
		</article>
	);
};

export default Projects;
