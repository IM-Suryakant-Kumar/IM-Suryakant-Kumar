import { links } from "@/lib";
import Menubar from "./Menubar";

const Header = () => {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-primary text-secondary border-b-2 border-gray-200">
			<nav className="w-full max-w-7xl mx-auto h-15 px-2 flex justify-between items-center">
				<h1 className="text-orange-500 text-2xl md:text-3xl font-cinzel font-bold">
					Suryakant
				</h1>
				<Menubar />
				<ul className="hidden md:flex items-center gap-4">
					{links.map(({ name, href }) => (
						<li key={href} className="hidden md:inline-block">
							<a
								className="px-4 py-2 text-secondary hover:text-orange-600 text-lg ease-in-out duration-300"
								href={href}
							>
								{name}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
