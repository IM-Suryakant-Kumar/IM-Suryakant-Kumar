const slideElements = document.querySelectorAll(".slide");

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		// console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});

// slide animation
slideElements.forEach(el => observer.observe(el));

export default observer;
