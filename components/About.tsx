const About = () => {
	return (
		<article
			id="about"
			className="p-4 flex flex-col justify-center items-center text-center gap-4"
		>
			<h2 className="title">About Me</h2>
			<div className="max-w-4xl mx-auto ">
				<p className="mt-10 text-gray-600 text-md md:text-lg">
          I have been making websites since 2022, starting with simple HTML and CSS
          pages. Over the years, I have expanded my skills to include JavaScript,
          React, and Node.js, allowing me to build dynamic and interactive web 
          applications.
				</p>
				<p className="mt-4 text-gray-600 text-md md:text-lg">
					I know how to create responsive designs that work well on both
          desktop and mobile devices, ensuring a great user experience across all
          platforms and RestAPI integration for seamless data exchange.
				</p>
				<p className="mt-6 text-gray-600 text-md md:text-lg">
          I also know how to use Git and GitHub for version control, which has
          helped me collaborate with other developers and manage my projects more
          effectively.
				</p>
			</div>
		</article>
	);
};

export default About;
