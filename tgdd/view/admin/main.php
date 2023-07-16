<?php 
    include("./controller/total_row.php");
?>

<div class="main">
    <div class="main-bottom">
        <div class="main-bottom-box">
            <div class="box-item">
                <p>
                    <i class="fa-solid fa-users"></i>
                </p>
                <p>Thành viên</p>
                <p><?php echo $total_user[0]['count']?></p>
            </div>
            <div class="box-item">
                <p>
                    <i class="fa-solid fa-table-cells-large"></i>
                </p>
                <p>Sản phẩm</p>
                <p><?php echo $total_prod[0]['count']?></p>
            </div>
            <div class="box-item">
                <p>
                    <i class="fa-solid fa-table-cells"></i>
                </p>
                <p>Combo</p>
                <p><?php echo $total_combo[0]['count']?></p>
            </div>
            <div class="box-item">
                <p>
                    <i class="fa-solid fa-table-list"></i>
                </p>
                <p>Đơn Đặt hàng</p>
            </div>
        </div>
    </div>
</div>