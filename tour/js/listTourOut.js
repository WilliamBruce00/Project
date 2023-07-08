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
  {
    img: "img/051.jpg",
    title: "DU LỊCH CAMPUCHIA [SIHANOUKVILLE - KOH RONG SAMLOEM - PHNOM PENH]",
    location: "TP. HỒ CHÍ MINH - CAMPUCHIA",
    time: "Thời gian: 4 ngày 3 đêm",
    vehicle: "Phương tiện : Đi về bằng xe",
    start:
      "- Khởi hành thứ 5 cách tuần - Khám phá vương quốc Campuchia vừa gần...",
    price: "Giá từ",
    num: "7.079.000",
    timeStart: "08/06/2023",
    timeEnd: "22/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/052.jpg",
    title:
      "DU LỊCH HÀN QUỐC [SEOUL - NAMI - EVERLAND - PAINTING SHOW - NAMSAN]",
    location: "HÀ NỘI - HÀN QUỐC",
    time: "Thời gian: 5 ngày 4 đêm",
    vehicle: "Phương tiện : Hàng không Jeju Air",
    start:
      "- Thưởng ngoạn thiên nhiên tuyệt vời trên đảo Nami xinh đẹp và yên bình...",
    price: "Giá từ",
    num: "14.990.000",
    timeStart: " 08/06/2023",
    timeEnd: "22/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/053.jpg",
    title: "DU LỊCH ĐÀI LOAN [CAO HÙNG - ĐÀI TRUNG - ĐÀI BẮC]",
    location: "TP. HỒ CHÍ MINH - ĐÀI LOAN",
    time: "Thời gian: 6 ngày 5 đêm",
    vehicle: "Phương tiện : Hàng không Vietnam Airlines",
    start: "- Khám phá mãnh hổ kinh tế của châu Á với nhiều dấu ấn lịch...",
    price: "Giá từ",
    num: "18.999.000",
    timeStart: " 08/06/2023",
    timeEnd: " 22/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/054.jpg",
    title:
      "DU LỊCH BRUNEI - DUBAI [TÒA BURJ KHALIFA - CAFE BĂNG - SA MẠC SAFARI - TÀU ĐIỆN 01 RAY ATLANTIS THE PALM - ABU DHABI - BẢO TÀNG HOÀNG GIA REGALIA - THÁNH ĐƯỜNG JAME'ASR HASSANIL BOLIKAH]",
    location: "TP. HỒ CHÍ MINH - BRUNEI | TIỂU VƯƠNG QUỐC Ả RẬP",
    time: "Thời gian: 6 ngày 5 đêm",
    vehicle: "Phương tiện : Hàng không Royal Brunei",
    start: " Khám phá «xứ nghìn lẻ một đêm » của các Tiểu vương quốc Ả...",
    price: "Giá từ",
    num: "31.999.000",
    timeStart: "  08/06/2023",
    timeEnd: "31/08/2023",
    end: "Xem thêm",
  },
  {
    img: "img/055.jpg",
    title: "DU LỊCH TRUNG QUỐC [TRƯƠNG GIA GIỚI - PHƯỢNG HOÀNG CỔ TRẤN]",
    location: "TP. HỒ CHÍ MINH - TRUNG QUỐC",
    time: "Thời gian: 6 ngày 5 đêm",
    vehicle: "Phương tiện : Hàng không Bamboo",
    start:
      " - Thưởng ngoạn vô vàn cảnh sắc thiên nhiên thần tiên tại Trương Gia Giới,...",
    price: "Giá từ",
    num: "21.999.000",
    timeStart: " 09/06/2023",
    timeEnd: " 30/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/056.jpg",
    title:
      "DU LỊCH NHẬT BẢN [TOKYO - KAMAKURA - FUJI - KYOTO - OSAKA] CHIÊM NGƯỠNG LỄ HỘI HOA VÀ TRẢI NGIỆM HÁI TRÁI CÂY THEO MÙA",
    location: "HÀ NỘI - NHẬT BẢN",
    time: "Thời gian: 6 ngày 5 đêm",
    vehicle: "Phương tiện : Hàng không All Nippon Airways",
    start:
      "- Chiêm ngưỡng những lễ hội Hoa & trải nghiệm hái trái cây theo mùa...",
    price: "Giá từ",
    num: "33.900.000",
    timeStart: "  09/06/2023",
    timeEnd: "  23/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/057.jpg",
    title:
      "DU LỊCH ÚC [MELBOURNE - SYDNEY] THƯỞNG THỨC BỮA TRƯA TRÊN THÁP SYDNEY",
    location: "HÀ NỘI - DU LỊCH ÚC",
    time: "Thời gian: 7 ngày 6 đêm",
    vehicle: "Phương tiện : Hàng không Việt Nam",
    start:
      " - Tham quan cảnh đẹp của Vườn thực vật Fitzroy Garden, rừng nguyên sinh Dandenong...",
    price: "Giá từ",
    num: "55.900.000",
    timeStart: "  11/06/2023",
    timeEnd: " .",
    end: "Xem thêm",
  },
  {
    img: "img/058.jpg",
    title: "DU LỊCH CHÂU ÂU [PHÁP - THỤY SỸ - Ý] CHƯƠNG TRÌNH HÈ 2023",
    location: "HÀ NỘI - CHÂU ÂU",
    time: "Thời gian: 10 ngày 9 đêm",
    vehicle: "Phương tiện : Hàng không Qatar Airways",
    start: "- Trải nghiệm mùa hè tại Châu Âu - Hành trình du lịch qua các...",
    price: "Giá từ",
    num: "89.600.000",
    timeStart: "  11/06/2023",
    timeEnd: "18/08/2023",
    end: "Xem thêm",
  },
  {
    img: "img/059.jpg",
    title: "DU LỊCH BẮC ÂU [ĐAN MẠCH - NAUY - THỤY ĐIỂN - PHẦN LAN]",
    location: "TP. HỒ CHÍ MINH - CHÂU ÂU",
    time: "Thời gian: 12 ngày 10 đêm",
    vehicle: "Phương tiện : Hàng không Qatar",
    start:
      "- Trải nghiệm hành trình Bắc Âu - nơi có chất lượng cuộc sống cao...",
    price: "Giá từ",
    num: "149.999.000",
    timeStart: "  12/06/2023",
    timeEnd: " .",
    end: "Xem thêm",
  },
  {
    img: "img/060.jpg",
    title:
      "KHÁM PHÁ NHẬT BẢN [OSAKA - KYOTO - TOYOHASHI - NÚI PHÚ SỸ - TOKYO] TRẢI NGHIỆM TÀU CAO TỐC SHINKANSEN & THƯỜNG THỨC BÒ WAGYU",
    location: "ĐÀ NẴNG - NHẬT BẢN",
    time: "Thời gian: 6 ngày 5 đêm",
    vehicle: "Phương tiện : Hàng không Vietnam Airlines",
    start:
      " Thăm thành phố cảng Kobe, ghé tham quan bảo tàng động đất, nơi trưng...",
    price: "Giá từ",
    num: "35.490.000",
    timeStart: " 13/06/2023",
    timeEnd: "14/07/2023",
    end: "Xem thêm",
  },
  {
    img: "img/061.jpg",
    title:
      "DU LỊCH INDONESIA [BALI - TAMPAK SIRING - TANAH LOT] HÀNH TRÌNH MÙA HÈ ĐẲNG CẤP CÙNG LH SAIGONTOURIST",
    location: "HÀ NỘI - INDONESIA",
    time: "Thời gian: 4 ngày 3 đêm",
    vehicle: "Phương tiện : Hàng không Vietjet Air",
    start:
      "- Khám phá hòn đảo Bali được mệnh danh là bình minh của thế giới...",
    price: "Giá từ",
    num: "13.900.000",
    timeStart: " 14/06/2023",
    timeEnd: "28/06/2023",
    end: "Xem thêm",
  },
  {
    img: "img/062.jpg",
    title: "DU LỊCH MALDIVES",
    location: "TP. HỒ CHÍ MINH - MALDIVES",
    time: "Thời gian: 5 ngày 3 đêm",
    vehicle: "Phương tiện : Hàng không Singapore",
    start:
      "- Hòa mình vào thiên đường biển Maldives bên bờ Ấn Độ Dương xanh màu...",
    price: "Giá từ",
    num: "74.999.000",
    timeStart: " 14/06/2023",
    timeEnd: "15/07/2023",
    end: "Xem thêm",
  },
  {
    img: "img/063.jpg",
    title: "CÙNG SAIGONTOURIST THAM QUAN THÁI LAN CHIANG MAI - CHIANGRAI",
    location: "ĐÀ NẴNG - THÁI LAN",
    time: "Thời gian: 4 ngày 3 đêm",
    vehicle: "Phương tiện : HÀNG KHÔNG AIR ASIA",
    start:
      " Trải nghiệm hoàn toàn khác biệt tại Chiangmai với văn hóa, ẩm thực và các...",
    price: "Giá từ",
    num: "10.490.000",
    timeStart: " 15/06/2023",
    timeEnd: "20/07/2023",
    end: "Xem thêm",
  },
  {
    img: "img/064.jpg",
    title: "DU LỊCH ÚC [MELBOURNE - SYDNEY]",
    location: "TP. HỒ CHÍ MINH - DU LỊCH ÚC",
    time: "Thời gian: 6 ngày 5 đêm",
    vehicle: "Phương tiện : Hàng không Quốc Gia Việt Nam",
    start: "- Cơ hội tham quan xứ sở chuột túi, đảm bảo chất lượng dịch vụ...",
    price: "Giá từ",
    num: "59.999.000",
    timeStart: " 15/06/2023",
    timeEnd: ".",
    end: "Xem thêm",
  },
  {
    img: "img/065.jpg",
    title:
      "DU LỊCH Ý - HY LẠP [ROME - CAPRI - SORRENTO - POSITANO - AMALFI - SALERNO MATERA - ALBEROBELLO - BARI - SANTORINI - ATHENS]",
    location: "TP. HỒ CHÍ MINH - CHÂU ÂU | HY LẠP",
    time: "Thời gian: 11 ngày 10 đêm",
    vehicle: "Phương tiện : Hàng không Qatar",
    start: "- Hành trình đặc sắc Ý – Hy lạp sẽ đưa du khách khám phá...",
    price: "Giá từ",
    num: "159.999.000",
    timeStart: " 15/06/2023",
    timeEnd: ".",
    end: "Xem thêm",
  },
  {
    img: "img/066.jpg",
    title:
      "DU LỊCH MALAYSIA - SINGAPORE [DAY TOUR GENTING - GARDEN BY THE BAY - FLORAL FANTASY - BẢO TÀNG SÁP]",
    location: "HÀ NỘI - DU LỊCH MALAYSIA | SINGAPORE",
    time: "Thời gian: 6 ngày 5 đêm",
    vehicle: "Phương tiện : Hàng không Quốc Gia Việt Nam",
    start:
      "- Thưởng lãm những thắng cảnh nổi tiếng Singapore - Malaysia với chất lượng tiêu...",
    price: "Giá từ",
    num: "13.990.000",
    timeStart: " 16/06/2023",
    timeEnd: "  14/07/2023",
    end: "Xem thêm",
  },
  {
    img: "img/067.jpg",
    title:
      "KHÁM PHÁ HÀN QUỐC [SEOUL - NAMI - EVERLAND - THƯ VIỆN STARFEILD COEX]",
    location: "ĐÀ NẴNG - HÀN QUỐC",
    time: "Thời gian: 4 ngày 4 đêm",
    vehicle: "Phương tiện : Hàng không Vietnam Airlines",
    start:
      "- Cảm nhận không gian thi vị của những công trình kiến trúc đẹp cổ...",
    price: "Giá từ",
    num: "15.990.000",
    timeStart: " 16/06/2023",
    timeEnd: ".",
    end: "Xem thêm",
  },
  {
    img: "img/068.jpg",
    title: "DU LỊCH TRUNG QUỐC [TRƯƠNG GIA GIỚI - PHƯỢNG HOÀNG CỔ TRẤN]",
    location: "TP. HỒ CHÍ MINH - TRUNG QUỐC",
    time: "Thời gian: 6 ngày 5 đêm",
    vehicle: "Phương tiện : Hàng không Bamboo",
    start:
      "- Thưởng ngoạn vô vàn cảnh sắc thiên nhiên thần tiên tại Trương Gia Giới,...",
    price: "Giá từ",
    num: "18.490.000",
    timeStart: " 16/06/2023",
    timeEnd: "  28/07/2023",
    end: "Xem thêm",
  },
  {
    img: "img/069.jpg",
    title:
      "DU LỊCH DUBAI - ABU DHABI [TÒA THÁP BURJ KHALIFA - CAFE BĂNG - SA MẠC SAFARI - SKI DUBAI]",
    location: "TP. HỒ CHÍ MINH - TIỂU VƯƠNG QUỐC Ả RẬP",
    time: "Thời gian: 4 ngày 4 đêm",
    vehicle: "Phương tiện : Hàng không Emirates",
    start: " Cơ hội hưởng giá tour tiết kiệm đặc biệt, khám phá « xứ nghìn...",
    price: "Giá từ",
    num: "33.999.000",
    timeStart: " 16/06/2023",
    timeEnd: "05/07/2023",
    end: "Xem thêm",
  },
  {
    img: "img/070.jpg",
    title:
      "KHÁM PHÁ 2 BỜ TÂY - ĐÔNG HOA KỲ [LOS ANGELES - LAS VEGAS - ĐẠI VỰC GRAND CANYON - WASHINGTON - PHILADELPHIA - NEW YORK ]",
    location: "ĐÀ NẴNG - MỸ",
    time: "Thời gian : 10 ngày 9 đêm, trong đó có 8 ngày 7 đêm tại Mỹ",
    vehicle: "Phương tiện : Hàng không (dự kiến): Eva Airlines",
    start:
      "- Hành trình qua những thành phố danh tiếng nhất xứ sở cờ hoa: New...",
    price: "Giá từ",
    num: "103.000.000",
    timeStart: "16/06/2023",
    timeEnd: ".",
    end: "Xem thêm",
  },
];

let list = document.querySelector(".list-tour");

var html = arr.map((item) => {
  if (item.title.match(localStorage.getItem("href").toUpperCase())) {
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
  }
});

list.innerHTML = html.join().replaceAll(",", ".");

var getData = document.querySelectorAll(".getData");

getData.forEach((item) => {
  item.onclick = () => {
    localStorage.setItem("img", item.getAttribute("img"));
    localStorage.setItem("title", item.getAttribute("title"));
    localStorage.setItem("price", item.getAttribute("price"));
    localStorage.setItem("time", item.getAttribute("time"));
  };
});

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
