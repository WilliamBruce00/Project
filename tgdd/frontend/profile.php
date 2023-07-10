<div class="box-profile">
    <div class="box-profile-left">
        <p><a href="../index.php?page=profile&pagachild=user&user=<?php echo $_GET["user"]?>">Tài khoản của tôi</a></p>
        <p><a href="../index.php?page=profile&pagachild=change&user=<?php echo $_GET["user"]?>">Đổi mật khẩu</a></p>
    </div>
    <div class="box-profile-right">
        <?php 
            if($_GET["pagachild"] == "user"){
                include("./frontend/user.php");
            }else if($_GET["pagachild"] == "change"){
                include("./frontend/changepass.php");
            }
        ?>
    </div>
</div>