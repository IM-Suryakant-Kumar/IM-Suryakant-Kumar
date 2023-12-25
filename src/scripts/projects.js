import projectsData from "./projects.json" assert { type: "json" };
const cardsCont = document.querySelector(".cards-cont");

const projectCardsMaker = projectsData => {
	let cardsContHtml = "";

	projectsData.forEach(p => {
		let StackElements = "";
		p.stack.forEach(
			s =>
				(StackElements += `
    <span class="stack">${s}</span>
  `),
		);

		cardsContHtml += `
    <div class="card">
      <img src="${p.img}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>${p.des}</p>
      <div class="stacks-cont">
        <span>STACKS USED: </span>
        ${StackElements}
      </div>
      <div class="links">
        <a href="${p.github}" target="_blank">
          <div class="icon-cont">
            <img src="/src/assets/icons/github.svg" alt="">
          </div> 
          <span>GitHub</span>
        </a>
        <a href="${p.live}" target="_blank">
          <div class="icon-cont">
            <img src="/src/assets/icons/link.svg" alt="">
            </div>
          <span>Live link</span>
        </a>
      </div>
    </div>
  `;
	});

	// parsing html
	cardsCont.innerHTML = cardsContHtml;
};

(() => {
	if (cardsCont.classList[1] === "page") {
    projectCardsMaker(projectsData)
	} else {
    projectCardsMaker(projectsData.slice(0, 5))
  }
})();
