let label1 = ["250px", "270px"];
let label2 = ["320px", "340px"];
let color = ["#fff", "gray"];
let type = ["password", "text"];
$(document).ready(() => {
    for (let i = 0; i < document.querySelector(".formLogin-row1").children.length; i++) {
        document.querySelector(".formLogin-row1").children[i].onfocus = (e) => {
            $(`.formLogin-row1 [name=${e.target.getAttribute("name")}]`).attr("name") == "email"
                ? $(".formLogin-row1 label:eq(0)").css({ top: label1[0], color: color[0] })
                : $(".formLogin-row1 label:eq(1)").css({ top: label2[0], color: color[0] });
        };
        document.querySelector(".formLogin-row1").children[i].onblur = (e) => {
            $(`.formLogin-row1 [name=${e.target.getAttribute("name")}]`).val() == "" &&
            $(`.formLogin-row1 [type=${e.target.getAttribute("type")}]`).attr("type") == "text"
                ? $(".formLogin-row1 label:eq(0)").css({ top: label1[1], color: color[1] })
                : $(`.formLogin-row1 [name=${e.target.getAttribute("name")}]`).val() == "" &&
                  $(`.formLogin-row1 [type=${e.target.getAttribute("type")}]`).attr("type") == "password"
                ? $(".formLogin-row1 label:eq(1)").css({ top: label2[1], color: color[1] })
                : "";
        };
    }
    $(".fa-eye").click(() => {
        $(".formLogin-row1 input:eq(1)").attr("type", type.reverse()[0]);
    });
    $(".formLogin-row3 p input:eq(0)").click((e) => {
        $(".formLogin-row1 input:eq(0)").val() == "" || $(".formLogin-row1 input:eq(1)").val() == ""
            ? $("#formLogin p:eq(0)").html("Vui long dien day du thong tin")
            : $(".formLogin-row3 p input:eq(0)").attr("type", "submit");
    });
    if ($(".formLogin-row1 input:eq(0)").attr("user") != "Login") {
        localStorage.setItem("user", $(".formLogin-row1 input:eq(0)").attr("user"));
    }
    localStorage.getItem("user") !== null ? (location.href = "../index.php") : "";
});
