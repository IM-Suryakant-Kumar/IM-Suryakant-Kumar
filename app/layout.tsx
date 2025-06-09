import type { Metadata } from "next";
import { Cinzel, Exo_2 } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/contexts/theme-context";
import ThemeSwitch from "@/components/ThemeSwitch";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cinzel = Cinzel({
	variable: "--font-cinzel",
	subsets: ["latin"],
});

const exo = Exo_2({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Home | Suryakant Kumar",
	keywords: [
		"Suryakant Kumar",
		"Web Developer",
		"Portfolio",
		"Blog",
		"Projects",
		"Next.js",
		"React",
		"JavaScript",
		"TypeScript",
		"Node.js",
		"Express.js",
		"MongoDB",
		"Prisma",
		"Redux",
		"Redux-Toolkit",
		"TailwindCSS",
		"Web Development",
		"Frontend Developer",
		"Backend Developer",
		"Full Stack Developer",
	],
	description:
		"Welcome to the personal website of Suryakant Kumar, a passionate web developer. Explore my portfolio, blog posts, and projects focused on modern web technologies and development insights.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${cinzel.variable} ${exo.className} antialiased bg-gray-100 dark:bg-gray-900`}
			>
				<ThemeContextProvider>
					<Header />
					{children}
					<Footer />
					<ThemeSwitch />
				</ThemeContextProvider>
			</body>
		</html>
	);
}
