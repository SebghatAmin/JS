// const btn = document.querySelector("button");
// btn.onclick = function () {
//   console.log("YOU CLICKED ME");
// };

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  alert("CLICKED!!!");
});

btn.addEventListener("click", function () {
  console.log("SECOND THING!!");
});
btn.addEventListener("mouseover", function () {
  btn.innerText = "STOP TOUCHING ME!";
});
btn.addEventListener("mouseout", function () {
  btn.innerText = "CLICK ME!";
});

window.addEventListener("scroll", function () {
  console.log("Stop scrolling!!");
});
