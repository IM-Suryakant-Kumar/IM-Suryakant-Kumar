const menuBar = document.querySelector(".menu-bar");

menuBar.addEventListener("click", () => {
  const showMenu = document.querySelector(".menu");
  showMenu.classList.toggle("show-menu");
  menuBar.classList.toggle("active");
});
