const staticPortfolio = "suryakant-kumar-site-v1"
const assets = [
  "/",
  "/index.html",
  "/src/index.css",
  "/src/app.js",
  "/src/pages/projects.html",
  "/src/styles/project-page.css",
  "/src/scripts/projects-page.js",
  "/src/pages/blogs.html",
  "/src/styles/blog-page.css",
  "/src/styles/blog-page.js",
  "/src/styles/blogs.css",
  "/src/styles/footer.css",
  "/src/styles/hero.css",
  "/src/styles/navbar.css",
  "/src/styles/projects.css",
  "/src/styles/skills.css",
  "/src/styles/slide-animation.css",
  "/src/scripts/blogs.js",
  "/src/scripts/blogs.json",
  "/src/scripts/footer.js",
  "/src/scripts/hero.js",
  "/src/scripts/menu-bar.js",
  "/src/scripts/observer.js",
  "/src/scripts/projects.js",
  "/src/scripts/projects.json",
  "/src/assets/banner.svg",
  "/src/assets/icons/blogs.svg",
  "/src/assets/icons/code.svg",
  "/src/assets/icons/email.svg",
  "/src/assets/icons/github.svg",
  "/src/assets/icons/link.svg",
  "/src/assets/icons/linkedin.svg",
  "/src/assets/icons/phone.svg",
  "/src/assets/icons/twitter.svg"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticPortfolio).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})