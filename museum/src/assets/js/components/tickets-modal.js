const openBtn = document.querySelectorAll("[data-open]");
const closeBtn = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openBtn) {
  el.addEventListener("click", function () {
    const modalName = this.dataset.open;
    document.getElementById(modalName).classList.add(isVisible);
  });
}

for (const el of closeBtn) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (e) => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

const bookingInputs = document.querySelectorAll(".form__input");

for (el of bookingInputs) {
  el.addEventListener("click", function () {
    const labelName = this.dataset.label;
    document.getElementById(labelName).classList.add("label-hide");
  });
}
