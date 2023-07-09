<?php 
    $login = "<a href='../index.php?page=login'><i class='fa-solid fa-right-to-bracket' style='margin-right:5px;'></i>Login</a>";
    $signup = "<a href='../index.php?page=signup'><i class='fa-solid fa-user-plus' style='margin-right:5px;'></i>Sign up</a>";

    
    
        
?>

<div class="header">
    <div class="header__content">
        <div class="header__content--logo">
            <p>
                <i class="fa-solid fa-envelope"></i>
                <span>itbook@gmail.com</span>
            </p>
            <p>
                <i class="fa-solid fa-phone"></i>
                <span>Hotline: 1900 1800</span>
            </p>
        </div>
        <div class="header__content--user">
            <p>
            </p>
        </div>
    </div>    
    <div class="header__search">
        <p style="font-size: 25px;">
            <a href="../index.php?page=home" style="text-decoration: none; color: #000;">
                <span style="color: #fff;font-size: 35px;font-weight: bold;">Vina</span><span>Book</span>
            </a>
        </p>
        
        <form action="" id="formSearch">
            <input type="text" placeholder="Search...">
            <button>
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
        <p>
            <a href=""><i class="fa-solid fa-cart-shopping"></i> GIỎ HÀNG</a>
        </p>
    </div>
</div>
<script>
    $(document).ready(() =>{
        if(localStorage.getItem("user") === null){
            $(".header__content--user p").html(
                "<a href='../index.php?page=login'><i class='fa-solid fa-right-to-bracket' style='margin-right:5px;'></i>Login</a><a href='../index.php?page=signup'><i class='fa-solid fa-user-plus' style='margin-right:5px;'></i>Signup</a>"
            )    
        }else{
            $(".header__content--user p").html(
                `<a href='../index.php?page=login'><i class='fa-solid fa-user' style='margin-right:5px;'></i>${localStorage.getItem("user")}</a><a><i class='fa-solid fa-right-from-bracket' style='margin-right:5px;'></i>Logout</a>`
            )
        }
        $(".header__content--user p").html().match("Logout") !== null ? $(".header__content--user p a:eq(1)").click((e) =>{
            localStorage.removeItem("user");
            location.reload();
        }) : "";
    })
            
            
                
    
</script>