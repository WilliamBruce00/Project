class Check {
  constructor(user, pass, confirm) {
    this.user = user;
    this.pass = pass;
    this.confirm = confirm;
  }
}
var check = new Check(
  document.querySelectorAll("input")[0].value,
  document.querySelectorAll("input")[1].value,
  document.querySelectorAll("input")[2].value
);
console.log(check);
