<?php 
    if(isset($_GET["id"])){
        $data = $data->getData("SELECT * FROM listbook WHERE id = '{$_GET['id']}'")->fetch_all(MYSQLI_ASSOC);
    }
?>

<div class="box-details">
    <div class="box-details-wrap">
        <div class="wrap-left">
            <div class="wrap-left-left">
                <img src='../uploads/<?php echo $data[0]['img']?>'>
            </div>
            <div class="wrap-left-right">
                <h2>Thông tin chi tiết</h2>
                <p><span style="width: 150px;display: inline-block;font-weight: bold;">- Tên sách:</span><span><?php echo $data[0]['name']?></span></p>
                <p><span style="width: 150px;display: inline-block;font-weight: bold;">- Tác giả:</span><span><?php echo $data[0]['auchor']?></span></p>
                <p><span style="width: 150px;display: inline-block;font-weight: bold;">- Ngôn ngữ:</span> <span>Tiếng Việt</span></p>
                <p><span style="width: 150px;display: inline-block;font-weight: bold;">- Nhà xuất bản:</span> <span><?php echo $data[0]['NXB']?></span></p>
                <p><span style="width: 150px;display: inline-block;font-weight: bold;">- Nhà phát hành:</span> <span><?php echo $data[0]['NPH']?></span></p>
                <p><span style="width: 150px;display: inline-block;font-weight: bold;">- Kích thước:</span> <span><?php echo $data[0]['size']?></span></p>
                <p><span style="width: 150px;display: inline-block;font-weight: bold;">- Số trang:</span> <span><?php echo $data[0]['page']?></span></p>
                <p><span style="width: 150px;display: inline-block;font-weight: bold;">- Khối lượng:</span> <span><?php echo $data[0]['weight']?></span></p>
                
            </div>
        </div>
        <div class="wrap-right">
            <div class="book">
                <p style="font-weight: 500; font-size: 17px;">Thông tin thanh toán</p>
                <p style="color: gray">-----------------------------------------------</p><br>
                <div class="info-pay" style="position: relative;">
                    <span style="width: 200px;display: inline-block;">Giá bán</span><span><?php echo $data[0]['price']?></span>
                    <br><br><br>
                    <span style="width: 200px;display: inline-block;">Tổng tiền</span><span><?php echo $data[0]['price']?></span>
                    <br><br><br>
                    <span style="width: 80px;display: inline-block;margin-top: -5px;">Số lượng</span>
                
                    <span>
                        <table border="1" style="position: absolute; right:0;top:80px">
                            <tr>
                                <th class='decrement'>-</th>
                                <th class='number' style="pointer-events: none;">1</th>
                                <th class='increment'>+</th>
                            </tr>
                        </table>
                    </span>    
                
                </div>
                <div class="btn-2">
                    <button index = <?php echo $data[0]['id']?>>THÊM VÀO GIỎ HÀNG</button>
                    <button>THANH TOÁN</button>
                </div>
            </div>
        </div>
    </div>
    <div class="intro">
        <h3>GIỚI THIỆU SÁCH</h3><br>
        <p style="font-size: 20px;color:gray"><?php echo $data[0]['name']?></p><br><br>
        <p style="font-size: 17px;line-height: 25px;"><?php echo $data[0]['intro']?></p>
    </div>
</div>
<script>
   
    $(document).ready(() =>{
        $("table").children().click((e) =>{
            e.target.innerHTML == "+" 
                ? $(".number").html(parseInt($(".number").html()) + 1) 
                : ($(".number").html() == "1" ? $(".number").html("1") : $(".number").html(parseInt($(".number").html()) - 1))
            let total = parseInt($(".book span:eq(1)").html().replace(".","")) * parseInt($(".number").html());
            $(".book span:eq(3)").html(total.toLocaleString().replace(',','.'));
        })   
        
        $(".btn-2 button:eq(0)").click(() =>{
            if(localStorage.getItem("user") !== null){
            let data = `{"data" :{"${$(".btn-2 button:eq(0)").attr("index")}" : {"name": "${$(".wrap-left-right p:eq(0) span:eq(1)").html()}","price": "${$(".info-pay span:eq(1)").html()}","img":"${$(".wrap-left-left img").attr("src")}","user":"${localStorage.getItem("user")}"}}}`;
            localStorage.setItem(localStorage.getItem("user"),localStorage.getItem(localStorage.getItem("user")) + data)
            localStorage.setItem(localStorage.getItem("user"),localStorage.getItem(localStorage.getItem("user")).replace("null",""))     
            localStorage.setItem(localStorage.getItem("user"),localStorage.getItem(localStorage.getItem("user")).replaceAll('}}{"data" :{',`,`))  
            alert("Đã thêm sản phẩm vào giỏ hàng");  
            }else{
                location.href = "../index.php?page=login";
            }  
        })
        $(".btn-2 button:eq(1)").click(() =>{
            location.href = `../index.php?page=order&name=${$(".wrap-left-right p:eq(0) span:eq(1)").html()}&price=${$(".info-pay span:eq(1)").html()}&userss=${$(".header__content--user p a:eq(0)").html().replace('<i class="fa-solid fa-user" style="margin-right:5px;"></i>','')}&quan=${$(".number").html()}`;
        })
        console.log($(".number").html())
    })
</script>