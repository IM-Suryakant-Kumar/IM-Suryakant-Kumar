const menuBar = document.querySelector(".menu-bar");
const menuList = document.querySelector(".menu-list");
const mainEle = document.querySelector("main");

function addMenuBar() {
	menuBar.innerHTML = `
    <div class="bar top"></div>
    <div class="bar middle"></div>
    <div class="bar bottom"></div>
  `;
}

function toggleMenuBarAndList() {
	menuBar.classList.toggle("active");
	menuList.classList.toggle("active");
}

function handleActiveClass(element) {
	// remove any active class from previous menu link and add to clicked link
	document.querySelector("li > a.active").classList.remove("active");
	element.classList.add("active");
}

function handleMenuListEvent(e) {
	toggleMenuBarAndList();
	handleActiveClass(e.target);
}

function handleScrollEvent() {
	const sections = document.querySelectorAll("section");

	for (let section of sections) {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;

		if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
			handleActiveClass(document.querySelector(`li a[href="#${section.id}"]`));
		}
	}
}

addMenuBar();
menuBar.addEventListener("click", toggleMenuBarAndList);
menuList.addEventListener("click", handleMenuListEvent);
window.addEventListener("scroll", handleScrollEvent);
