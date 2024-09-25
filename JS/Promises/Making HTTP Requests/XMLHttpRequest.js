// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener("load", () => {
//   console.log("IT WORKED!!!");
// });

// firstReq.addEventListener("error", () => {
//   console.log("ERROR!!!!");
// });
// firstReq.open("GET", "https://www.google.com/");
// firstReq.send();
// console.log("Request Sent!");
const x = fetch("https://swapi.dev/api/planets/")
  .then((response) => {
    if (response.ok) {
      console.log("IT WORKED!!!");
    } else {
      console.log("ERROR!!!!");
    }
  })
  .catch(() => {
    console.log("ERROR!!!!");
  });

console.log("Request Sent!");
