<div class="main__content">
    <div class="main__content--prod">
        <div class="item one">
            <a href=""><img src="https://www.vinabook.com/images/thumbnails/promo/802x480/363192_tpchforbes2023.jpg"></a> 
        </div>
        <div class="item two">
            <a href=""><img src="https://www.vinabook.com/images/thumbnails/promo/802x480/363119_1111.jpg"></a>
        </div>
        <div class="item three">
            <a href=""><img src="https://www.vinabook.com/images/thumbnails/promo/802x480/363501_bschehon.jpg"></a>
        </div>
        <div class="item four">
            <a href=""><img src="https://www.vinabook.com/images/thumbnails/promo/802x480/363107_thayicucsng.jpg"></a>
        </div>
        <div class="item five">
            <a href=""><img src="https://www.vinabook.com/images/thumbnails/promo/802x480/363104_qgkn1.jpg"></a>
        </div>
        <div class="item six">
            <a href=""><img src="https://www.vinabook.com/images/thumbnails/promo/802x480/363109_f1131000x15001.jpg"></a>
        </div>
        
    </div>
    
</div>
<br>
<br>
<div class="main__row3">
    <h2>GIỜ VÀNG DEAL SỐC</h2>
    <hr style="width: 600px; border-bottom: 3px solid #000;">
    <p style="color:#000;font-weight: 600;margin-top: 10px;">Kết thúc trong</p>
    <div class="watch">
        <p>
            <span>00</span>
        </p>    
        <span>:</span>
        <p>
            <span>00</span>
        </p>
        <span>:</span>
        <p>
            <span>00</span>
        </p>
    </div>
    <br>
    <div class="main__row3--product">
        <?php include("./controller/deal.php") ?>
    </div>
    <div class="controls">
        <i class="fa-solid fa-angle-left"></i>
        <i class="fa-solid fa-angle-right"></i>
    </div>
</div>
<br>
<br>
<div class="main__row1">
    <h2>SÁCH MỚI</h2>
    <hr style="width: 600px; border-bottom: 3px solid #000;">
    <br><br>
    
    <div class="main__row1--product">
        <?php include("./controller/new.php")?>
    </div>
</div>
<br><br>
<div class="main__row2">
    <h2>COMBO Giá Ưu Đãi</h2>
    <hr style="width: 600px; border-bottom: 3px solid #000;">
    <br><br>
    <div class="main__row2--product">
        <?php 
            foreach($data as $value){
                $key1 = $value["name"];
                $key5 = $value["img"];
                $key2 = $value["auchor"];
                $key3 = $value["pbefore"];
                $key4 = $value["pafter"];
                echo "<div class='main__row2--prod'>
                        <div class='main__row2--prod--top'>
                            <img src='$key5'>
                        </div>
                        <div class='main__row2--prod--bottom'> 
                            <p>
                                <a href=''>$key1</a>
                            </p>
                            <p>$key2</p>
                            <p style='color:#000;font-weight:normal'>
                                <del>{$key3}đ</del>
                            </p>
                            <p style='color:red;font-weight:bold'>{$key4}đ</p>
                        </div>
                </div>";
            }
        ?>
    </div>
</div>
<script src="../../js/watch.js"></script>
<script src="../../js/slide.js"></script>
