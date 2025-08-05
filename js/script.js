const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((drop) => {
  const btn = drop.querySelector(".dropdown-btn");
  const content = drop.querySelector(".dropdown-content");

  btn.addEventListener("click", () => {
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});
