<?php ob_start();
    $error_login = "";
    $email = "";
    $password = "";
    $user = "Login";
    if(isset($_POST["submitLogin"])){
        $data_checkLogin = $data->getData("SELECT * FROM users WHERE email = '{$_POST['email']}' AND password = '{$_POST['password']}'")->fetch_all(MYSQLI_ASSOC);
        if(!$data_checkLogin){
            $error_login = "Tài khoản hoặc mật khẩu không đúng";
            $data_checkLogin[0]["username"] = "";
        }else{
            $user = $data_checkLogin[0]["username"];
            // echo "<script>location.href = '../index.php?user={$data_checkLogin[0]['username']}'</script>";
        }
        
        
    }
ob_end_flush()
?>