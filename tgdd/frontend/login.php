<div class="box-login">
    <form action="" method="post" id="formLogin">
        <h2>FORM LOGIN</h2>
        <div class="formLogin-row1">
            <label>Username</label><br>
            <input type="text" /><i class="fa-solid fa-user"></i><br>
            <label>Password</label><br>
            <input type="password"><i class="fa-solid fa-eye"></i>    
        </div>
        <div class="formLogin-row2">
            <input type="checkbox"><span>Remember me?</span>
            <a href="">Forgot Password?</a>
        </div>
        <div class="formLogin-row3">
            <p style="text-align: center;"><input type="button" value="Login"></p>
            <p style="color:#fff; padding-bottom: 20px;">Not a member?<a href="">Register here</a></p>
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
                $(`.formLogin-row1 [type=${e.target.getAttribute("type")}]`).attr("type") == "text" 
                    ? $(".formLogin-row1 label:eq(0)").css({"top": label1[0],"color": color[0]}) 
                    : $(".formLogin-row1 label:eq(1)").css({"top": label2[0],"color": color[0]});
            }
            document.querySelector(".formLogin-row1").children[i].onblur = (e) =>{
                $(`.formLogin-row1 [type=${e.target.getAttribute("type")}]`).val() == "" && $(`.formLogin-row1 [type=${e.target.getAttribute("type")}]`).attr("type") == "text"
                    ? $(".formLogin-row1 label:eq(0)").css({"top": label1[1],"color": color[1]}) 
                    : ($(`.formLogin-row1 [type=${e.target.getAttribute("type")}]`).val() == "" && $(`.formLogin-row1 [type=${e.target.getAttribute("type")}]`).attr("type") == "password"
                        ? $(".formLogin-row1 label:eq(1)").css({"top": label2[1],"color": color[1]}) 
                        : "");
                    
                
            }
        }
        $(".fa-eye").click(() =>{
            $(".formLogin-row1 input:eq(1)").attr("type",type.reverse()[0]) 
        })    
            
        
            
        
    })
</script>