console.log("this is some code");
const btn = document.querySelector("#clicker");
btn.onclick = function () {
  console.log("YOU CLICKED ME! GO AWAY!");
};

btn.onclick = great;
btn.ondblclick = () => {
  console.log("DOUBLE CLICK!");
};

function great() {
  alert("HEY BUDDY!");
}
