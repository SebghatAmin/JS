// const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// const words = ["asap", "byob", "rsvp", "diy"];

// const doubles = numbers.map(function (num) {
//   return num * 2;
// });

// const numDetail = numbers.map(function (n) {
//   return {
//     value: n,
//     isEven: n % 2 === 0,
//   };
// });

// const abbrevs = words.map(function (word) {
//   return word.toUpperCase().split("").join(".");
// });

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
// numbers.forEach(function (num) {
//   console.log(num * 2);
// });

function printTriple(n) {
  console.log(n * 3);
}
numbers.forEach(printTriple);
