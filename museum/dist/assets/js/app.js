console.log("Hello from modal");
const progress = document.querySelector(".progress");

progress.addEventListener("input", function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #fff ${value}%, white 100%)`;
});
console.log("Hello from appjs");