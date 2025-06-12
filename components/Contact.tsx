import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <article
      id="contact"
      className="scroll-mt-16 text-center p-8 mt-12 bg-secondary rounded-2xl border border-blue-100"
    >
      <h1 className="text-4xl font-extrabold mb-4 text-blue-900 drop-shadow-sm tracking-tight">
        Contact Me
      </h1>
      <p className="mb-8 text-gray-700 text-lg">
        Feel free to reach out via email or connect with me on LinkedIn and
        GitHub.
      </p>
      <div className="flex justify-center gap-8">
        <a
          href="mailto:ksuryakant43@gmail.com?subject=Contact%20from%20Portfolio"
          className="flex items-center gap-2 transition-all px-6 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold hover:bg-blue-600 hover:text-white shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Email"
        >
          <MdEmail size={22} />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/suryakant-kumar/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-all px-6 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold hover:bg-blue-600 hover:text-white shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
          LinkedIn
        </a>
        <a
          href="https://github.com/IM-Suryakant-Kumar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-all px-6 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold hover:bg-blue-600 hover:text-white shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="GitHub"
        >
          <FaGithub size={22} />
          GitHub
        </a>
      </div>
    </article>
  );
};

export default Contact;
