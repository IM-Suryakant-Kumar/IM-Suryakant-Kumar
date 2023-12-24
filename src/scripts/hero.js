import "./observer.js";
const profession = document.querySelector(".profession");

const professionText = "Web Developer";
let i = 0;
let isTyping = true;

(async function typing() {
	if (i < professionText.length && isTyping) {
		profession.textContent += professionText.charAt(i);
		i++;
		setTimeout(typing, 50);
	} else if (!isTyping) {
		profession.textContent = professionText.substring(0, i);
		i--;
		if (i < 0) {
			isTyping = true;
		}
		setTimeout(typing, 50);
	} else {
		isTyping = false;
		setTimeout(typing, 2000);
	}
})();
