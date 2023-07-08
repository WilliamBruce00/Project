
    

<?php 
    $sql = "SELECT * FROM combo";
    $result = mysqli_query($conn,$sql);
    $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
    
?>
<?php 
    $sql_new = "SELECT * FROM kinhte ORDER BY id DESC limit 4";
    $result_new = mysqli_query($conn,$sql_new);
    $data_new = mysqli_fetch_all($result_new,MYSQLI_ASSOC);
?>
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
    <?php 
            foreach($data as $value){
                $key1 = $value["name"];
                $key5 = $value["img"];
                $key2 = $value["auchor"];
                $key3 = $value["pbefore"];
                $key4 = $value["pafter"];
                echo "<div class='main__row3--prod'>
                        <div class='main__row3--prod--top'>
                            <img src='$key5'>
                        </div>
                        <div class='main__row3--prod--bottom'> 
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
        <?php 
            foreach($data_new as $v_new){
                echo 
                    "<div class='main__row1--prod'>
                        <div class='main__row1--prod--top'>
                            <img src={$v_new['img']}>
                        </div>
                        <div class='main__row1--prod--bottom'>
                            <p>
                                <a href=''>{$v_new['name']}</a>
                            </p>
                            <p>{$v_new['auchor']}</p>
                            <p>{$v_new['price']}d</p>
                        </div>
                    </div>";
            
        }
    ?>
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
<hr>
<script src="../js/watch.js"></script>
<script src="../js/slide.js"></script>

