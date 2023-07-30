<?php 
   include("./controller/add_user.php");
?>
    
<div class="box-signup">
    <form action="" method="post" id="formSignup">
        <h2>SIGNUP FORM</h2>
        <input type="text" name="user" placeholder="Tên đăng nhập"><i class="fa-solid fa-user"></i>
        <p></p>
        <input type="email" name="email" placeholder="Email"><i class="fa-solid fa-envelope"></i>
        <p></p>
        <input type="password" name="pass" placeholder="Mật khẩu"><i class="fa-solid fa-eye"></i>
        <p></p>
        <input type="password" name="confirm" placeholder="Xác nhận mật khẩu"><i class="fa-solid fa-eye"></i>
        <p></p>
        <button type="button" name="submitSignup">Đăng ký</button>
        <p style="color:#fff; text-align: center;padding-bottom: 20px;">Bạn đã có tài khoản?<a href="../index.php?page=login">Đăng nhập ngay</a></p>
    </form>
</div>
<script src="../../js/signup.js"></script>

    
