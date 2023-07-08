let arr = [
  {
    img: "img/021.jpg",
    title: "DU LỊCH THÁI LAN [THIÊN ĐƯỜNG BIỂN ĐẢO PHUKET] KHÁCH SẠN 4 SAO",
    location: "HÀ NỘI - THÁI LAN",
    time: "Thời gian: 4 ngày 3 đêm",
    vehicle: "Phương tiện : Hàng không Vietjet Air",
    start: "- Khám phá đảo Phi Phi - hòn đảo nổi tiếng trong giới du lịch...",
    price: "Giá từ",
    num: "10.500.000",
    timeStart: "30/05/2023",
    timeEnd: "13/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/022.jpg",
    title:
      "DU LỊCH NHẬT BẢN [NAGOYA - KYOTO - SHIRAKAWAGO - KAMIKOCHI - FUJI - TOKYO] CHIÊM NGƯỠNG MỘT THỤY SỸ TRONG LÒNG NHẬT BẢN!",
    location: "HÀ NỘI - NHẬT BẢN",
    time: "Thời gian: 6 ngày 5 đêm",
    vehicle: "Phương tiện : Hàng không Quốc Gia Việt Nam",
    start:
      "- Choáng ngợp trước vẻ đẹp của dãy Alps Nhật Bản - Viên ngọc quý...",
    price: "Giá từ",
    num: "34.900.000",
    timeStart: " 30/05/2023",
    timeEnd: "06/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/023.jpg",
    title: "DU LỊCH THÁI LAN [BANGKOK - PATTAYA] KHÁCH SẠN 4-5 SAO",
    location: "HÀ NỘI - THÁI LAN",
    time: "Thời gian: 5 ngày 4 đêm",
    vehicle: "Phương tiện : Hàng không Quốc Gia Việt Nam",
    start: "- Thăm Thái Lan - xứ sở chùa vàng - Chiêm bái các ngôi chùa...",
    price: "Giá từ",
    num: "7.900.000",
    timeStart: " 31/05/2023",
    timeEnd: "14/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/024.jpg",
    title:
      "THAM QUAN THÁI LAN [BANGKOK - PATTAYA] - SỞ THÚ THIÊN NHIÊN SAFARI WORLD",
    location: "ĐÀ NẴNG - THÁI LAN",
    time: "Thời gian: 5 ngày 4 đêm",
    vehicle: "Phương tiện : HÀNG KHÔNG VIETJET AIR",
    start: "Tour này có gì hay: - Thành cổ Muang Boran - một quần thể giá...",
    price: "Giá từ",
    num: "8.490.000",
    timeStart: "  31/05/2023",
    timeEnd: ".",
    end: "Xem thêm",
  },
  {
    img: "img/025.jpg",
    title: "DU LỊCH THÁI LAN [PHUKET - ĐẢO PHI PHI - VỊNH PHANG NGA]",
    location: "TP. HỒ CHÍ MINH - THÁI LAN",
    time: "Thời gian: 4 ngày 3 đêm",
    vehicle: "Phương tiện : Hàng không Vietjet Air",
    start:
      " - Trải nghiệm hoàn toàn khác biệt tại Phuket - “thiên đường miền nhiệt đới”...",
    price: "Giá từ",
    num: "11.999.000",
    timeStart: " 31/05/2023",
    timeEnd: "07/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/026.jpg",
    title: "CÙNGG SAIGONTOURIST DU LỊCH SINGAPORE - MALAYSIA",
    location: "ĐÀ NẴNG - DU LỊCH MALAYSIA | SINGAPORE",
    time: "Thời gian: 5 ngày 4 đêm",
    vehicle: "Phương tiện : Hàng Không Vietjet & AirAisa",
    start: "- Cùng đến với Gardens by the Bay xinh đẹp và xanh mướt - một...",
    price: "Giá từ",
    num: "12.490.000",
    timeStart: "  31/05/2023",
    timeEnd: "  14/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/027.jpg",
    title:
      "KHÁM PHÁ NHẬT BẢN [TOKYO - NÚI PHÚ SĨ - KYOTO - OSAKA] TRẢI NGHIỆM TÀU CAO TỐC SHINKANSEN & NGẮM VƯỜN HỒNG KEISEI",
    location: "ĐÀ NẴNG - NHẬT BẢN",
    time: "Thời gian: 5 ngày 5 đêm",
    vehicle: "Phương tiện : Hàng không Vietnam Airlines",
    start: " Khám phá thủ đô hiện đại Tokyo với sự phồn thịnh, tấp nập suốt...",
    price: "Giá từ",
    num: "31.990.000",
    timeStart: "  31/05/2023",
    timeEnd: " .",
    end: "Xem thêm",
  },
  {
    img: "img/028.jpg",
    title: "DU LỊCH ÚC - LỄ HỘI ÁNH SÁNG VIVID SYDNEY  [MELBOURNE - SYDNEY]",
    location: "TP. HỒ CHÍ MINH - DU LỊCH ÚC",
    time: "Thời gian: 6 ngày 5 đêm",
    vehicle: "Phương tiện : Hàng không Quốc Gia Việt Nam",
    start: "- Cơ hội tham quan xứ sở chuột túi, đảm bảo chất lượng dịch vụ...",
    price: "Giá từ",
    num: "64.999.000",
    timeStart: " 31/05/2023",
    timeEnd: ".",
    end: "Xem thêm",
  },
  {
    img: "img/029.jpg",
    title: "DU LỊCH CAMPUCHIA [BOKOR - SIHANOUKVILLE - PHNOM PENH]",
    location: "TP. HỒ CHÍ MINH - CAMPUCHIA",
    time: "Thời gian: 4 ngày 3 đêm",
    vehicle: "Phương tiện : Đi về bằng xe",
    start:
      "- Khởi hành thứ 5 cách tuần - Khám phá vương quốc Campuchia vừa gần...",
    price: "Giá từ",
    num: "6.779.000",
    timeStart: " 01/06/2023",
    timeEnd: " 15/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/030.jpg",
    title:
      "DU LỊCH BRUNEI [THÁNH ĐƯỜNG JAME AS'R HASSANIL BOLKIAH MOSQUE - VƯỜN QUỐC GIA TEMBURONG - BẢO TÀNG HOÀNG GIA REGALIA]",
    location: "TP. HỒ CHÍ MINH - BRUNEI",
    time: "Thời gian: 4 ngày 3 đêm",
    vehicle: "Phương tiện : Hàng không Royal Brunei",
    start:
      "- Khám phá Vương quốc Brunei thanh bình và phồn thịnh - nơi mệnh danh...",
    price: "Giá từ",
    num: "12.999.000",
    timeStart: " 01/06/2023",
    timeEnd: "29/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/031.jpg",
    title:
      "DU LỊCH THÁI LAN [BANGKOK - PATTAYA] ĐẢO SAN HÔ CORAL - VƯỜN NONG NOOCH - MUANG BORAN - BUFFET DU THUYỀN TRÊN SÔNG CHAOPRAYA",
    location: "TP. HỒ CHÍ MINH - THÁI LAN",
    time: "Thời gian: 5 ngày 4 đêm",
    vehicle: "Phương tiện : Hàng không Quốc Gia Việt Nam",
    start:
      "- Thăm xứ sở nụ cười Thái Lan với chùa Vàng, chùa thuyền Wat Yanawa...",
    price: "Giá từ",
    num: "10.499.000",
    timeStart: " 02/06/2023",
    timeEnd: ".",
    end: "Xem thêm",
  },
  {
    img: "img/032.jpg",
    title: "DU LỊCH INDONESIA [TAMPAKSIRING TOUR - NUSA DUA ĐỀN TANAH LOT]",
    location: "TP. HỒ CHÍ MINH - INDONESIA",
    time: "Thời gian: 4 ngày 3 đêm",
    vehicle: "Phương tiện : Hàng không Vietjet Air",
    start:
      "- Tận hưởng “đặc sản” của thiên đường Bali với phong cảnh đẹp thơ mộng,...",
    price: "Giá từ",
    num: "13.999.000",
    timeStart: " 02/06/2023",
    timeEnd: "09/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/033.jpg",
    title: "DU LỊCH TRUNG QUỐC [TRƯƠNG GIA GIỚI - PHƯỢNG HOÀNG CỔ TRẤN]",
    location: "TP. HỒ CHÍ MINH - TRUNG QUỐC",
    time: "Thời gian: 6 ngày 5 đêm",
    vehicle: "Phương tiện : Hàng không Bamboo",
    start:
      " - Thưởng ngoạn vô vàn cảnh sắc thiên nhiên thần tiên tại Trương Gia Giới,...",
    price: "Giá từ",
    num: "19.499.000",
    timeStart: " 02/06/2023",
    timeEnd: "23/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/034.jpg",
    title:
      "DU LỊCH DUBAI - ABU DHABI [TÒA THÁP BURJKHALIFA - CAFE BĂNG - SA MẠC SAFARI]",
    location: "TP. HỒ CHÍ MINH - TIỂU VƯƠNG QUỐC Ả RẬP",
    time: "Thời gian: 4 ngày 4 đêm",
    vehicle: "Phương tiện : Hàng không Emirates",
    start: "- Cơ hội hưởng giá tour tiết kiệm đặc biệt, khám phá « xứ nghìn...",
    price: "Giá từ",
    num: "24.999.000",
    timeStart: " 02/06/2023",
    timeEnd: "09/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/035.jpg",
    title:
      "DU LỊCH THÁI LAN [BANGKOK - PATTAYA] (VƯỜN TRÁI CÂY - VƯỜN NONG NOOCH BUFFET - DU THUYỀN TRÊN SÔNG CHAOPRAYA)",
    location: "TP. HỒ CHÍ MINH - THÁI LAN",
    time: "Thời gian: 5 ngày 4 đêm",
    vehicle: "Phương tiện : Hàng không Quốc gia Việt Nam",
    start:
      "- Thăm xứ sở nụ cười Thái Lan với chùa Vàng, chùa thuyền Wat Yanawa...",
    price: "Giá từ",
    num: "10.999.000",
    timeStart: " 03/06/2023",
    timeEnd: "10/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/036.jpg",
    title:
      "KHÁM PHÁ ĐÀI LOAN [ĐÀI BẮC - ĐÀI TRUNG] PHỐ CỔ THẬP PHÂN & CÔNG VIÊN DÃ LIỄU",
    location: "ĐÀ NẴNG - ĐÀI LOAN",
    time: "Thời gian: 5 ngày 4 đêm",
    vehicle: "Phương tiện : Hãng hàng không Đài Loan",
    start: "- Khám phá mãnh hổ kinh tế của châu Á với nhiều dấu ấn lịch...",
    price: "Giá từ",
    num: "14.990.000",
    timeStart: " 03/06/2023",
    timeEnd: "  14/07/2023",
    end: "Xem thêm",
  },
  {
    img: "img/037.jpg",
    title:
      "DU LỊCH MỸ BỜ ĐÔNG - TÂY [NEW YORK - PHILADELPHIA - WASHINGTON D.C LAS VEGAS - LOS ANGELES - UNIVERSAL STUDIOS]",
    location: "TP. HỒ CHÍ MINH - MỸ",
    time: "Thời gian: 10 ngày 9 đêm",
    vehicle: "Phương tiện : Hàng không Cathay Pacific",
    start:
      "- Hành trình qua những thành phố danh tiếng nhất xứ sở cờ hoa: New...",
    price: "Giá từ",
    num: "119.999.000",
    timeStart: " 03/06/2023",
    timeEnd: "23/09/2023",
    end: "Xem thêm",
  },
  {
    img: "img/038.jpg",
    title:
      "DU LỊCH MALAYSIA - SINGAPORE [KUALA LUMPUR - DAY TOUR GENTING - BATU CAVES - MALACCA - SEA AQUARIUM - GARDENS BY THE BAY - FLOWER DOME - RIVER SAFARI - WINGS OF TIME]",
    location: "TP. HỒ CHÍ MINH - DU LỊCH MALAYSIA | SINGAPORE",
    time: "Thời gian: 6 ngày 5 đêm",
    vehicle: "Phương tiện : Hàng không Quốc Gia Việt Nam",
    start:
      "- Thưởng lãm những thắng cảnh nổi tiếng Malaysia - Singapore với chất lượng tiêu...",
    price: "Giá từ",
    num: "19.999.000",
    timeStart: " 06/06/2023",
    timeEnd: " 27/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/039.jpg",
    title:
      "DU LỊCH NHẬT BẢN [OSAKA - KOBE - KYOTO - NÚI PHÚ SỸ - TOKYO - DISNEYLAND]",
    location: "TP. HỒ CHÍ MINH - NHẬT BẢN",
    time: "Thời gian: 6 ngày 5 đêm",
    vehicle: "Phương tiện : Hàng không Quốc Gia Việt Nam",
    start: "- Hiện thực hóa ước mơ khám phá cảnh đẹp và văn hóa đặc sắc...",
    price: "Giá từ",
    num: "44.999.000",
    timeStart: " 06/06/2023",
    timeEnd: "13/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/040.jpg",
    title: "DU LỊCH CAMPUCHIA [SIEM REAP - PHNOM PENH]",
    location: "TP. HỒ CHÍ MINH - CAMPUCHIA",
    time: "Thời gian: 4 ngày 3 đêm",
    vehicle: "Phương tiện : Đi về bằng xe",
    start: "- Khởi hành thứ 3 hàng tuần: Tháng 4, 5, 6, 7, 8, 9/2023 -...",
    price: "Giá từ",
    num: "4.979.000",
    timeStart: "30/05/2023",
    timeEnd: "06/06/2023",
    end: "Xem thêm",
  },
];
let list = document.querySelector(".list-tour");

