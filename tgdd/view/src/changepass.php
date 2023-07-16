,<?php 
    $passold = "";
    $pasnew = "";
    $confirm = "";
    $error = ["","",""];
    if(isset($_POST["submitChangePass"])){
        $sql = "SELECT * FROM users WHERE username = '{$_GET["user"]}'";
        $result = mysqli_query($conn,$sql);
        $data = mysqli_fetch_array($result,MYSQLI_ASSOC);
        empty($_POST["passold"]) 
            ? $error[0] = "Vui lòng điền vào ô trống này" 
            : ($_POST["passold"] != $data["password"] 
                ? $error[0] = "Mật khẩu cũ không đúng" 
                : $passold = $_POST["passold"]);
        empty($_POST["passnew"]) 
            ? $error[1] = "Vui lòng điền vào ô trống này" 
            : (strlen($_POST["passnew"]) < 5 
                ? $error[1] = "Mật khẩu phải ít nhất 5 ký tự" 
                : $pasnew = $_POST["passnew"]);
        empty($_POST["confirm"])
            ? $error[2] = "Vui lòng điền vào ô trống này"
            : ($_POST["confirm"] != $_POST["passnew"]
                ? $error[2] = "Mật khẩu không khớp"
                : $confirm = $_POST["confirm"]);
        if($error[0] == "" && $error[1] == "" && $error[2] == ""){
            $sql_changePass = "UPDATE users SET password = '$pasnew' WHERE username = '{$_GET["user"]}'";
            $result_changePass = mysqli_query($conn,$sql_changePass);
            echo "<p style='color:green;font-weight: bold'>"."Đổi mật khẩu thành công"."<p>";
        }                
    }
?>
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