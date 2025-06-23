import { blogs } from "../utils";

const Blogs = () => {
	return (
		<article
			id="blogs"
			className="p-4 flex flex-col justify-center items-center text-center gap-4"
		>
			<h2 className="title">Blogs</h2>
			<div className="flex flex-wrap justify-center gap-10 w-full max-w-3xl">
        {blogs.map((blog) => (
          <a
            key={blog.title}
            // href={blog.link}
            target="_blank"
            className="w-xs p-8 border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center gap-4"
          >
            <h3 className="text-xl font-cinzel font-semibold">{blog.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-md">{blog.des}</p>
          </a>
        ))}
      </div>
		</article>
	);
};

export default Blogs;
