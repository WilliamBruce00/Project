<?php 
    $a = '<input type="text" placeholder="Vui lòng nhập email hoặc tên đăng nhập" name="fotget"required>';
    $submitFotget = "submitFotget";
    $error = "";
    $username = "";
    $search = "Tìm kiếm";
    if(isset($_POST["submitFotget"])){
        $sql_fotget = "SELECT * FROM users WHERE username = '{$_POST['fotget']}' OR email = '{$_POST['fotget']}'";
        $result_fotget = mysqli_query($conn,$sql_fotget);
        $data_fotget = mysqli_fetch_all($result_fotget,MYSQLI_ASSOC);
        
        if(count($data_fotget) == 0){
            $error = "Thông tin tài khoản không tồn tại trong hệ thống";
        }else if(count($data_fotget) != 0){
            echo "<script>location.href = '../index.php?page=fotget&users={$data_fotget[0]['username']}'</script>";
        }
    }
    if(isset($_GET["users"])){
        $a = '<input type="text" placeholder="Nhập mật khẩu mới" name="change"required>'.'<br><br>'.'<input type="text" placeholder="Xác nhận mật khẩu mới" name="change2"required>';
        $submitFotget = "submitChange";
        $search = "Đổi mật khẩu";
    }
    if(isset($_POST["submitChange"])){
        if($_POST["change2"] === $_POST["change"]){
            $sql_change = "UPDATE users SET password = '{$_POST['change']}' WHERE username = '{$_GET['users']}'";
            $reuslt_change = mysqli_query($conn,$sql_change);
            if($reuslt_change){
                echo "<script>location.href = '../index.php?page=login'</script>";
            }
        }else{
            $error = "Mật khẩu không trùng khớp";
        }
    }
    
    
?>

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