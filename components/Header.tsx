import { links } from "@/lib/data";
import Link from "next/link";
import MenuBar from "./MenuBar";

const Header = () => {
	return (
		<header className="bg-secondary shadow-sm px-2 md:px-4 fixed top-0 left-0 w-full z-50">
			<nav className="w-full max-w-7xl mx-auto h-16 flex justify-between items-center">
				<Link
					href="/"
					className="text-logo text-2xl font-secondary font-extrabold flex items-center gap-2 tracking-wider drop-shadow-sm"
				>
					<span className="font-primary font-bold text-lg">&lt;/</span>
					Suryakant
					<span className="font-primary font-bold text-lg">&gt;</span>
				</Link>
				<ul className="hidden md:flex gap-3 lg:gap-6">
					{links.map((link) => (
						<li key={link.hash}>
							<Link
								className="relative inline-block text-gray-800 text-lg font-semibold px-2 py-1 transition-colors duration-300 hover:text-logo after:content-[''] after:block after:w-0 after:h-0.5 after:bg-logo after:transition-all after:duration-300 hover:after:w-full after:mt-1"
								href={link.hash}
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
				<MenuBar />
			</nav>
		</header>
	);
};

export default Header;
