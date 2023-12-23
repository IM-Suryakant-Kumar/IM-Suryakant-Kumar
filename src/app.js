import "./scripts/hero.js"

const menuBar = document.querySelector(".menu-bar");

menuBar.addEventListener("click", () => {
	const menu = document.querySelector(".menu");
	menuBar.classList.toggle("active");
	menu.classList.toggle("active");
});
