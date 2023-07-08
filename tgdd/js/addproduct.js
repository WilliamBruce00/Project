class Product {
  constructor(
    name,
    auchor,
    price,
    NXB,
    NPH,
    category,
    size,
    page,
    weight,
    img,
    intro
  ) {
    this.name = name;
    this.auchor = auchor;
    this.price = price;
    this.NXB = NXB;
    this.NPH = NPH;
    this.category = category;
    this.size = size;
    this.page = page;
    this.weight = weight;
    this.img = img;
    this.intro = intro;

    this.data = () => {
      return {
        name: this.name,
        auchor: this.auchor,
        price: this.price,
        NXB: this.NXB,
        NPH: this.NPH,
        category: this.category,
        size: this.size,
        page: this.page,
        weight: this.weight,
        img: this.img,
        intro: this.intro,
      };
    };
  }
}
$(document).ready(() => {
  $("#formAddProduct button").on("click", () => {
    const product = new Product(
      $("#formAddProduct input:eq(0)").val(),
      $("#formAddProduct input:eq(1)").val(),
      $("#formAddProduct input:eq(2)").val(),
      $("#formAddProduct input:eq(3)").val(),
      $("#formAddProduct input:eq(4)").val(),
      $("#formAddProduct input:eq(5)").val(),
      $("#formAddProduct input:eq(6)").val(),
      $("#formAddProduct input:eq(7)").val(),
      $("#formAddProduct input:eq(8)").val(),
      $("#formAddProduct select").val(),
      $("#formAddProduct textarea").val()
    );

    let arrOB2 = [...Object.values(product.data())].map((item, index) => {
      return {
        item: item,
        index: index,
      };
    });
    arrOB2.forEach((element) => {
      element.item == ""
        ? ($(`#formAddProduct p:eq(${element.index})`)
            .html("Please enter this field")
            .css({
              color: "red",
              //   "margin-bottom": "6px",
            }),
          $(`#formAddProduct input:eq(${element.index})`).css({
            border: "1px solid red",
          }))
        : "";
      console.log(element);
    });
    isNaN(product.price) && !product.price.match("," || ".")
      ? ($("#formAddProduct p:eq(2)").html("Please enter number").css({
          "color:": "red",
          //   "margin-bottom": "6px",
        }),
        $("#formAddProduct input:eq(2)").css({ border: "1px solid red" }))
      : "";
    document.querySelector("select").onchange = (e) => {
      e.target.value != "" ? $("#formAddProduct p:eq(9)").html("") : "";
    };

    document.querySelectorAll("input").forEach((item, index) => {
      item.onchange = () => {
        if (item.value != "") {
          item.style.border = "1px solid green";
          $(`#formAddProduct p:eq(${index})`).html("");
        }
      };
      console.log(index);
    });
    document.querySelector("textarea").onchange = () => {
      $("#formAddProduct textarea").val() != ""
        ? $("#formAddProduct p:eq(10)").html("")
        : "";
    };

    $("#formAddProduct p").each(() => {
      $("#formAddProduct p").text().length == 0
        ? $("#formAddProduct button").attr("type", "submit")
        : "";
    });
  });
});
