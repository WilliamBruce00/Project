
    

<?php 
    class user_signup{
        public $user_sign;
        public $pass_sign;
        public $confirm_sign;

        public function __construct($user_sign,$pass_sign,$confirm_sign) {
            $this->user_sign = $user_sign;
            $this->pass_sign = $pass_sign;
            $this->confirm_sign = $confirm_sign;
        }
    }
    $object = new user_signup("","","");

    $error_signup = ["","",""];
    if(isset($_POST["signup"])){
        $object->user_sign = $_POST["user_sign"];
        $object->pass_sign = $_POST["pass_sign"];
        $object->confirm_sign = $_POST["confirm_sign"];

        empty($object->user_sign) ? $error_signup[0] = "Please enter username" :
            (strlen($object->user_sign) < 5 
                ? $error_signup[0] = "Username must be more than 5 characters" 
                : $object->user_sign = $_POST["user_sign"]);

        empty($object->pass_sign) ? $error_signup[1] = "Please enter password" :
            (strlen($object->pass_sign) < 5 
                ? $error_signup[1] = "Username must be more than 5 characters" 
                : $object->pass_sign = $_POST["pass_sign"]);   

        empty($object->confirm_sign) ? $error_signup[2] = "Please enter confirm password" :
            ($object->confirm_sign != $object->pass_sign 
                ? $error_signup[2] = "Password does not match" 
                : "");
        if(empty($error_signup[0]) && empty($error_signup[1]) && empty($error_signup[2])){
            
        }    
             
    }
?>


<div class="form-login">
    <h2>SIGN UP</h2>
    <form action="../index.php?page=sign" method="post">
        <input type="text" placeholder="Enter username" name="user_sign" value="<?php echo $object->user_sign?>"/>
        <p><?php echo $error_signup[0]?></p>
        <input type="password" placeholder="Enter password" name="pass_sign" value="<?php echo $object->pass_sign?>"/>
        <p><?php echo $error_signup[1]?></p>
        <input type="password" placeholder="Confirm password" name="confirm_sign" value="<?php echo $object->confirm_sign?>"/>
        <p><?php echo $error_signup[2]?></p>
        <input type="submit" name="signup" value="SIGN UP">
    </form>
</div>
<script src="../js/checkSignUp.js"></script>
   
