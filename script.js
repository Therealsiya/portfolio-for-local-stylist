const container = document.getElementById("side-container");
const cont = document.getElementById("container");
function showSideBar() {
  container.classList.add("active");
}

function hideSideBar() {
  container.classList.remove("active");
}

function openImg() {
  const bgImg = document.getElementById("bg-img1");
  cont.classList.add("active");
  bgImg.style.height = "1000px";
  bgImg.style.width = "1000px";
}
//auto generate text
let text = document.getElementById("text");
let index = 0;
let oldText = text.innerHTML;

function generateText() {
  text.innerHTML = oldText.slice(0, index);
  index++;

  if (index > oldText.length - 1) {
    index = 0;
  }

  //setInterval(generateText,  100);

  // console.log(alpha)
}
setInterval(generateText, 98);