var html = arr.map((item) => {
  return `<div class="tours">
            <div class="tours-img">
                <a href="book.html" class="getData" img="${item.img}" title="${item.title}" price="${item.num}" time="${item.time}"><img src='${item.img}'></a>
            </div>
            <div class="tours-info">
                <a href="book.html" class="getData" img="${item.img}" title="${item.title}" price="${item.num}" time="${item.time}"><h3>${item.title}</h3></a>
                <h5>${item.location}</h5>
                <p>${item.time}</p>
                <p>${item.vehicle}</p>
                <p>${item.start}</p>
            </div>
            <div class="tours-time">
                <a href="book.html" class="getData" img="${item.img}" title="${item.title}" price="${item.num}" time="${item.time}"><span style="font-size: 13px ; font-weight: 100;">${item.price}</span><span></span>${item.num}</a>
                <p>${item.timeStart}</p>
                <p>${item.timeEnd}</p>
                <a href="" class="see">${item.end}</a>
            </div>
        </div>`;
});

list.innerHTML = html;

var getData = document.querySelectorAll(".getData");

getData.forEach((item) => {
  item.onclick = () => {
    localStorage.setItem("img", item.getAttribute("img"));
    localStorage.setItem("title", item.getAttribute("title"));
    localStorage.setItem("price", item.getAttribute("price"));
    localStorage.setItem("time", item.getAttribute("time"));
  };
});

