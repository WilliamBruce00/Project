<div class="box-profile">
    <div class="box-profile-left">
        <p><a href="../index.php?page=profile&pagachild=user&user=<?php echo $_GET["user"]?>">Tài khoản của tôi</a></p>
        <p><a href="../index.php?page=profile&pagachild=change&user=<?php echo $_GET["user"]?>">Đổi mật khẩu</a></p>
        <p><a href="../index.php?page=profile&pagachild=orderu&user=<?php echo $_GET["user"]?>">Đơn mua</a></p>
    </div>
    <div class="box-profile-right">
        <?php 
            if($_GET["pagachild"] == "user"){
                include("./view/src/user.php");
            }else if($_GET["pagachild"] == "change"){
                include("./view/src/changepass.php");
            }else if($_GET["pagachild"] == "orderu"){
                include("./view/src/orderu.php");
            }
        ?>
    </div>
</div>
