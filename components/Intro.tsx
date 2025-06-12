import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

const Intro = () => {
	return (
    <article
      id="home"
      className="scroll-mt-16 text-center p-8 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white shadow-2xl"
    >
      <div className="mb-10 md:mt-14 md:mb-20">
      <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">
        Welcome to My Portfolio
      </h1>
      <p className="mt-6 md:text-xl max-w-2xl mx-auto text-white/90 leading-relaxed">
        Hello! My name is Suryakant Kumar, and I am a web developer based in
        India. I am a passionate developer with a knack for creating stunning
        web applications. I have been making websites since 2022, and I love
        exploring new technologies and frameworks. My journey in web
        development has been fueled by curiosity and a desire to learn.
      </p>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5">
        <a
        href="#contact"
        className="px-8 py-3 bg-white text-indigo-700 font-bold rounded-full shadow-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-200"
        >
        Contact Me
        </a>
        <a
        href="https://github.com/IM-Suryakant-Kumar"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-200"
        aria-label="GitHub"
        >
        <FaGithubAlt className="text-2xl text-gray-700" />
        <span className="hidden md:inline font-semibold">GitHub</span>
        </a>
        <a
        href="https://www.linkedin.com/in/suryakant-kumar/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-full shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-200"
        aria-label="LinkedIn"
        >
        <FaLinkedinIn className="text-2xl text-blue-700" />
        <span className="hidden md:inline font-semibold">LinkedIn</span>
        </a>
      </div>
      </div>
    </article>
	);
};

export default Intro;
