import type { Metadata } from "next";
import { Cinzel, Josefin_Sans } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const josefin = Josefin_Sans({
	variable: "--font-primary",
	subsets: ["latin"],
});

const cinzel = Cinzel({
	variable: "--font-secondary",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Home | Suryakant",
	keywords: [
		"personal website",
		"projects",
		"blogs",
		"skills",
		"experiences",
		"Suryakant",
		"Next.js",
		"TypeScript",
		"web development",
		"portfolio",
	],
	description:
		"This is my personal website. It is built with Next.js and TypeScript. It showcases my projects, blogs skills, and experiences. Feel free to explore!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${josefin.variable} ${cinzel.variable} font-primary antialiased bg-primary text-gray-600 dark:bg-secondary dark:text-primary mt-15 `}
			>
				<ThemeContextProvider>
					<Header />
					{children}
          <Footer />
				</ThemeContextProvider>
			</body>
		</html>
	);
}
