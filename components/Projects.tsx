import { projects } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

const Projects = () => {
  return (
    <article
      id="projects"
      className="scroll-mt-16 text-center p-4 mt-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800 dark:text-gray-100 tracking-tight">
      My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
        key={project.title}
        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-shadow rounded-2xl p-6 flex flex-col items-center"
        >
        <Image
          src={project.img}
          alt={project.title}
          className="mb-4 rounded-xl object-cover w-full h-48"
          width={500}
          height={300}
        />

        <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-50">
          {project.title}
        </h2>

        <p className="mb-3 text-gray-700 dark:text-gray-300">{project.des}</p>

        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          <strong className="font-semibold text-gray-800 dark:text-gray-200">Tech Stack:</strong>{" "}
          {project.stack.join(", ")}
        </p>

        <div className="flex gap-4 mt-auto">
          <Link
          href={project.live}
          target="_blank"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
          Live
          </Link>
          <Link
          href={project.github}
          target="_blank"
          className="px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition"
          >
          GitHub
          </Link>
        </div>
        </div>
      ))}
      </div>
    </article>
  )
}

export default Projects