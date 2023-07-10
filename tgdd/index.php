<?php 
    include("./config/db_connection.php");
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div class="container">
        <?php include("./frontend/header.php")?>
        <?php include("./frontend/nav.php") ?>
        <div class="main">
            <?php 
                switch($page){
                    case "blockchain": include("./frontend/kinhte.php");break;
                    case "kinhte": include("./frontend/kinhte.php");break;  
                    case "home": include("./frontend/main.php");break;
                    case "filter": include("./frontend/filter.php");break;
                    case "details": include("./frontend/details.php");break;
                    case "login": include("./frontend/login.php");break;
                    case "signup": include("./frontend/signup.php");break;
                    case "profile":include("./frontend/profile.php");break;
                    case "fotget": include("./frontend/forgetpass.php");break;
                }        
                
                
                
                
            ?>
        </div>
        <?php include("./frontend/footer.php")?>
    </div>
</body>
</html>