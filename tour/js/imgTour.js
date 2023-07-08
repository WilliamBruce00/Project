let arrImg = [
  {
    img: "https://saigontourist.net/uploads/Tour%20Tag/HoaTayBac_371682664.jpg",
    title: "TOUR ĐÔNG BẮC - TÂY BẮC",
    des: "Tour Đông Bắc - Tây Bắc. Hành trình khám phá vùng núi Tây Bắc với cảnh sắc thiên nhiên hoang sơ tuyệt đẹp hay Đông Bắc với những danh thắng đẹp nổi tiếng, thơ mộng đến ngỡ ngàng sẽ là một sự lựa chọn khó có thể bỏ qua cho du khách trong chuyến du lịch nghỉ dưỡng của mình. Đến Tây Bắc, du khách...",
  },
  {
    img: "https://saigontourist.net/uploads/destination/cover-tour-tag/cover-tour-hanoi.jpg",
    title: "TOUR HÀ NỘI",
    des: "Du lịch Hà Nội. Hành trình khám phá thủ đô Hà Nội nơi lưu giữ biết bao tinh hoa của dân tộc, lưu dấu nhiều di tích như Hồ Gươm, Chùa Quán Sứ, Hồ Tây, 36 phố phường. Hà Nội  còn được biết đến bởi những món ăn nổi tiếng của người Hà Thành: phở, chả cá Lã Vọng, bánh tôm Hồ Tây",
  },
  {
    img: "https://saigontourist.net/uploads/destination/TrongNuoc/Halong/HaLong_1125675125.jpg",
    title: "TOUR HẠ LONG",
    des: "Du lịch Hạ Long. Vịnh Hạ Long -  một trong 7 kỳ quan thiên nhiên mới của thế giới - nhiều lần được UNESCO công nhận là di sản thiên nhiên của thế giới với hàng nghìn hòn đảo được làm nên bởi tạo hoá kỳ vĩ và sống động. Hạ Long như bức tranh thủy mặc khổng lồ, tuyệt đẹp và là một điểm du lịch rất hấp dẫn với...",
  },
  {
    img: "https://saigontourist.net/uploads/Tour%20Tag/HoaTayBac_371682664.jpg",
    title: "TOUR SAPA",
    des: "Du lịch Sapa. Thị trấn trong mây-Sapa ẩn chứa bao điều kỳ diệu của thiên nhiên với địa hình của núi đồi, màu xanh của rừng tạo nên một vùng có nhiều cảnh sắc thơ mộng. Núi non hùng vĩ cùng trải nghiệm độc đáo với cuộc sống của đồng bào dân tộc thiểu số luôn hấp dẫn khách du lịch khi đến với Sapa.",
  },
  {
    img: "https://saigontourist.net/uploads/destination/TrongNuoc/Ninhbinh/river-in-NinhBinh-Vietnam_362120093.jpg",
    title: "TOUR NINH BÌNH",
    des: "Du lịch Ninh Bình",
  },
  {
    img: "https://saigontourist.net/uploads/destination/TrongNuoc/HaiPhong/Cat-Ba-island-from-above.jpg",
    title: "TOUR HẢI PHÒNG",
    des: "Du Lịch Hải Phòng ",
  },
  {
    img: "https://saigontourist.net/uploads/destination/cover-tour-tag/tour-tag-phanthiet2.jpg",
    title: "TOUR PHAN THIẾT",
    des: "Du lịch Phan Thiết. Không chỉ sở hữu những khung cảnh thiên nhiên xinh đẹp như Lầu Ông Hoàng, tháp Chàm, Hòn Rơm, đỉnh Đồi Hồng, vùng đất này còn là một điểm đến văn hóa hấp dẫn với cộng đồng dân cư đa dạng người Hoa, người Chăm. Cùng với những món ăn đặc sắc và hải sản tươi ngon.",
  },
  {
    img: "https://saigontourist.net/uploads/destination/cover-tour-tag/tour-tag-nhatrang.jpg",
    title: "TOUR NHA TRANG",
    des: "Du lịch Nha Trang. Đến với thành phố biển Nha Trang, du khách sẽ bị đánh gục bởi sự quyến rũ và năng động của thành phố xinh đẹp này, với hòn Mun Hòn Tằm nước trong veo, tháp Bà Ponagar hoàn mỹ của người Chăm, cảng Vũng Rô, làng Đại Lãnh và chợ Đầm nhộn nhịp.",
  },
  {
    img: "https://saigontourist.net/uploads/destination/cover-tour-tag/cover-tour-dalat2.jpg",
    title: "TOUR ĐÀ LẠT",
    des: "Du lịch Đà Lạt. Đà Lạt mộng mơ luôn là điểm du lịch thu hút nhiều du khách bởi khí hậu và quang cảnh thiên tuyệt vời. Du khách có thể ngắm nhìn Hồ Tuyền Lâm, thăm dinh Bảo Đại, Thiền Viện Trúc Lâm,... Vườn hoa đua nhau khoe sắc,những chuyến xe ngựa chạy quanh Hồ Xuân Hương cũng là những nét duyên của Đà Lạt...",
  },
  {
    img: "https://saigontourist.net/uploads/destination/TrongNuoc/BMT/The-Dray-Nur-Waterfall-Tay-Nguyen.jpg",
    title: "TOUR TÂY NGUYÊN",
    des: "Du lịch Tây Nguyên. Mảnh đất Tây Nguyên sẽ là sự lựa chọn độc đáo cho chuyến hành trình nghỉ dưỡng của du khách. Du khách sẽ có dịp chiêm ngưỡng vẻ đẹp Thác DrayNur - ngọn thác lớn và đẹp nhất Tây Nguyên, trải nghiệm cưỡi voi tại Buôn Đôn và thưởng thức chương trình biểu diễn Cồng chiêng.",
  },
  {
    img: "https://saigontourist.net/uploads/destination/cover-tour-tag/tour-tag-quynhon.jpg",
    title: "TOUR QUY NHƠN",
    des: "Du lịch Tuy Hoà - Quy Nhơn. Khám phá nhiều điều thú vị tại thành phố Quy Nhơn yên bình với sự kết hợp hài hòa giữa núi và biển. Eo gió - một ghềnh đá quanh năm lộng gió, Ghềnh đá đĩa - thắng cảnh núi non nước biếc tuyệt đẹp, hay vẻ đẹp hữa tình của núi rừng trùng điệp Hầm Hô.",
  },
  {
    img: "https://saigontourist.net/uploads/destination/cover-tour-tag/tour-tag-hue.jpg",
    title: "TOUR HUẾ",
    des: "Du lịch Huế. Nhắc đến Huế, ai cũng muốn một lần được chiêm ngưỡng các cung điện, đền đài mang hơi thở cổ xưa như Đại Nội, Ngọ Môn, Chùa Thiên Mụ, Lăng Tự Đức…Nét dịu dàng thư thái khi du khách ngồi thuyền rồng sông Hương thưởng thức ca hò Huế, thả hoa đăng cầu phúc lộc cũng được du khách yêu",
  },
  {
    img: "https://saigontourist.net/uploads/destination/TrongNuoc/Hanoi/chua-huong-ha-tay-hanoi1",
    title: "TOUR NGHỆ AN",
    des: "Du lịch Nghệ An, tham quan một vùng đất mang trong mình dấu ấn lịch sử, phong cảnh thiên nhiên tuyệt đẹp với cánh đồng hoa Hướng Dương vàng rực, đồi chè xanh bát ngát,...",
  },
  {
    img: "https://saigontourist.net/uploads/destination/cover-tour-tag/tour-tag-hoian.jpg",
    title: "TOUR ĐÀ NẴNG",
    des: "Du lịch Đà Nẵng. Thành phố  Đà Nẵng là một trong những điểm du lịch nghỉ dưỡng lý tưởng cho du khách với nhiều danh thắng tuyệt đẹp làm say lòng người như Ngũ Hành Sơn, Bà Nà, bán đảo Sơn Trà, đèo Hải Vân, sông Hàn thơ mộng và biển Mỹ Khê đẹp nhất hành tinh",
  },
  {
    img: "https://saigontourist.net/uploads/destination/cover-tour-tag/tour-tag-phuquoc.jpg",
    title: "TOUR PHÚ QUỐC",
    des: "Du lịch Phú Quốc. Phú Quốc là điểm đến dành cho du khách yêu thích hình thức du lịch nghỉ dưỡng và khám phá sinh thái tuyệt vời. Hành trình đến với thiên nhiên và chiêm ngưỡng Mũi Ông Đội, Đá Chào - thế giới san hô và cá biển sặc sỡ, biển Bãi Sao cát trắng mịn, dáng cong, nước xanh ngọc bích. ",
  },
  {
    img: "https://saigontourist.net/uploads/destination/cover-tour-tag/tour-tag-mekong.jpg",
    title: "TOUR MIỀN TÂY",
    des: "Du lịch miền Tây. Miền tây luôn là một điểm đến lý tưởng với vẻ đẹp êm dịu và yên bình của những vườn cây trái trĩu quả, cánh đồng lúa thẳng cánh cò bay và sự hiếu khách của con người nơi đây. Đến miền Tây, du khách có dịp nghỉ ngơi thư giãn sau những ngày làm việc bận rộn nơi đô thị ồn ào và hòa mình vào...",
  },
  {
    img: "https://saigontourist.net/uploads/destination/cover-tour-tag/tour-tag-condao.jpg",
    title: "TOUR CÔN ĐẢO",
    des: "Du lịch Côn Đảo. Ngày nay Côn Đảo được biết đến như địa điểm du lịch biển đảo hấp dẫn du khách trong và ngoài nước.  Những bãi biển trong vắt cùng bờ cát trắng mịn làm say mê biêt bao khách dụ lịch khi đặt chân tới Côn Đảo",
  },
  {
    img: "https://saigontourist.net/uploads/destination/cover-tour-tag/tour-tag-hotram-strip.jpg",
    title: "TOUR HỒ TRÀM",
    des: "Du lịch Hồ Tràm. Hồ Tràm là dải bờ biển dài nằm giữa Long Hải và Bình Châu, từng được công nhận là bãi biển đẹp và hoang sơ nhất thế giới do một kênh truyền hình nổi tiếng Mỹ bình chọn.  Bãi biển ở đây dài và đẹp, nước biển trong xanh, cát trắng và đặc biệt hải sản khá rẻ.",
  },
  {
    img: "https://saigontourist.net/uploads/destination/cover-tour-tag/tour-tag-TPHCM.jpg",
    title: "TOUR HỒ CHÍ MINH",
    des: "Du lịch TP. Hồ Chí Minh. Bưu điện Thành phố, nhà thờ Đức Bà, dinh Độc Lập.. là những công trình kiến trúc tiêu biểu và là điểm du lịch được nhiều du khách yêu thích khi đến thăm thành phố Hồ Chí Minh.",
  },
  {
    img: "https://saigontourist.net/uploads/destination/TrongNuoc/TayNinh/CaoDaiTemple_1700270617.jpg",
    title: "TOUR TÂY NINH",
    des: "Du lịch Tây Ninh",
  },
  {
    img: "https://saigontourist.net/uploads/destination/TrongNuoc/NamCatTien/NamCatTien-4.jpg",
    title: "TOUR ĐÔNG NAM BỘ",
    des: "Du lịch Đông Nam Bộ, tham quan các điểm du lịch hoang sơ nổi tiếng như rừng Nam Cát Tiên, Hồ thủy điện Trị An, ...",
  },
  {
    img: "https://saigontourist.net/uploads/destination/cover-tour-tag/tour-phao-hoa-da-nang.jpg",
    title: "PHÁO HOA ĐÀ NẴNG",
    des: "Lễ hội pháo hoa Quốc Tế Đà Nẵng là một trong những sự kiện rất lớn mang tầm cỡ quốc tế. Đây không chỉ là những lần bắn pháo hoa đơn giản mà có sự tham dự của các nước nổi tiếng trên thế giới. Hãy cùng Lữ hành Saigontourist tham gia tour xem bắn pháo hoa mới nhất 2023 nhé.",
  },
];

let html1 = arrImg.map((item) => {
  if (item.title.match(localStorage.getItem("href").toUpperCase())) {
    document.querySelector(
      ".box-tour-In"
    ).style.background = `url('${item.img}')`;
    return `<div class="title">
                <h1>${item.title}</h1>
                <p style="font-size: 14px;">${item.des}</p>
            </div>`;
  }
});

document.querySelector(".box-tour-In").innerHTML = html1
  .join()
  .replaceAll(",", "");
