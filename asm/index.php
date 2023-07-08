<?php 
    include("./config/db_connection.php");
?>    


        
    
    

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz test exam</title>
    <link rel="stylesheet" href="./css/index.css">
    <link rel="stylesheet" href="./css/login.css">
    <link rel="stylesheet" href="./css/infouser.css">
    <link rel="stylesheet" href="./css/rendering_question.css">
</head>
<body>
    <div class="container">
        <?php include("./frontend/header.php")?>
        <div class="main">
        <?php 
            if($page == "main"){
                include("./frontend/main.php");
            }else if($page == "login"){
                include("./frontend/login.php");
            }else if($page == "sign"){
                include("./frontend/signup.php");
            }else if($page == "infouser"){
                include("./frontend/infouser.php");
            }else if($page == "question"){
                include("./frontend/question.php");
            }
        ?>
        </div>
        <?php include("./frontend/footer.php")?>
    </div>
</body>
</html>