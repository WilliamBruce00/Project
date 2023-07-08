<?php 
    $page = "main";
    if(isset($_GET["page"])){
        $page = $_GET["page"];
        
    }
    else if(isset($_GET["page"])){
        $page = "main";
    }
    else if(isset($_GET["page"])){
        $page = "sign";
    }
    
?>
<?php 
    $userlogin = "LOGIN";
    $userlogout = "SIGN UP";
    $home = "QUIZ TEST EXAM";
    $href_home = "../index.php";
    $href_login = "../index.php?page=login";
    $href_logout = "../index.php?page=sign";
    $href_home_full = "<a href = '$href_home'>$home</a>";
    $href_login_full = "<a href = '$href_login'>$userlogin</a>";
    $href_logout_full = "<a href = '$href_logout'>$userlogout</a>";
    if(isset($_GET["username"])){
        $userlogin = $_GET["username"];
        $userlogout = "LOGOUT";
        
        $href_home_full = "<a href = '$href_home?username=$userlogin'>$home</a>";
        $href_login_full = "<a href = '../index.php?page=infouser&username=$userlogin'>$userlogin</a>";
        $href_logout_full = "<a href ='$href_home'>$userlogout</a>";
    }
    
    
    
    
        
          
          
        
          
          
    
      
          
      
    
          
      
         
        
    
?>
<div class="header">
    <div class="header__content">
        <div class="header__content--title">
            <h2><?php echo $href_home_full?></h2>
        </div>
        <div class="header__content--user">
            <button><?php echo $href_login_full?></button>
            <button><?php echo $href_logout_full?></button>
        </div>
    </div>
</div> 

