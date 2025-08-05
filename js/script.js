const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((drop) => {
  const btn = drop.querySelector(".dropdown-btn");
  const content = drop.querySelector(".dropdown-content");

  btn.addEventListener("click", () => {
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("navMenu");

  toggle.addEventListener("click", function () {
    nav.classList.toggle("open");
    console.log("Menu toggled:", nav.classList.contains("open"));
  });
});
