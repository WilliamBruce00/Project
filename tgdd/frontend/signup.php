<?php 
    if(isset($_POST["submitSignup"])){
        $sql_insertUser = "INSERT INTO users(username,email,password) VALUES ('{$_POST['user']}','{$_POST['email']}','{$_POST['pass']}')";
        $result_insertUser = mysqli_query($conn,$sql_insertUser);
        echo "<script>window.location.href = '../index.php'</script>";
    }
?>
    
<div class="box-signup">
    <form action="" method="post" id="formSignup">
        <h2>SIGNUP FORM</h2>
        <input type="text" name="user" placeholder="Tên đăng nhập"><i class="fa-solid fa-user"></i>
        <p></p>
        <input type="email" name="email" placeholder="Email"><i class="fa-solid fa-envelope"></i>
        <p></p>
        <input type="password" name="pass" placeholder="Mật khẩu"><i class="fa-solid fa-eye"></i>
        <p></p>
        <input type="password" name="confirm" placeholder="Xác nhận mật khẩu"><i class="fa-solid fa-eye"></i>
        <p></p>
        <button type="button" name="submitSignup">Đăng ký</button>
        <p style="color:#fff; text-align: center;padding-bottom: 20px;">Bạn đã có tài khoản?<a href="../index.php?page=login">Đăng nhập ngay</a></p>
    </form>
</div>

<script>
    class Signup{
        constructor(name,email,password,confirm){
            this.name = name
            this.email = email
            this.password = password
            this.confirm = confirm

            this.obj = () =>{
                return {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    confirm: this.confirm
                }
            }
        }
    }
    let arr = [];
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let type = ["password","text"];
    let type1 = ["password","text"];
    let signup = new Signup("","","","");
    $(document).ready(() =>{
        $("#formSignup button").click(() =>{
            signup.name = $("#formSignup input:eq(0)").val();
            signup.email = $("#formSignup input:eq(1)").val();
            signup.password = $("#formSignup input:eq(2)").val();
            signup.confirm = $("#formSignup input:eq(3)").val();

            Object.values(signup.obj()).map((item,index) =>{
                item == "" 
                    ? $(`#formSignup p:eq(${index})`).html("Vui lòng điền vào ô trống này") 
                    : (item.length < 5 && index == 0 
                        ? $(`#formSignup p:eq(${index})`).html("Tên đăng nhập phải ít nhất 5 ký tự") 
                        : (!item.match(mailformat) && index == 1 
                            ? $(`#formSignup p:eq(${index})`).html("Định dạng email không hợp lệ") 
                            : (item.length < 5 && index == 2 
                                ? $(`#formSignup p:eq(${index})`).html("Mật khẩu phải ít nhất 5 ký tự") 
                                : (index == 3 && signup.confirm != signup.password 
                                    ? $(`#formSignup p:eq(${index})`).html("Mật khẩu không khớp") 
                                    : $(`#formSignup p:eq(${index})`).html("")))))
                
            })     
            $("#formSignup p").each(() =>{
                $("#formSignup p").text().length == 33 ? ($("#formSignup button").attr("type","submit")) : "";
            })   
            localStorage.setItem("user",$("#formSignup input:eq(0)").val())         
        })    
        $(".fa-eye:eq(0)").click(() =>{
            $("#formSignup input:eq(2)").attr("type",type.reverse()[0]);
        })
        $(".fa-eye:eq(1)").click(() =>{
            $("#formSignup input:eq(3)").attr("type",type1.reverse()[0]);
        })
            
            
            
        
    })
</script>