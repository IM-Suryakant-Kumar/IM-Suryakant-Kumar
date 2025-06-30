import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { PiLinkedinLogo } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";

const Contact = () => {
	return (
		<article
			id="contact"
			className="p-4 flex flex-col justify-center items-center text-center gap-4"
		>
			<h2 className="title">Contact Me</h2>
			<p className="text-lg">
				Feel free to reach out to me via email or connect with me on social
				media.
			</p>
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

export default Contact;
