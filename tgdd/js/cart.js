$(document).ready(() => {
    let arr = Object.values(JSON.parse(localStorage.getItem(`${localStorage.getItem("user")}`)).data).map(
        (item, index) => {
            return `
        <div class='p'>
            <p src=${item.img}><img src=${item.img}></p>
            <p>${item.name}</p>
            <p><span>-</span><span>1</span><span>+</span></p>
            <p>${item.price}</p>
            <button index=${index}>x</button>
        </div>
        `;
        },
    );
    let box = document.querySelector(".box-cart");
    document.querySelector(".box-cart").innerHTML = arr.toString().replaceAll(",", "");
    document.querySelectorAll(".p").forEach((item, index) => {
        item.onclick = (e) => {
            if (e.target.innerHTML == "x") {
                e.target.parentElement.remove();
                localStorage.removeItem(localStorage.getItem("user"));
                document.querySelectorAll(".p").forEach((item, index) => {
                    let data = `{"data" :{"${index + 1000}" : {"name": "${
                        item.children[1].innerHTML
                    }","price": "${item.children[3].innerHTML}","img":"${item.children[0].getAttribute(
                        "src",
                    )}","user":"${localStorage.getItem("user")}"}}}`;
                    localStorage.setItem(
                        localStorage.getItem("user"),
                        localStorage.getItem(localStorage.getItem("user")) + data,
                    );
                    localStorage.setItem(
                        localStorage.getItem("user"),
                        localStorage.getItem(localStorage.getItem("user")).replaceAll('}}{"data" :{', `,`),
                    );
                    localStorage.setItem(
                        localStorage.getItem("user"),
                        localStorage.getItem(localStorage.getItem("user")).replace("null", ""),
                    );
                });
                location.reload();
            }
        };
    });
    $(".p p").click((e) => {
        var total = 0;

        if (e.target.innerHTML == "+") {
            e.target.parentElement.children[1].innerHTML =
                parseInt(e.target.parentElement.children[1].innerHTML) + 1;
            document.querySelectorAll(".p").forEach((item, index) => {
                var temp =
                    item.children[3].innerHTML.replaceAll(".", "") *
                    item.children[2].children[1].innerHTML.replaceAll(".", "");
                total = total + temp;
                $(".box-pay span:eq(1)").html(total + "đ");
            });
        } else {
            if (e.target.parentElement.children[1].innerHTML == 1) {
                e.target.parentElement.children[1].innerHTML = 1;
                return;
            }
            e.target.parentElement.children[1].innerHTML =
                parseInt(e.target.parentElement.children[1].innerHTML) - 1;
            document.querySelectorAll(".p").forEach((item, index) => {
                var temp =
                    item.children[3].innerHTML.replaceAll(".", "") *
                    item.children[2].children[1].innerHTML.replaceAll(".", "");
                total = total - temp * (0 - 1);

                $(".box-pay span:eq(1)").html(total + "đ");
            });
        }
    });
    let tong = 0;
    for (var i = 0; i < document.querySelector(".box-cart").children.length; i++) {
        tong =
            tong +
            parseInt(
                document.querySelector(".box-cart").children[i].children[3].innerHTML.replaceAll(".", ""),
            );
        $(".box-pay span:eq(1)").html(tong + "đ");
    }
    console.log();
    $(".box-pay button").click(() => {
        let href = "";
        let viec1 = () => {
            return new Promise((resolve, reject) => {
                resolve();
            })
                .then(() => {
                    document.querySelectorAll(".p").forEach((item, index) => {
                        href =
                            href +
                            `name${index}=${item.children[1].innerHTML}` +
                            "&" +
                            `q${index}=${item.children[2].children[1].innerHTML}` +
                            "&" +
                            `price${index}=${item.children[3].innerHTML}&userss=${localStorage.getItem(
                                "user",
                            )}&`;
                    });
                })
                .then(() => {
                    location.href =
                        `../index.php?page=order&loop=${
                            document.querySelector(".box-cart").children.length
                        }&` + href;
                });
        };
        viec1();

        // console.log(arrName);
    });
});
