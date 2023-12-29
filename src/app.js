import "/src/scripts/hero.js";
import "/src/scripts/menu-bar.js";
import "/src/scripts/projects.js";
import "/src/scripts/blogs.js";
import "/src/scripts/footer.js";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
