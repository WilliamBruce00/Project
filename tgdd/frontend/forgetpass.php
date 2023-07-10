<?php 
    if(isset($_POST["submitFotget"])){
        $sql_fotget = "SELECT * FROM users WHERE username = '{$_POST['fotget']}' OR email = '{$_POST['fotget']}'";
        $result_fotget = mysqli_query($conn,$sql_fotget);
        $data_fotget = mysqli_fetch_all($result_fotget,MYSQLI_ASSOC);
        print_r(count($data_fotget));
    }
?>

<div class="box-fotget">
     <form action="" method="post" id="formFotget">
        <h2>Quên mật khẩu</h2>
        <br>
        <input type="text" placeholder="Vui lòng nhập email hoặc tên đăng nhập" name="fotget"required>
        <br>
        <br>
        <hr>
        <button style="background-color: gainsboro; color:#000"><a href="../index.php?page=login" style="display: block;color:#000;text-decoration: none;">Hủy</a></button>
        <button type="submit" style="background-color: #1877f2;color:#fff" name="submitFotget">Tìm kiếm</button>
     </form>
</div>