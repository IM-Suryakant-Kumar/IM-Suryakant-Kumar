import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { PiLinkedinLogo } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";

const Hero = () => {
	return (
		<article
			id="home"
			className="mt-15 bg-gradient-to-r from-white to-yellow-100 text-center flex flex-col justify-center items-center gap-6"
		>
			<h1 className="text-orange-400 text-3xl md:text-4xl font-cinzel font-semibold text-shadow-md leading-relaxed">
				Hi 👋. I'm Suryakant Kumar
			</h1>
			<h2 className="text-orange-500 text-xl md:text-2xl font-cinzel font-semibold text-shadow-md">
				A Frontend Web Developer
			</h2>
			<div className="flex justify-center items-center gap-6 my-8">
				<a href="https://www.linkedin.com/in/suryakant-kumar/" target="_blank">
					<PiLinkedinLogo size="2em" fill="orange" color="orange" />
				</a>
				<a href="https://github.com/IM-Suryakant-Kumar" target="_blank">
					<VscGithubAlt size="2em" fill="orange" color="orange" />
				</a>
				<a href="https://x.com/Suryakant_91" target="_blank">
					<FaXTwitter size="2em" fill="orange" color="orange" />
				</a>
				<a href="mailto:ksuryakant43@gmail.com" target="_blank">
					<MdMailOutline size="2em" fill="orange" color="orange" />
				</a>
			</div>
		</article>
	);
};

export default Hero;
