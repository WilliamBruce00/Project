var label = document.querySelector("label");
var count = 0;
label.onclick = () => {
  count++;
  if (count % 2 != 0) {
    document.querySelector(".menu-right-left").style.display = "block";
  } else {
    document.querySelector(".menu-right-left").style.display = "none";
  }
};
