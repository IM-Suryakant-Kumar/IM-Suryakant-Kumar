import { About, Blogs, Contact, Footer, Header, Hero, Projects, Skills } from "@/components";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Blogs />
			<Contact />
			<Footer />
		</>
	);
}
