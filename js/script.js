console.log("Hello World");

const myName = "Abuzar Khan";
console.log(myName);

const h1El = document.querySelector(".primary-header");
console.log(h1El);

// h1El.addEventListener("click", function () {
//   h1El.textContent = myName;
//   h1El.style.backgroundColor = "red";
//   h1El.style.padding = "8rem";
// });

//Make Copyright year dynamic
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//Make Mobile Navigation work
const NavbtnEl = document.querySelector(".mobile-nav");
const headerEl = document.querySelector(".main-header");
NavbtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//Implementing Smooth scrolling
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    console.log(e);
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
