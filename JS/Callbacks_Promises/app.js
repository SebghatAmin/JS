const btn = document.querySelector("button");
btn.style.transform = `translateX(100px)`;
setTimeout(() => {
  btn.style.transform = `translateX(100px)`;
  setTimeout(() => {
    btn.style.transform = `translateX(200px)`;
    setTimeout(() => {
      btn.style.transform = `translateX(300px)`;
      setTimeout(() => {
        btn.style.transform = `translateX(400px)`;
        setTimeout(() => {
          btn.style.transform = `translateX(500px)`;
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

const moveX = (element, amount, delay, callback) => {
  setTimeout(() => {
    element.style.transform = `translateX(${amount}px)`;
    if (callback) callback();
  }, delay);
};

moveX(btn, 100, 1000, () => {
  moveX(btn, 200, 1000, () => {
    moveX(btn, 300, 1000, () => {
      moveX(btn, 400, 1000, () => {
        moveX(btn, 500, 1000);
      });
    });
  });
});
