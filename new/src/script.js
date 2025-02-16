const menuBar = document.querySelector(".menu-bar");

// menu-bar start
menuBar.innerHTML =  `
  <div class="bar top"></div>
  <div class="bar middle"></div>
  <div class="bar bottom"></div>
`

menuBar.addEventListener("click", (e) => {
  menuBar.classList.toggle("active");
})
// menu-bar end