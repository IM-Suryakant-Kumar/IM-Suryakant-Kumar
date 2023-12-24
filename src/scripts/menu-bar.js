const menuBar = document.querySelector(".menu-bar");
const menu = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
	menuBar.classList.toggle("active");
	menu.classList.toggle("active");
});

menu.addEventListener("click", () => {
	menuBar.classList.toggle("active");
	menu.classList.toggle("active");
});
