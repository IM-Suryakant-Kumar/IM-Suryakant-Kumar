import { skills } from "../utils";

const Skills = () => {
	return (
		<article
			id="skills"
			className="p-4 flex flex-col justify-center items-center text-center gap-6"
		>
			<h2 className="title">Skills</h2>
			<ul className="max-w-2xl mx-auto flex flex-wrap justify-center items-center gap-4 mt-6">
				{skills.map((skill) => (
					<li key={skill} className="text-gray-600 text-sm md:text-base border-2 border-gray-300 rounded-sm px-4 py-2">
						{skill}
					</li>
				))}
			</ul>
		</article>
	);
};

export default Skills;
