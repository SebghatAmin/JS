// const willGetYouADog = new Promise((resolve, reject) => {
//   const rand = Math.random();
//   if (rand < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// willGetYouADog.then(() => {
//   console.log("YAY WE GOT A DOG");
// });
// willGetYouADog.catch(() => {
//   console.log(":(NO DOG");
// });

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.3) {
        reject();
      } else {
        resolve();
      }
    }, 3000);
  });
};

fakeRequest()
  .then(() => {
    console.log("REQUEST WORKED");
  })
  .catch(() => {
    console.log("REQUEST FAILED");
  });
