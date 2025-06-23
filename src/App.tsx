import {
  About,
	Blogs,
	Contact,
	Footer,
	Header,
	Hero,
	Projects,
	Skills,
} from "./components";

const App = () => {
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
};

export default App;
