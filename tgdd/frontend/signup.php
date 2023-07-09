<?php 
    if(isset($_POST["submitSignup"])){
        $sql_insertUser = "INSERT INTO member(username,email,password) VALUES ('{$_POST['user']}','{$_POST['email']}','{$_POST['pass']}')";
        $result_insertUser = mysqli_query($conn,$sql_insertUser);
        echo "<script>window.location.href = '../index.php'</script>";
    }
?>
    
<div class="box-signup">
    <form action="" method="post" id="formSignup">
        <h2>SIGNUP FORM</h2>
        <input type="text" name="user" placeholder="Username"><i class="fa-solid fa-user"></i>
        <p></p>
        <input type="email" name="email" placeholder="Email"><i class="fa-solid fa-envelope"></i>
        <p></p>
        <input type="password" name="pass" placeholder="Password"><i class="fa-solid fa-eye"></i>
        <p></p>
        <input type="password" name="confirm" placeholder="Confirm Password"><i class="fa-solid fa-eye"></i>
        <p></p>
        <button type="button" name="submitSignup">Sign up</button>
        <p style="color:#fff; text-align: center;padding-bottom: 20px;">Already have an account?<a href="../index.php?page=login">Login now</a></p>
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
                    ? $(`#formSignup p:eq(${index})`).html("Please enter this field") 
                    : (item.length < 5 && index == 0 
                        ? $(`#formSignup p:eq(${index})`).html("Username must be more than 5 characters") 
                        : (!item.match(mailformat) && index == 1 
                            ? $(`#formSignup p:eq(${index})`).html("Please enter email format true") 
                            : (item.length < 5 && index == 2 
                                ? $(`#formSignup p:eq(${index})`).html("Password must be more than 5 characters") 
                                : (index == 3 && signup.confirm != signup.password 
                                    ? $(`#formSignup p:eq(${index})`).html("Please check password again") 
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