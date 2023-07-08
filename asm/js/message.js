alert("Bắt đầu tính thời gian làm bài");

document.querySelectorAll("input").forEach((item, index) => {
  item.onclick = (e) => {
    if (
      e.target
        .getAttribute("name")
        .slice(
          e.target.getAttribute("name").length - 1,
          e.target.getAttribute("name").length
        ) == e.target.getAttribute("index")
    ) {
      Object.assign(
        document.querySelectorAll(".active")[
          parseInt(e.target.getAttribute("index"))
        ].style,
        {
          backgroundColor: "#1e90ff	",
          color: "#fff",
        }
      );
    }
  };
});

for (var i = 0; i < document.querySelectorAll("input").length; i++) {
  document.querySelectorAll("input").forEach((item) => {
    if (
      item
        .getAttribute("name")
        .slice(
          item.getAttribute("name").length - 1,
          item.getAttribute("name").length
        ) == i
    ) {
      item.setAttribute("index", i);
    }
  });
}
