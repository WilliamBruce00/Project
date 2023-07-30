<?php 
    $passold = "";
    $pasnew = "";
    $confirm = "";
    $error = ["","",""];
    if(isset($_POST["submitChangePass"])){
        $check = $data->getData("SELECT * FROM users WHERE username = '{$_GET['user']}'");
        empty($_POST["passold"]) 
            ? $error[0] = "Vui lòng điền vào ô trống này" 
            : ($_POST["passold"] != $check[0]["password"] 
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
            $data->updateUser($pasnew,$_GET["user"]);
            echo "<p style='color:green;font-weight: bold'>"."Đổi mật khẩu thành công"."<p>";
            $passold = "";
            $pasnew = "";
            $confirm = "";
        }                
    }
?>