let arr = [
  {
    img: "img/00.jpg",
    title: "DU LỊCH NHẬT BẢN [OSAKA - KOBE - KYOTO - NÚI PHÚ SỸ - TOKYO]",
    location: "TP. HỒ CHÍ MINH - NHẬT BẢN",
    time: "Thời gian: 6 ngày 5 đêm",
    vehicle: "Phương tiện : Hàng không Quốc Gia Việt Nam",
    start: "- Hiện thực hóa ước mơ khám phá cảnh đẹp và văn hóa đặc sắc...",
    price: "Giá từ",
    num: "42.999.000",
    timeStart: "23/05/2023",
    timeEnd: "30/05/2023",
    end: "Xem thêm",
  },
  {
    img: "img/01.jpg",
    title: "CÙNG SAIGONTOURIST THAM QUAN THÁI LAN (BANGKOK - PATTAYA)",
    location: "ĐÀ NẴNG - THÁI LAN",
    time: "Thời gian: 5 ngày 4 đêm",
    vehicle: "Phương tiện : HÀNG KHÔNG VIETJET AIR",
    start: "- Thành cổ Muang Boran - một quần thể giá trị nhân văn lớn vô...",
    price: "Giá từ",
    num: "7.490.000",
    timeStart: " 24/05/2023",
    timeEnd: ".",
    end: "Xem thêm",
  },
  {
    img: "img/02.jpg",
    title:
      "DU LỊCH ĐÀI LOAN [CAO HÙNG - ĐÀI TRUNG - ĐÀI BẮC] TRẢI NGHIỆM NÉT VĂN HÓA ĐỘC ĐÁO TẠI ĐÀI LOAN",
    location: "HÀ NỘI - ĐÀI LOAN",
    time: "Thời gian: 5 ngày 4 đêm",
    vehicle: "Phương tiện : Hàng không Vietjet Air",
    start: "- Khám phá mãnh hổ kinh tế của châu Á với nhiều dấu ấn lịch...",
    price: "Giá từ",
    num: "12.999.000",
    timeStart: " 24/05/2023",
    timeEnd: "07/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/03.jpg",
    title:
      "DU LỊCH NHẬT BẢN [FUKUOKA - BEPPU - TAKACHIHO - KUMAMOTO] KHÁM PHÁ KYUSHU, THIÊN ĐƯỜNG ONSEN & THIÊN ĐƯỜNG MUA SẮM",
    location: "HÀ NỘI - NHẬT BẢN",
    time: "Thời gian: 5 ngày 4 đêm",
    vehicle: "Phương tiện : Hàng không Quốc Gia Việt Nam",
    start:
      "- Tham quan thành phố Beppu : thiên đường Onsen của Nhật Bản - Chiêm...",
    price: "Giá từ",
    num: "26.900.000",
    timeStart: " 24/05/2023",
    timeEnd: "02/08/2023",
    end: "Xem thêm",
  },
  {
    img: "img/04.jpg",
    title:
      "DU LỊCH DUBAI - ABU DHABI [TÒA THÁP BURJKHALIFA - CAFE BĂNG - SA MẠC SAFARI]",
    location: "TP. HỒ CHÍ MINH - TIỂU VƯƠNG QUỐC Ả RẬP",
    time: "Thời gian: 4 ngày 4 đêm",
    vehicle: "Phương tiện : Hàng không Emirates",
    start: " Cơ hội hưởng giá tour tiết kiệm đặc biệt, khám phá « xứ nghìn...",
    price: "Giá từ",
    num: "31.999.000",
    timeStart: " 24/05/2023",
    timeEnd: ".",
    end: "Xem thêm",
  },
  {
    img: "img/05.jpg",
    title: "DU LỊCH CAMPUCHIA [SIHANOUKVILLE - KOH RONG SAMLOEM - PHNOM PENNH]",
    location: "TP. HỒ CHÍ MINH - CAMPUCHIA",
    time: "Thời gian: 4 ngày 3 đêm",
    vehicle: "Phương tiện : Đi về bằng xe",
    start:
      "- Khởi hành thứ 5 cách tuần - Khám phá vương quốc Campuchia vừa gần...",
    price: "Giá từ",
    num: "7.079.000",
    timeStart: " 25/05/2023",
    timeEnd: "  08/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/06.jpg",
    title: "DU LỊCH CAMPUCHIA - SIEM REAP - PHNOM PENH [KHÁCH SẠN 4 SAO]",
    location: "TP. HỒ CHÍ MINH - CAMPUCHIA",
    time: "Thời gian: 4 ngày 3 đêm",
    vehicle: "Phương tiện : Đi về bằng xe",
    start: "- Khởi hành thứ 5 hàng tuần - Trải nghiệm dịch vụ lưu trú tại...",
    price: "Giá từ",
    num: "6.579.000",
    timeStart: "  25/05/2023",
    timeEnd: " 01/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/07.jpg",
    title: "DU LỊCH THÁI LAN [CHIANG MAI - SUTHEP - CHIANG RAI]",
    location: "TP. HỒ CHÍ MINH - THÁI LAN",
    time: "Thời gian: 4 ngày 3 đêm",
    vehicle: "Phương tiện : Hàng không Vietjet Air",
    start:
      "- Trải nghiệm hoàn toàn khác biệt tại Chiang Mai với văn hóa, ẩm thực...",
    price: "Giá từ",
    num: "9.999.000",
    timeStart: " 25/05/2023",
    timeEnd: "01/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/08.jpg",
    title:
      "DU LỊCH SINGAPORE 2023 - KHU VƯỜN NĂNG LƯỢNG - NHẠC NƯỚC WINGS OF TIME - VƯỜN TREO FLORAL FANTASY",
    location: "ĐÀ NẴNG - SINGAPORE",
    time: "Thời gian: 4 ngày 3 đêm",
    vehicle: "Phương tiện : Bay thẳng với Vietjet Air",
    start:
      "Tour này có gì hay: - Thưởng lãm những thắng cảnh nổi tiếng Singapore với...",
    price: "Giá từ",
    num: "13.490.000",
    timeStart: " 25/05/2023",
    timeEnd: " 27/07/2023",
    end: "Xem thêm",
  },
  {
    img: "img/09.jpg",
    title:
      "DU LỊCH ANH - SCOTLAND MÙA HOA LAVENDER [LONDON - EDINBURCH - GLASSGOW - LIVERPOOL - MANCHESTER - STRATFORD UPON AVON - BICESTER - OXFORD - WINDSOR - LONDON]",
    location: "TP. HỒ CHÍ MINH - ANH | SCOTLAND",
    time: "Thời gian: 9 ngày 8 đêm",
    vehicle: "Phương tiện : Hàng không Quốc Gia Việt Nam",
    start:
      "- Hành trình khám phá và chiêm ngưỡng thế giới cung điện, lâu đài và...",
    price: "Giá từ",
    num: "119.999.000",
    timeStart: " 17/06/2023",
    timeEnd: "28/07/2023",
    end: "Xem thêm",
  },
  {
    img: "img/011.jpg",
    title: "DU LỊCH LÀO [VIÊNG CHĂN - LUONGPRABANG - VĂNG VIÊNG]",
    location: "TP. HỒ CHÍ MINH - LÀO",
    time: "Thời gian: 5 ngày 4 đêm",
    vehicle: "Phương tiện : Hàng không Lào",
    start:
      "- Khởi hành ngày 16,30/5/2023; 20/6; 18/7/2023 - Đất nước Lào xinh đẹp không chỉ...",
    price: "Giá từ",
    num: "14.490.000",
    timeStart: " 20/06/2023",
    timeEnd: "18/07/2023",
    end: "Xem thêm",
  },
  {
    img: "img/012.jpg",
    title:
      "KHÁM PHÁ ĐÀI LOAN [ĐÀI BẮC - ĐÀI TRUNG] PHỐ CỔ THẬP PHẦN & PHỐ CỔ CỬU PHẦN",
    location: "ĐÀ NẴNG - ĐÀI LOAN",
    time: "Thời gian: 4 ngày 3 đêm",
    vehicle: "Phương tiện : Hàng không China Air (CI)",
    start: "- Khám phá mãnh hổ kinh tế của châu Á với nhiều dấu ấn lịch...",
    price: "Giá từ",
    num: "13.990.000",
    timeStart: " 27/05/2023",
    timeEnd: ".",
    end: "Xem thêm",
  },
  {
    img: "img/013.jpg",
    title:
      "DU LỊCH SINGAPORE - MALAYSIA [GARDENS BY THE BAY - FLORAL FANTASY - BẢO TÀNG SÁP - DAY TOUR GENTING] KHÁM PHÁ XỨ CỌ DẦU & ĐẢO QUỐC SƯ TỬ",
    location: "HÀ NỘI - DU LỊCH MALAYSIA | SINGAPORE",
    time: "Thời gian: 6 ngày 5 đêm",
    vehicle: "hương tiện : Hàng không Quốc Gia Việt Nam",
    start:
      " Thưởng lãm những thắng cảnh nổi tiếng Singapore - Malaysia với chất lượng tiêu...",
    price: "Giá từ",
    num: "13.990.000",
    timeStart: " 27/05/2023",
    timeEnd: "10/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/014.jpg",
    title:
      "DU LỊCH  NHẬT BẢN [TOKYO - KAMAKURA - NÚI PHÚ SỸ - THUNG LŨNG OWAKUDANI] NGẮM VƯỜN HỒNG KEISE",
    location: "ĐÀ NẴNG - NHẬT BẢN",
    time: "Thời gian: 4 ngày 4 đêm",
    vehicle: "Phương tiện : Hàng không Vietnam Airlines",
    start:
      "- Khám phá thủ đô hiện đại Tokyo với sự phồn thịnh, tấp nập suốt...",
    price: "Giá từ",
    num: "26.290.000",
    timeStart: " 27/05/2023",
    timeEnd: ".",
    end: "Xem thêm",
  },
  {
    img: "img/015.jpg",
    title: "DU LỊCH CHÂU ÂU [PHÁP - THỤY SĨ - Ý]",
    location: "TP. HỒ CHÍ MINH - CHÂU ÂU",
    time: "Thời gian: 11 ngày 10 đêm",
    vehicle: "Phương tiện : Hàng không Quốc gia Việt Nam",
    start:
      "- Hành trình du lịch qua các thành phố danh tiếng của Châu Âu và...",
    price: "Giá từ",
    num: "109.999.000",
    timeStart: " 27/05/2023",
    timeEnd: ".",
    end: "Xem thêm",
  },
  {
    img: "img/016.jpg",
    title: "DU LỊCH CAMPUCHIA - LÀO [PAKSE - STUNGTRENG - KRATIE]",
    location: "TP. HỒ CHÍ MINH - CAMPUCHIA | LÀO",
    time: "Thời gian: 4 ngày 3 đêm",
    vehicle: "Phương tiện : Đi về bằng xe",
    start: "- Khởi hành thứ 7 cách tuần - Tham quan Khu du lịch thác Fan...",
    price: "Giá từ",
    num: "7.979.000",
    timeStart: " 27/05/2023",
    timeEnd: "  10/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/017.jpg",
    title:
      "DU LỊCH THÁI LAN [BANGKOK - PATTAYA] (ĐẢO SAN HÔ CORAL - VƯỜN NONG NOOCH - SAFARI - BUFFET BAIYOKE SKY)",
    location: "TP. HỒ CHÍ MINH - THÁI LAN",
    time: "Thời gian: 5 ngày 4 đêm",
    vehicle: "Phương tiện : Hàng không Quốc Gia Việt Nam",
    start:
      "- Thăm xứ sở nụ cười Thái Lan với chùa Vàng, chùa thuyền Wat Yanawa...",
    price: "Giá từ",
    num: "9.999.000",
    timeStart: " 27/05/2023",
    timeEnd: "31/05/2023",
    end: "Xem thêm",
  },
  {
    img: "img/018.jpg",
    title:
      "DU LỊCH SINGAPORE [GARDENS BY THE BAY - FLOWER DOME - CLOUD FOREST - AVATAR - WINGS OF TIME - SINGAPORE ZOO & RIVER WONDERS]",
    location: "TP. HỒ CHÍ MINH - SINGAPORE",
    time: "Thời gian: 4 ngày 3 đêm",
    vehicle: "Phương tiện : Hàng không Quốc Gia Việt Nam",
    start:
      "- Thưởng lãm những thắng cảnh nổi tiếng Singapore với chất lượng tiêu chuẩn Saigontourist....",
    price: "Giá từ",
    num: "14.999.000",
    timeStart: " 27/05/2023",
    timeEnd: " 03/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/019.jpg",
    title:
      "DU LỊCH HONGKONG [DISNEYLAND - THIỀN VIỆN CHÍ LIÊN CHỢ QUÝ BÀ - ĐẠI LỘ DANH VỌNG]",
    location: "TP. HỒ CHÍ MINH - HONGKONG",
    time: "Thời gian: 4 ngày 3 đêm",
    vehicle: "Phương tiện : Hàng không Cathay Pacific",
    start:
      "- Thỏa thích vui chơi ở Công viên Disneyland, Công viên được ưa thích nhất...",
    price: "Giá từ",
    num: "20.999.000",
    timeStart: " 27/05/2023",
    timeEnd: ".",
    end: "Xem thêm",
  },
  {
    img: "img/020.jpg",
    title:
      "DU LỊCH DUBAI - ABU DHABI [CÁC TIỂU VƯƠNG QUỐC Ả RẬP THỐNG NHẤT - U.A.E] DU XUÂN - THĂM QUAN XỨ SỞ THẦN THOẠI",
    location: "HÀ NỘI - TIỂU VƯƠNG QUỐC Ả RẬP",
    time: "Thời gian: 6 ngày 5 đêm",
    vehicle: "Phương tiện : Hàng không 5 sao Emirates",
    start: "- Cơ hội hưởng giá tour tiết kiệm đặc biệt, khám phá « xứ nghìn...",
    price: "Giá từ",
    num: "28.500.000",
    timeStart: "29/05/2023",
    timeEnd: ".",
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
document.querySelectorAll(".ctrl")[0].style.display = "none";
document.querySelectorAll(".ctrl")[1].onclick = (e) => {
  e.preventDefault();
  location.href = arrLink[1];
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
