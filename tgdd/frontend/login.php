<?php ob_start();
    $error_login = "";
    $email = "";
    $password = "";
    $user = "Login";
    if(isset($_POST["submitLogin"])){
        
        $sql_checkLogin = "SELECT * FROM users WHERE email = '{$_POST['email']}' AND password = '{$_POST['password']}'";
        $result_checkLogin = mysqli_query($conn,$sql_checkLogin);
        $data_checkLogin = mysqli_fetch_all($result_checkLogin,MYSQLI_ASSOC);
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
<div class="box-login">
    <form action="" method="post" id="formLogin">
        <h2>FORM LOGIN</h2>
        <div class="formLogin-row1">
            <label>Email</label><br>
            <input type="text" name="email" value="<?php echo $email?>" user="<?php echo $user?>" /><i class="fa-solid fa-user"></i><br>
            <label>Mật khẩu</label><br>
            <input type="password" name="password" value="<?php echo $password?>" ><i class="fa-solid fa-eye"></i>    
        </div><p style="color:red;margin-top: 10px;height: 30px;"><?php echo $error_login?></p>
        <div class="formLogin-row2">
            <input type="checkbox"><span>Ghi nhớ tài khoản?</span>
            <a href="../index.php?page=fotget">Quên mật khẩu?</a>
        </div>
        <div class="formLogin-row3">
            <p style="text-align: center;"><input type="button" value="Login" name="submitLogin"></p>
            <p style="color:#fff; padding-bottom: 20px;">Bạn chưa có tài khoản?<a href="../index.php?page=signup">Đăng ký ngay</a></p>
        </div>
    </form>
</div>
<script>
    let label1 = ["250px","270px"];
    let label2 = ["320px","340px"];
    let color = ["#fff","gray"];
    let type = ["password","text"];
    $(document).ready(() =>{
        for(let i = 0;i<document.querySelector(".formLogin-row1").children.length;i++){
            document.querySelector(".formLogin-row1").children[i].onfocus = (e) =>{
                $(`.formLogin-row1 [name=${e.target.getAttribute("name")}]`).attr("name") == "email"
                    ? $(".formLogin-row1 label:eq(0)").css({"top": label1[0],"color": color[0]}) 
                    : $(".formLogin-row1 label:eq(1)").css({"top": label2[0],"color": color[0]});
            }
            document.querySelector(".formLogin-row1").children[i].onblur = (e) =>{
                $(`.formLogin-row1 [name=${e.target.getAttribute("name")}]`).val() == "" && $(`.formLogin-row1 [type=${e.target.getAttribute("type")}]`).attr("type") == "text"
                    ? $(".formLogin-row1 label:eq(0)").css({"top": label1[1],"color": color[1]}) 
                    : ($(`.formLogin-row1 [name=${e.target.getAttribute("name")}]`).val() == "" && $(`.formLogin-row1 [type=${e.target.getAttribute("type")}]`).attr("type") == "password"
                        ? $(".formLogin-row1 label:eq(1)").css({"top": label2[1],"color": color[1]}) 
                        : "");
            }
        }
        $(".fa-eye").click(() =>{
            $(".formLogin-row1 input:eq(1)").attr("type",type.reverse()[0]) ;
        })  
        $(".formLogin-row3 p input:eq(0)").click((e) =>{
            $(".formLogin-row1 input:eq(0)").val() == "" || $(".formLogin-row1 input:eq(1)").val() == ""
                ? $("#formLogin p:eq(0)").html("Vui long dien day du thong tin") 
                : $(".formLogin-row3 p input:eq(0)").attr("type","submit");
        })
        if($(".formLogin-row1 input:eq(0)").attr("user") != "Login"){
            localStorage.setItem("user",$(".formLogin-row1 input:eq(0)").attr("user"))
        }    
        localStorage.getItem("user") !== null ? location.href = "../index.php" : "";
    })
</script>