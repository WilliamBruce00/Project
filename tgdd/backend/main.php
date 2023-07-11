<?php 
    $sql_prod = "SELECT * FROM kinhte";
    $result_prod = mysqli_query($conn,$sql_prod);
    $total_prod = mysqli_num_rows($result_prod);
    
    $sql_user = "SELECT * FROM users";
    $result_user = mysqli_query($conn,$sql_user);
    $total_user = mysqli_num_rows($result_user);

    $sql_combo = "SELECT * FROM combo";
    $result_combo = mysqli_query($conn,$sql_combo);
    $total_combo = mysqli_num_rows($result_combo);
?>

<div class="main">
    <div class="main-top">
        <i class="fa-solid fa-house"></i>
    </div>
    <div class="main-bottom">
        <div class="main-bottom-box">
            <div class="box-item">
                <p>
                    <i class="fa-solid fa-users"></i>
                </p>
                <p>Thành viên</p>
                <p><?php echo $total_user?></p>
            </div>
            <div class="box-item">
                <p>
                    <i class="fa-solid fa-table-cells-large"></i>
                </p>
                <p>Sản phẩm</p>
                <p><?php echo $total_prod?></p>
            </div>
            <div class="box-item">
                <p>
                    <i class="fa-solid fa-table-cells"></i>
                </p>
                <p>Combo</p>
                <p><?php echo $total_combo?></p>
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