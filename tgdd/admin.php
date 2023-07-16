<?php 
    include("./model/db_connection.php")
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/admin.css">
    <link rel="stylesheet" href="./css/addproduct.css">
    <link rel="stylesheet" href="./css/member.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>
<body>

    <div class="container">
        <aside>
            <div class="aside-box">
                <div class='close' style="text-align: right;">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div class="img">
                    <img src="./img/businessman_6997519.png">
                    <p>Hello, Admin</p>
                </div>
                <div class="content">
                    <ul>
                        <li><a href="./admin.php"><i class="fa-solid fa-house" style="margin-right: 5px;"></i>Trang chủ</a></li>
                        <li><a href="./admin.php?page=member"><i class="fa-solid fa-users" style="margin-right: 5px;"></i>Thành viên</a></li>
                        <li><a href="./admin.php?page=product&ofpage=1"><i class="fa-solid fa-table-cells-large" style="margin-right: 5px;"></i>Sản phẩm</a></li>
                        <li><a href=""><i class="fa-solid fa-table-cells" style="margin-right: 5px;"></i>Combo</a></li>
                        <li><a href=""><i class="fa-solid fa-table-list" style="margin-right: 5px;"></i>Đặt hàng</a></li>
                    </ul>
                </div>
            </div>
        </aside>
        <div class="wrap">
            <?php include("./view/admin/header.php")?>
            <?php 
                if(isset($_GET['page']) && $_GET['page'] == "member"){
                    include("./view/admin/member.php");
                }
                else if(isset($_GET['page']) && $_GET['page'] == "product"){
                    include("./view/admin/product.php");
                }
                else{
                    include("./view/admin/main.php");

                }
            ?>
        </div>
    </div>
</body>
<script>
    $(document).ready(() =>{
        $(".fa-house").click(() =>{
            $("aside").css({
                "width":"200px",
                "padding": "10px",
            })
            $(".aside-box").css({"display":"block"})
            $(".house .fa-house").css({"display":"none"})
        })
        $(".fa-xmark").click(() =>{
            $("aside").css({
                "width":"0px",
                "padding":"0px",
            })
            $(".aside-box").css({"display":"none"})
            $(".house .fa-house").css({"display":"inline-block"})

        })
    })
</script>
<script src="./js/addproduct.js"></script> 
</html>