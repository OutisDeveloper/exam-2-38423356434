// title-animation //
function recursiveAnimateTitle(string) {
  let firstLetter = string[0];
  let title = document.querySelector("title");
  title.innerHTML += firstLetter;
  if (string.length > 1) {
    setTimeout(function () {
      recursiveAnimateTitle(string.substring(1));
    }, 100);
  }
}
function animateTitle(string) {
  document.querySelector("title").innerHTML = "";
  recursiveAnimateTitle(string);
}
animateTitle("OutisDeveloper | eaTurksih");

window.addEventListener("scroll", function () {
  shrink();
});
// title-animation //

// navbar-shrink //
let div = document.getElementById("navbar__shrink");
function shrink() {
  if (scrollY > 100) {
    div.classList.add("navbar-shrink");
  } else {
    div.classList.remove("navbar-shrink");
  }
}
// navbar-shrink //

// loading
const loading = document.getElementById("loading");
setTimeout(() => {
  loading.classList.add("loading-none");
}, 1500);