let arrLink = ["tourOutPage1.html", "tourOutPage2.html", "tourOutPage3.html"];

document.querySelectorAll(".ctrl")[1].onclick = (e) => {
  e.preventDefault();
  location.href = arrLink[2];
};
document.querySelectorAll(".ctrl")[0].onclick = (e) => {
  e.preventDefault();
  location.href = arrLink[0];
};

let arrClass = [
  ".search-tour",
  ".tour-main",
  ".box-tour-In",
  ".footer",
  ".header",
];
let arrAttribute = ["img", "title", "price", "time"];
document.querySelectorAll(".see").forEach((item) => {
  item.onclick = (e) => {
    e.preventDefault();
    var price = item.parentElement.children[0].innerHTML.replace(
      '<span style="font-size: 13px ; font-weight: 100;">Giá từ</span><span></span>',
      ""
    );
    document.querySelectorAll(".col")[0].children[1].innerHTML = price;
    document.querySelectorAll(".col")[1].children[1].innerHTML = (
      price.replaceAll(".", "") / 2
    )
      .toLocaleString()
      .replaceAll(",", ".");
    document.querySelectorAll(".col")[2].children[1].innerHTML = (
      price.replaceAll(".", "") / 5
    )
      .toLocaleString()
      .replaceAll(",", ".");

    document.querySelector(".seeMore").style.top = "50%";
    document.body.style.overflowY = "hidden";
    for (var i = 0; i < arrClass.length; i++) {
      document.querySelector(`${arrClass[i]}`).style.opacity = "0.5";
    }
    for (var g = 0; g < arrAttribute.length; g++) {
      document
        .querySelector(".l")
        .setAttribute(
          `${arrAttribute[g]}`,
          item.parentElement.children[0].getAttribute(`${arrAttribute[g]}`)
        );
    }
  };
});

document.querySelector(".fa-xmark").onclick = () => {
  document.querySelector(".seeMore").style.top = "-25%";
  document.body.style.overflowY = "auto";
  for (var i = 0; i < arrClass.length; i++) {
    document.querySelector(`${arrClass[i]}`).style.opacity = "1";
  }
};

document.querySelectorAll(".l").forEach((item) => {
  item.onclick = () => {
    localStorage.setItem("img", item.getAttribute("img"));
    localStorage.setItem("title", item.getAttribute("title"));
    localStorage.setItem("price", item.getAttribute("price"));
    localStorage.setItem("time", item.getAttribute("time"));
  };
});
