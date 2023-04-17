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
animateTitle("OutisDeveloper | eaTurkish");

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
}, 1000);
// loading

// owl-carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 4,
    autoplay: false,
    margin: 30,
    loop: true,
    nav: true,
    navText: [
      "<i class='fas fa-long-arrow-alt-left'></i>",
      "<i class='fas fa-long-arrow-alt-right'></i>",
    ],
  });
});

// owl-carousel

// backtop
window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "10px";
  } else {
    backtop.style.bottom = "-100px";
  }
}
// backtop
