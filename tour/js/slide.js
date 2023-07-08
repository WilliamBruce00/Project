var slide = document.querySelector(".slides");
var i = document.querySelectorAll(".click1");
var count = -200;
let condition = true;

i[1].onclick = () => {
  count = count + 100;
  console.log(count);
  slide.style.top = `${count + "%"}`;
  if (count == 100) {
    slide.style.top = "-200%";
    count = -200;
  }
  if (count == -200) {
    one()
      .then(() => two())
      .then(() => three());
  }
  if (count == -100) {
    one()
      .then(() => two())
      .then(() => three());
  }
  if (count == 0) {
    one()
      .then(() => two())
      .then(() => three());
  }

  h[2].style.top = "-100px";
  s[2].style.top = "-20px";
  b[2].style.top = "-40px";
  h[0].style.top = "-100px";
  s[0].style.top = "-20px";
  b[0].style.top = "-40px";
  h[1].style.top = "-100px";
  s[1].style.top = "-20px";
  b[1].style.top = "-40px";

  clearInterval(clear);
  clear = setInterval(autoSlide, 6000);
};
i[0].onclick = () => {
  count = count - 100;
  console.log(count);
  slide.style.top = `${count + "%"}`;
  if (count == -300) {
    slide.style.top = "0%";
    count = 0;
  }
  if (count == -200) {
    one()
      .then(() => two())
      .then(() => three());
  }
  if (count == -100) {
    one()
      .then(() => two())
      .then(() => three());
  }
  if (count == 0) {
    one()
      .then(() => two())
      .then(() => three());
  }

  h[2].style.top = "-110px";
  s[2].style.top = "-20px";
  b[2].style.top = "-40px";
  h[0].style.top = "-110px";
  s[0].style.top = "-20px";
  b[0].style.top = "-40px";
  h[1].style.top = "-110px";
  s[1].style.top = "-20px";
  b[1].style.top = "-40px";

  clearInterval(clear);
  clear = setInterval(autoSlide, 6000);
};
// Auto

let autoSlide = () => {
  count = count + 100;
  console.log(count);
  slide.style.top = `${count + "%"}`;
  if (count == 100) {
    slide.style.top = "-200%";
    count = -200;
  }
  if (count == -200) {
    one()
      .then(() => two())
      .then(() => three());
  }
  if (count == -100) {
    one()
      .then(() => two())
      .then(() => three());
  }
  if (count == 0) {
    one()
      .then(() => two())
      .then(() => three());
  }
  if (count != 3000) {
    h[2].style.top = "-110px";
    s[2].style.top = "-20px";
    b[2].style.top = "-40px";
    h[0].style.top = "-110px";
    s[0].style.top = "-20px";
    b[0].style.top = "-40px";
    h[1].style.top = "-110px";
    s[1].style.top = "-20px";
    b[1].style.top = "-40px";
  }
};
if (condition) {
  clear = setInterval(autoSlide, 6000);
}

var s = document.querySelectorAll(".span");
var h = document.querySelectorAll(".h1");
var b = document.querySelectorAll(".btn");
let one = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (count == -200) {
        h[2].style.top = "0px";
        resolve();
      } else if (count == -100) {
        h[0].style.top = "0px";
        resolve();
      } else if (count == 0) {
        h[1].style.top = "0px";
        resolve();
      }
    }, 500);
  });
};
let two = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (count == -200) {
        s[2].style.top = "0px";
        resolve();
      } else if (count == -100) {
        s[0].style.top = "0px";
        resolve();
      } else if (count == 0) {
        s[1].style.top = "0px";
        resolve();
      }
    }, 250);
  });
};
let three = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (count == -200) {
        b[2].style.top = "0px";
        resolve();
      } else if (count == -100) {
        b[0].style.top = "0px";
        resolve();
      } else if (count == 0) {
        b[1].style.top = "0px";
        resolve();
      }
    }, 200);
  });
};
one()
  .then(() => two())
  .then(() => three());
