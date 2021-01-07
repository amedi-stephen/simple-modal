const modal = document.querySelector("#modalSection");
const closeBtn = document.querySelector(".closeBtn");
const btn = document.querySelector("#btnModal");

btn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
