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

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
