<?php 
    if(isset($_GET["id"])){
        $sql = "SELECT * FROM kinhte INNER JOIN details USING(name) WHERE id = '{$_GET['id']}'";
        $result = mysqli_query($conn,$sql);
        $data = mysqli_fetch_array($result,MYSQLI_ASSOC);
        
    }

?>

<div class="box-details">
    <div class="box-details-wrap">
        <div class="wrap-left">
            <div class="wrap-left-left">
                <img src=<?php echo $data['img']?>>
            </div>
            <div class="wrap-left-right">
                <h2>Thông tin chi tiết</h2>
                <p>- Tên sách: <?php echo $data['name']?></p>
                <p>- Tác giả: <?php echo $data['auchor']?></p>
                <p>- Ngôn ngữ: Tiếng Việt</p>
                <p>- Nhà xuất bản: <?php echo $data['NXB']?></p>
                <p>- Nhà phát hành: <?php echo $data['NPH']?></p>
                <p>- Kích thước: <?php echo $data['size']?></p>
                <p>- Số trang: <?php echo $data['Npage']?></p>
                <p>- Khối lượng: <?php echo $data['weight']?></p>
                
            </div>
        </div>
        <div class="wrap-right">
            <div class="book">
                <p style="font-weight: 500; font-size: 17px;">Thông tin thanh toán</p>
                <p style="color: gray">-----------------------------------------------</p><br>
                <div class="info-pay" style="position: relative;">
                    <span style="width: 200px;display: inline-block;">Giá bán</span><span><?php echo $data['price']?></span>
                    <br><br><br>
                    <span style="width: 200px;display: inline-block;">Tổng tiền</span><span><?php echo $data['price']?></span>
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
                    <button>THÊM VÀO GIỎ HÀNG</button>
                    <button>THANH TOÁN</button>
                </div>
            </div>
        </div>
    </div>
    <div class="intro">
        <h3>GIỚI THIỆU SÁCH</h3><br>
        <p style="font-size: 20px;color:gray"><?php echo $data['name']?></p><br><br>
        <p style="font-size: 17px;line-height: 25px;"><?php echo $data['intro']?></p>
    </div>
</div>
<script src="../js/pay.js"></script>

<script>
    $(document).ready(() =>{
        $("table").children().click((e) =>{
            e.target.innerHTML == "+" 
                ? $(".number").html(parseInt($(".number").html()) + 1) 
                : ($(".number").html() == "1" ? $(".number").html("1") : $(".number").html(parseInt($(".number").html()) - 1))
            let total = parseInt($(".book span:eq(1)").html().replace(".","")) * parseInt($(".number").html());
            $(".book span:eq(3)").html(total.toLocaleString().replace(',','.'));
        })    
        

    })
</script>