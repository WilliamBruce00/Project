let quantity = document.querySelectorAll(".quantity");
let disactive = document.querySelector(".disactive");
let active = document.querySelector(".active");
let condition = true;
let Obj = [
  {
    img: localStorage.getItem("img"),
    title: localStorage.getItem("title"),
    price: localStorage.getItem("price"),
    time: localStorage.getItem("time"),
  },
];
function priceChildren(children) {
  return (children.replaceAll(".", "") / 2)
    .toLocaleString()
    .replaceAll(",", ".");
}
function priceBaby(baby) {
  return (baby.replaceAll(".", "") / 5).toLocaleString().replaceAll(",", ".");
}

function Sum(
  adult,
  adultQuantity,
  children,
  childrenQuantity,
  baby,
  babyQuantity
) {
  this.adultQuantity = adultQuantity.onclick = () => {
    return parseInt(adultQuantity.value);
  };
  this.childrenQuantity = childrenQuantity.onclick = () => {
    return parseInt(childrenQuantity.value);
  };
  this.babyQuantity = babyQuantity.onclick = () => {
    return parseInt(babyQuantity.value);
  };
  this.adult = () => {
    return adult.replaceAll(".", "");
  };
  this.children = () => {
    return children.replaceAll(".", "");
  };
  this.baby = () => {
    return baby.replaceAll(".", "");
  };
  this.sumAdult = () => {
    return this.adultQuantity() * this.adult();
  };
  this.sumChildren = () => {
    return this.childrenQuantity() * this.children();
  };
  this.sumBaby = () => {
    return this.babyQuantity() * this.baby();
  };
  this.sum = () => {
    return (this.sumAdult() + this.sumBaby() + this.sumChildren())
      .toLocaleString()
      .replaceAll(",", ".");
  };
}
var sum = new Sum(
  Obj[0].price,
  quantity[0],
  priceChildren(Obj[0].price),
  quantity[1],
  priceBaby(Obj[0].price),
  quantity[2]
);

quantity[0].onclick = function () {
  document.querySelector(".t").innerHTML = sum.sum();
  document.querySelector("#sale").innerHTML = (
    parseInt(sum.sum().replaceAll(".", "")) / 2
  )
    .toLocaleString()
    .replaceAll(",", ".");
};

quantity[1].onclick = function () {
  document.querySelector(".t").innerHTML = sum.sum();
  document.querySelector("#sale").innerHTML = (
    parseInt(sum.sum().replaceAll(".", "")) / 2
  )
    .toLocaleString()
    .replaceAll(",", ".");
};

quantity[2].onclick = function () {
  document.querySelector(".t").innerHTML = sum.sum();
  document.querySelector("#sale").innerHTML = (
    parseInt(sum.sum().replaceAll(".", "")) / 2
  )
    .toLocaleString()
    .replaceAll(",", ".");
};

let html = Obj.map((item) => {
  return `<div class="book-contact">
            <p>Hỗ trợ dịch vụ <b style="color: #036;">1900 1808</b></p>
        </div>
        <div class="book-img">
            <img src=${item.img}>
        </div>
        <div class="book-info">
            <h3 style="color: #036;">${item.title}</h3>
            <p><i class="fa-solid fa-calendar-days"></i> Thời gian: <b>${item.time.replace(
              "Thời gian:",
              ""
            )}</b></p>
            <p><i class="fa-solid fa-user-secret"></i> Giá người lớn: <b>${
              item.price
            } đ</b></p>
            <p><i class="fa-sharp fa-solid fa-child"></i>  Giá trẻ em: <b>${priceChildren(
              item.price
            )} đ</b></p>
            <p><i class="fa-solid fa-user"></i> Giá em bé: <b>${priceBaby(
              item.price
            )} đ</b></p>
            <h2>Tổng:<span style="color: #ff891e;" class="t">0</span></h2>
        </div>`;
});

disactive.onclick = () => {
  disactive.style.backgroundColor = "#5cb85c";
  active.style.backgroundColor = "#bfe2bf";
  var div = document.createElement("div");
  div.setAttribute("class", "add");
  var pay = document.createElement("h2");
  var brick = document.createElement("hr");
  var contentPay = document.createTextNode("Thanh toán");
  var p = document.createElement("p");
  var p2 = document.createElement("p");
  var contentP2 = document.createTextNode("Cần thanh toán:");
  var contentP = document.createTextNode("Bạn đã chọn hình thức");
  var b = document.createElement("b");
  var contentB = document.createTextNode(" Đặt cọc 50%");
  var salePrice = document.createElement("p");

  document.querySelector(".book-info").appendChild(div);
  div.appendChild(pay);
  div.appendChild(p);
  div.append(b);
  div.append(p2);
  div.append(salePrice);
  p.style.display = "inline";
  Object.assign(salePrice.style, {
    fontSize: "25px",
    fontWeight: "bold",
    color: "#ff891e",
    fontFamily: "'Montserrat', 'Open Sans', sans-serif",
  });
  salePrice.setAttribute("id", "sale");

  pay.appendChild(brick);
  pay.appendChild(contentPay);
  p.appendChild(contentP);
  b.appendChild(contentB);
  p2.appendChild(contentP2);
  document.querySelector("#sale").innerHTML = (
    parseInt(sum.sum().replaceAll(".", "")) / 2
  )
    .toLocaleString()
    .replaceAll(",", ".");
  disactive.disabled = true;
};

