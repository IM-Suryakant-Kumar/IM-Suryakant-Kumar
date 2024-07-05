import blogsData from "./blogs-data.js";
const blogCardsCont = document.querySelector(".blog-cards-cont");

const blogCardsMaker = blogsData => {
	let blogCardsContHtml = "";

	let id = 0;
	blogsData.forEach(b => {
		const href = b.link !== "coming soon!" ? `href="${b.link}"` : "";

		blogCardsContHtml += `
      <a ${href} class="blog-card" data-id="id-${id}">
        <div class="to-hover" id="id-${id}"></div>
        <div class="arrow">→</div>
        <h3 class="blog-title">${b.title}</h3>
        <p class="blog-desc">${b.desc}</p>
      </a>
    `;

		id++;
	});

	blogCardsCont.innerHTML = blogCardsContHtml;
};

(() => {
	if (blogCardsCont.classList[1] === "page") {
    blogCardsMaker(blogsData)
	} else {
    blogCardsMaker(blogsData.slice(0, 5))
	}
})();

document.addEventListener("mouseover", e => {
	const target = e.target;
	const datasetId = target.dataset?.id;
	const toHoverEle = document.querySelector(`#${datasetId}`);

	if (datasetId) {
		toHoverEle.classList.add("hover");

		target.addEventListener("mouseleave", () => {
			toHoverEle.classList.remove("hover");
		});
	}
});
