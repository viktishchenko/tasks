console.log("дискорд ViktorT#2417");

// ----------------main ficha ☜(ﾟヮﾟ☜)--------------

const fullscreen = document.querySelector(".fullscreen");
fullscreen.addEventListener("click", toggleScreen);
function toggleScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  }
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
}

// ----------------Add Active ☜(ﾟヮﾟ☜)--------------

function addActive() {
  const btn = document.querySelectorAll(".btn");

  btn.forEach((el) =>
    el.addEventListener("click", function () {
      const current = document.getElementsByClassName("btn-active");
      current[0].className = current[0].className.replace(" btn-active", "");
      this.className += " btn-active";
    })
  );
}
addActive();

// ----------------Get Next Pic ☜(ﾟヮﾟ☜)--------------

const nextPic = document.querySelector(".btn-next");
const nextImg = document.querySelector("img");
const editor = document.querySelector(".editor");
const baseUrl =
  "https://raw.githubusercontent.com/viktishchenko/tasks/momentum/momentum/assets/images/";

const imgSet = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
];

function getPath() {
  const today = new Date();
  hour = today.getHours();
  if (hour < 6) {
    return baseUrl + "night/";
  } else if (hour < 12) {
    return baseUrl + "morning/";
  } else if (hour < 18) {
    return baseUrl + "day/";
  } else {
    return baseUrl + "evening/";
  }
}
getPath();

let i = 0;
function getNextPic() {
  const idx = i % imgSet.length;
  nextImg.src = getPath() + imgSet[idx];
  i++;
}

nextPic.addEventListener("click", getNextPic);

// ----------------Load Pic ☜(ﾟヮﾟ☜)--------------

const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener("change", function (e) {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    nextImg.src = reader.result;
    nextImg.innerHTML = "";
    nextImg.append(img);
  };
  reader.readAsDataURL(file);
});

// ----------------Download Pic ☜(ﾟヮﾟ☜)--------------

const input = document.querySelectorAll(".filters input");

function downloadPic() {
  const download = document.querySelector(".btn-save");

  download.addEventListener("click", () => {
    const canvas = document.createElement("canvas");
    const img = new Image();
    img.setAttribute("crossOrigin", "anonymous");
    img.src = nextImg.src;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      let filterArr = [];
      filterArr = window.getComputedStyle(nextImg).filter;
      ctx.filter = filterArr;
      ctx.drawImage(img, 0, 0);
      let link = document.createElement("a");
      link.download = "picture.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
      link.delete;
    };
  });
}
downloadPic();

// ----------------Set Filter ☜(ﾟヮﾟ☜)--------------

function setFilter() {
  nextImg.style.setProperty(
    `--${this.name}`,
    this.value + this.dataset.sizing || ""
  );
  const outputs = this.nextElementSibling;
  outputs.innerHTML = this.value;
}
input.forEach((el) => el.addEventListener("input", setFilter));

// ----------------Reset Filter ☜(ﾟヮﾟ☜)--------------

const reset = document.querySelector(".btn-reset");

function resetFilter() {
  for (let i = 0; i < input.length; i++) {
    input[i].value = input[i].getAttribute("value");
    const outputs = input[i].nextElementSibling;
    outputs.innerHTML = input[i].value;
    nextImg.style.removeProperty(`--${input[i].name}`);
  }
}

reset.addEventListener("click", resetFilter);
