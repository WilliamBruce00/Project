let count = 0;
document.querySelector(".controls").onclick = (e) => {
  console.log(count);
  e.target.className == "fa-solid fa-angle-right"
    ? ((count += 20),
      (document.querySelector(".main__row3--product").style.left = `${
        "-" + count + "%"
      }`))
    : ((count -= 20),
      (document.querySelector(".main__row3--product").style.left = `${
        "-" + count + "%"
      }`));
  count == 80
    ? ((document.querySelector(".main__row3--product").style.left = "0%"),
      (count = 0))
    : count == -20
    ? ((document.querySelector(".main__row3--product").style.left = "-60%"),
      (count = 60))
    : "";
};
