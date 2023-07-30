<?php include("./controller/login.php") ?>

<div class="box-login">
    <form action="" method="post" id="formLogin">
        <h2>FORM LOGIN</h2>
        <div class="formLogin-row1">
            <label>Email</label><br>
            <input type="text" name="email" value="<?php echo $email?>" user="<?php echo $user?>" /><i class="fa-solid fa-user"></i><br>
            <label>Mật khẩu</label><br>
            <input type="password" name="password" value="<?php echo $password?>" ><i class="fa-solid fa-eye"></i>    
        </div><p style="color:red;margin-top: 10px;height: 30px;"><?php echo $error_login?></p>
        <div class="formLogin-row2">
            <input type="checkbox"><span>Ghi nhớ tài khoản?</span>
            <a href="../index.php?page=fotget">Quên mật khẩu?</a>
        </div>
        <div class="formLogin-row3">
            <p style="text-align: center;"><input type="button" value="Login" name="submitLogin"></p>
            <p style="color:#fff; padding-bottom: 20px;">Bạn chưa có tài khoản?<a href="../index.php?page=signup">Đăng ký ngay</a></p>
        </div>
    </form>
</div>
<script src="../../js/login.js"></script>