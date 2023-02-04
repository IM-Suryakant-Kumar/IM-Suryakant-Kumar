const linkPrimary = document.querySelector(".primary-link");
const linkSecondary = document.querySelector(".secondary-link");

// Primary Link

linkPrimary.addEventListener("mousedown", () => {
    document.querySelector('.primary-link').classList.add('link-clicked');
})

linkPrimary.addEventListener("mouseup", () => {
    document.querySelector('.primary-link').classList.remove('link-clicked');
})

// Secondary Link

linkSecondary.addEventListener("mousedown", () => {
    document.querySelector('.secondary-link').classList.add('link-clicked');
})

linkSecondary.addEventListener("mouseup", () => {
    document.querySelector('.secondary-link').classList.remove('link-clicked');
})