import { skills } from "@/lib/data";

const Skills = () => {
	return (
    <article
      id="skills"
      className="scroll-mt-16 text-center p-6 bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-xl"
    >
      <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
        My Skills
      </h1>
      <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
        Here are some of the skills I have acquired over the years:
      </p>
      <ul className="flex gap-4 flex-wrap justify-center max-w-3xl mx-auto">
        {skills.map((skill) => (
          <li
            key={skill}
            className="text-base font-medium mb-2 px-5 py-2 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-200 border border-blue-200 dark:border-blue-800"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
	);
};

export default Skills;
