document.querySelectorAll(".click").forEach((item) => {
  item.onclick = (e) => {
    localStorage.setItem("href", e.target.innerHTML);
  };
});
