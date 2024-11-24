const button = document.querySelector("button");
const nav = document.querySelector("nav");
const lis = nav.querySelectorAll("li");

button.addEventListener("click", () => {
  if (nav.classList.toggle("active")) {
    lis.forEach((li, idx) => {
      li.style.transition = `0.2s linear ${idx * 0.15}s`;
    });
  } else {
    lis.forEach((li, idx) => {
      li.style.transition = `0.1s linear ${(lis.length - 1 - idx) * 0.15}s`;
    });
  }
});
