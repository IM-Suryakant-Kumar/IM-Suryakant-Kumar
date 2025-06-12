import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
    <Intro />
    <Skills />
    <About />
    <Projects />
    <Blogs />
    <Contact />
    </>
  );
}
