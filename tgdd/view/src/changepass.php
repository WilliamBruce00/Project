<?php include("./controller/change_pass.php") ?>
<h2>Đổi mật khẩu</h2>
<br>
<form action="" method="post" id="formChangePass">
    <input type="password" name="passold" placeholder="Mật khẩu cũ" value="<?php echo $passold?>">
    <p><?php echo $error[0] ?></p>
    <input type="password" name="passnew" placeholder="Mật khẩu mới" value="<?php echo $pasnew?>">
    <p><?php echo $error[1]?></p>
    <input type="password" name="confirm" placeholder="Xác nhận mật khẩu mới" value="<?php echo $confirm?>">
    <p><?php echo $error[2]?></p>
    <button type="submit" name="submitChangePass">Đổi mật khẩu</button>
</form>