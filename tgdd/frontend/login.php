<?php 
    $error_login = "";
    $email = "";
    $password = "";
    if(isset($_POST["submitLogin"])){
        
        $sql_checkLogin = "SELECT * FROM member WHERE email = '{$_POST['email']}' AND password = '{$_POST['password']}'";
        $result_checkLogin = mysqli_query($conn,$sql_checkLogin);
        $data_checkLogin = mysqli_fetch_all($result_checkLogin,MYSQLI_ASSOC);
        if(count($data_checkLogin) == 0){ 
            $error_login = "Incorrect account or password" ;
        }else{
            echo "<script>location.href = '../index.php'</script>";
        }
    }

?>
<div class="box-login">
    <form action="" method="post" id="formLogin">
        <h2>FORM LOGIN</h2>
        <div class="formLogin-row1">
            <label>Email</label><br>
            <input type="text" name="email" value="<?php echo $email?>" required/><i class="fa-solid fa-user"></i><br>
            <label>Password</label><br>
            <input type="password" name="password" value="<?php echo $password?>" required><i class="fa-solid fa-eye"></i>    
        </div><p style="color:red;margin-top: 10px;height: 30px;"><?php echo $error_login?></p>
        <div class="formLogin-row2">
            <input type="checkbox"><span>Remember me?</span>
            <a href="">Forgot Password?</a>
        </div>
        <div class="formLogin-row3">
            <p style="text-align: center;"><input type="submit" value="Login" name="submitLogin"></p>
            <p style="color:#fff; padding-bottom: 20px;">Not a member?<a href="../index.php?page=signup">Register here</a></p>
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
    })
</script>