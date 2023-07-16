const a = () => {
  let name = "Tien";

  const b = () => {
    let age = "19";

    const d = () => {
      console.log({
        name: name,
        age: age,
      });
    };
    return d;
  };
  return b;
};

a()()();
const obj = {};
var count = 0;
class jeok {
  constructor({}) {
    this.fn = (n) => {
      return (obj[n] = {
        age: 19,
        name: "tien",
      });
    };
  }
}
// setInterval(() => {
//   count += 1;
//   var J = new jeok("ok");

//   J.fn(`ok${count}`);
//   console.log(obj.hh);
// }, 3000);
let ok = {
  ["superman"]: {},
};

ok["superman"]["okok"] = {
  gr: 80,
  hy: "PPP",
};
ok["superman"]["pk"] = {
  age: 90,
  name: "PPOOPOP",
};
console.log(ok.superman);
let arr = Object.keys(ok).filter((item, index) => {
  return item != localStorage.getItem("user");
});
arr.toString();
console.log(ok[arr]);
