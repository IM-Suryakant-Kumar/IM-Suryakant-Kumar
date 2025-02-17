const menuBar = document.querySelector(".menu-bar");
const menuList = document.querySelector(".menu-list");

// menu-bar start
menuBar.innerHTML = `
  <div class="bar top"></div>
  <div class="bar middle"></div>
  <div class="bar bottom"></div>
`;

menuBar.addEventListener("click", (e) => {
	menuBar.classList.toggle("active");
	menuList.classList.toggle("active");
});
// menu-bar end

// menu-list start
menuList.addEventListener("click", (e) => {
	menuBar.classList.toggle("active");
	menuList.classList.toggle("active");

  // remove any active class from previous menu link and add to clicked link
  document.querySelector("li > a.active").classList.remove("active");
  e.target.classList.add("active");
});
// menu-list end
