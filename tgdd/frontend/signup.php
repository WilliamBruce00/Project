<div class="box-signup">
    <form action="" method="post" id="formSignup">
        <h2>SIGNUP FORM</h2>
        <input type="text" name="user" placeholder="Username">
        <p></p>
        <input type="email" name="email" placeholder="Email">
        <p></p>
        <input type="password" name="pass" placeholder="Password">
        <p></p>
        <input type="password" name="confirm" placeholder="Confirm Password">
        <p></p>
        <button type="button" name="submitSignup">Sign up</button>
        <p style="color:#fff; text-align: center;padding-bottom: 20px;">Already have an account?<a href="">Login now</a></p>
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


   
                
            
            
            
        })
    })
</script>