<?php include("./controller/forgetpass.php")?>

<div class="box-fotget">
     <form action="" method="post" id="formFotget">
        <h2>Quên mật khẩu</h2>
        <br>
        <p><?php echo $a?></p>
        <br>
        
        <p style="height: 20px;color:red"><?php echo $error?></p>
        <hr>
        <button style="background-color: gainsboro; color:#000"><a href="../index.php?page=login" style="display: block;color:#000;text-decoration: none;">Hủy</a></button>
        <button type="button" style="background-color: #1877f2;color:#fff" name="<?php echo $submitFotget?>"><?php echo $search?></button>
     </form>
</div>
<script>
    $(document).ready(() =>{
        $("#formFotget button:eq(1)").click(() =>{
            $("#formFotget p:eq(0) input").val() == "" 
                ? $("#formFotget p:eq(1)").html("Vui lòng điền vào ô trống này").css({"color":"red"}) 
                : ($("#formFotget p:eq(0) input").val().length < 5 
                        ? $("#formFotget p:eq(1)").html("Mật khẩu phải ít nhất 5 ký tự").css({"color":"red"})
                        : $("#formFotget button:eq(1)").attr("type","submit"));
        })
    })
</script>