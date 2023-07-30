<?php 
    include("./model/db_connection.php");
?>
<?php 
    $page = "home";
    if(isset($_GET["page"])){
        $page = $_GET["page"];
    }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/index.css">
    <link rel="stylesheet" href="./css/economy.css">
    <link rel="stylesheet" href="./css/details.css">
    <link rel="stylesheet" href="./css/login.css">
    <link rel="stylesheet" href="./css/signup.css">
    <link rel="stylesheet" href="./css/profile.css">
    <link rel="stylesheet" href="./css/changepass.css">
    <link rel="stylesheet" href="./css/fotgetpass.css">
    <link rel="stylesheet" href="./css/cart.css">
    <link rel="stylesheet" href="./css/order.css">
    <link rel="stylesheet" href="./css/orderu.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/BrowserFS/2.0.0/browserfs.min.js" integrity="sha512-mz0EI+Ay1uIJP7rZEX8C/JlTAcHRIQ8Sny4vxmmj8MSzDJgG9NxxY2pUmOGv1lO7imFIFMyjjCzEXEywNgaUdQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="container">
        <?php include("./view/src/header.php")?>
        <?php include("./view/src/nav.php") ?>
        <div class="main">
            <?php 
                switch($page){
                    case "blockchain": include("./view/src/kinhte.php");break;
                    case "languge": include("./view/src/kinhte.php");break;
                    case "economy": include("./view/src/kinhte.php");break;  
                    case "home": include("./view/src/main.php");break;
                    case "filter": include("./view/src/filter.php");break;
                    case "details": include("./view/src/details.php");break;
                    case "login": include("./view/src/login.php");break;
                    case "signup": include("./view/src/signup.php");break;
                    case "profile":include("./view/src/profile.php");break;
                    case "fotget": include("./view/src/forgetpass.php");break;
                    case "cart": include("./view/src/cart.php");break;
                    case "literature": include("./view/src/kinhte.php");break;
                    case "IT": include("./view/src/kinhte.php");break;
                    case "order": include("./view/src/order.php");break;
                }        
            ?>
        </div>
        <?php include("./view/src/footer.php")?>
    </div>
</body>
</html>