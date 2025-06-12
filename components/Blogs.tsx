import { blogs } from "@/lib/data"

const Blogs = () => {
  return (
    <article
      id="blogs"
      className="scroll-mt-16 text-center p-4 mt-6 bg-gradient-to-b from-white via-gray-50 to-gray-100"
    >
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800 drop-shadow">
      My Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => (
      <div
      key={blog.title}
      className="border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-6 rounded-2xl flex flex-col items-start"
      >
      <h2 className="text-2xl font-semibold mb-3 text-gray-700">
        {blog.title}
      </h2>
      <p className="mb-4 text-gray-600">{blog.desc}</p>
      <button
        className="mt-auto inline-block px-4 py-2 bg-blue-400 text-white rounded-lg font-medium cursor-not-allowed opacity-60"
        disabled
      >
        Read more
      </button>
      </div>
      ))}
      </div>
    </article>
  )
}

export default Blogs