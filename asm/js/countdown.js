// var setTime = [];
// var arr = [];
// for (var i = 1; i <= setTime.length; i++) {
//   arr.push(
//     parseInt(
//       (document.querySelector(".time-question").children[i].innerHTML =
//         setTime[i - 1])
//     )
//   );
// }
// arr.splice(2, 1);

clear = setInterval(() => {
  document.querySelector(".time-question").children[5].innerHTML =
    document.querySelector(".time-question").children[5].innerHTML == 0
      ? (document.querySelector(".time-question").children[5].innerHTML = 9)
      : parseInt(
          document.querySelector(".time-question").children[5].innerHTML
        ) - 1;
  if (document.querySelector(".time-question").children[5].innerHTML == 9) {
    document.querySelector(".time-question").children[4].innerHTML =
      document.querySelector(".time-question").children[4].innerHTML == 0
        ? (document.querySelector(".time-question").children[4].innerHTML = 5)
        : parseInt(
            document.querySelector(".time-question").children[4].innerHTML
          ) - 1;
  }
  if (
    document.querySelector(".time-question").children[4].innerHTML == 5 &&
    document.querySelector(".time-question").children[5].innerHTML == 9
  ) {
    document.querySelector(".time-question").children[2].innerHTML =
      document.querySelector(".time-question").children[2].innerHTML == 0
        ? (document.querySelector(".time-question").children[2].innerHTML = 9)
        : parseInt(
            document.querySelector(".time-question").children[2].innerHTML - 1
          );
  }
  document.querySelector(".time-question").children[2].innerHTML == 9
    ? (document.querySelector(".time-question").children[1].innerHTML = 0)
    : "";
  document.querySelector(".time-question").children[2].innerHTML == 0 &&
  document.querySelector(".time-question").children[5].innerHTML == 0 &&
  document.querySelector(".time-question").children[4].innerHTML == 0 &&
  document.querySelector(".time-question").children[1].innerHTML == 0
    ? clearInterval(clear)
    : "";
}, 1000);
