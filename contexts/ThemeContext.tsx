"use client";

import { createContext, useState, useEffect, FC, useContext } from "react";

export type Theme = "light" | "dark";

export interface ThemeContextType {
	theme: Theme;
	toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

interface Props {
	children: React.ReactNode;
}

const ThemeContextProvider: FC<Props> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>("light");

	const toggleTheme = () => {
		setTheme((prevTheme) => {
			if (prevTheme === "light") {
				localStorage.setItem("theme", "dark");
				return "dark";
			} else {
				localStorage.setItem("theme", "light");
				return "light";
			}
		});
	};

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") as Theme | null;
		if (savedTheme) {
			setTheme(savedTheme);

			if (savedTheme === "dark") {
				document.documentElement.classList.add("dark");
			}
		} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		}
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeContextProvider");
	}
	return context;
};

export default ThemeContextProvider;