active.onclick = () => {
  disactive.style.backgroundColor = "#bfe2bf";
  active.style.backgroundColor = "#5cb85c";
  document.querySelector(".add").remove();
  disactive.disabled = false;
};

document.querySelectorAll(".row-1").forEach((element) => {
  element.onclick = (e) => {
    console.log(e.target.innerHTML.length);
    if (e.target.innerHTML.length == 455) {
      for (var j = 1; j <= 6; j++) {
        if (j == 1) {
          document.querySelector(`.row-none-${j}`).classList.toggle("acTive");
        } else {
          document.querySelector(`.row-none-${j}`).classList.remove("acTive");
        }
      }
      for (var i = 0; i < document.querySelectorAll(".row-1").length; i++) {
        if (i == 0) {
          document.querySelectorAll(".row-1")[i].classList.toggle("change");
        } else {
          document.querySelectorAll(".row-1")[i].classList.remove("change");
        }
      }
    } else if (e.target.innerHTML.length == 452) {
      for (var j = 1; j <= 6; j++) {
        if (j == 2) {
          document.querySelector(`.row-none-${j}`).classList.toggle("acTive");
        } else {
          document.querySelector(`.row-none-${j}`).classList.remove("acTive");
        }
      }
      for (var i = 0; i < document.querySelectorAll(".row-1").length; i++) {
        if (i == 1) {
          document.querySelectorAll(".row-1")[i].classList.toggle("change");
        } else {
          document.querySelectorAll(".row-1")[i].classList.remove("change");
        }
      }
    } else if (e.target.innerHTML.length == 476) {
      for (var j = 1; j <= 6; j++) {
        if (j == 3) {
          document.querySelector(`.row-none-${j}`).classList.toggle("acTive");
        } else {
          document.querySelector(`.row-none-${j}`).classList.remove("acTive");
        }
      }
      for (var i = 0; i < document.querySelectorAll(".row-1").length; i++) {
        if (i == 2) {
          document.querySelectorAll(".row-1")[i].classList.toggle("change");
        } else {
          document.querySelectorAll(".row-1")[i].classList.remove("change");
        }
      }
    } else if (e.target.innerHTML.length == 456) {
      for (var j = 1; j <= 6; j++) {
        if (j == 4) {
          document.querySelector(`.row-none-${j}`).classList.toggle("acTive");
        } else {
          document.querySelector(`.row-none-${j}`).classList.remove("acTive");
        }
      }
      for (var i = 0; i < document.querySelectorAll(".row-1").length; i++) {
        if (i == 3) {
          document.querySelectorAll(".row-1")[i].classList.toggle("change");
        } else {
          document.querySelectorAll(".row-1")[i].classList.remove("change");
        }
      }
    } else if (e.target.innerHTML.length == 449) {
      for (var j = 1; j <= 6; j++) {
        if (j == 5) {
          document.querySelector(`.row-none-${j}`).classList.toggle("acTive");
        } else {
          document.querySelector(`.row-none-${j}`).classList.remove("acTive");
        }
      }
      for (var i = 0; i < document.querySelectorAll(".row-1").length; i++) {
        if (i == 4) {
          document.querySelectorAll(".row-1")[i].classList.toggle("change");
        } else {
          document.querySelectorAll(".row-1")[i].classList.remove("change");
        }
      }
    } else if (e.target.innerHTML.length == 490) {
      for (var j = 1; j <= 6; j++) {
        if (j == 6) {
          document.querySelector(`.row-none-${j}`).classList.toggle("acTive");
        } else {
          document.querySelector(`.row-none-${j}`).classList.remove("acTive");
        }
      }
      for (var i = 0; i < document.querySelectorAll(".row-1").length; i++) {
        if (i == 5) {
          document.querySelectorAll(".row-1")[i].classList.toggle("change");
        } else {
          document.querySelectorAll(".row-1")[i].classList.remove("change");
        }
      }
    }
  };
});
document.querySelector(".book-pay-right").innerHTML = html;
