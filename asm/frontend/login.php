<?php
    $error = ["",""];
    $username = "";
    $password = "";
    if(isset($_POST["submit"])){
        $username = $_POST["user"];session_start();$_SESSION["username"] = $username;
        $password = $_POST["pass"];
        empty($username) ? $error[0] = "Please enter this field" : $username = $_POST["user"];
        empty($password) ? $error[1] = "Please enter this field" : $password = $_POST["pass"];
        
    
        
        
        
        
        if($error[0] == "" && $error[1] == ""){
            header("location: ../index.php?username=$username");
        }    
            
            
         
              
            
        
    }
?>

    




<div class="form-login">
    <h2>LOGIN FORM</h2>
    <form action="../index.php?page=login" method="post">
        <input type="text" placeholder="Username" name="user" value="<?php echo $username?>">
        <p><?php echo $error[0]?></p>
        <input type="password" placeholder="Password" name="pass"value="<?php echo $password?>">
        <p><?php echo $error[1]?></p>
        <input type="checkbox"><label>Ghi nho</label>
        <a href='' style="margin-left: 60px;text-decoration: none; color: #00fff0">Quen mat khau</a>
        <input type="submit" name="submit" value="LOGIN">
    </form>
    <p>Click here to <a href="../index.php?page=sign">Register</a></p>
</div>