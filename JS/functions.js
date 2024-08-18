const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ["asap", "byob", "rsvp", "diy"];

const doubles = numbers.map(function (num) {
  return num * 2;
});

const numDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  };
});

const abbrevs = words.map(function (word) {
  return word.toUpperCase().split("").join(".");
});

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
numbers.forEach(function (num) {
  console.log(num * 2);
});

function printTriple(n) {
  console.log(n * 3);
}
numbers.forEach(printTriple);
const square = (x) => {
  return x * x;
};
const isEven = (num) => {
  return num % 2 === 0;
};

const multiply = (x, y) => {
  return x * y;
};

const greet = () => {
  console.log("HI!");
};

const nums = [34, 35, 67, 54, 109, 102, 32, 9];
const odds = nums.filter((n) => n % 2 === 1);

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Practchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone:The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patric Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "Short Stories"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["william Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];

const goodBooks = books.filter((b) => b.rating <= 4);

const fictionBooks = books.filter((b) => (b.genres = "fiction"));

const betterBook = books.slice().sort((a, b) => a.rating - b.rating);

const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((a, b) => {
  return a * b;
});

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const maxGrad = grades.reduce((max, currVal) => {
  if (currVal > max) return currVal;
  return max;
});

const maxgrade = grades.reduce((max, curVal) => {
  return Math.max(max, curVal);
});

const mingrade = grades.reduce((min, curVal) => {
  return Math.min(min, curVal);
});
