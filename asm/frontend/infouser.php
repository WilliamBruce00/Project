<?php 
    $info_user = "";
    if(isset($_GET["username"])){
        $info_user = $_GET["username"];
    }
?>
<div class="info-user">
    <h2>THÔNG TIN TÀI KHOẢN</h2>
    <hr />
    <div class="user-id">
        <p style="font-weight: bold;">ID của bạn:</p>
        <p>111</p>
    </div><br>
    <div class="user-name">
        <p style="font-weight: bold;">Tên tài khoản:</p>
        <p><?php echo $info_user?></p>
    </div><br>
    <div class="user-pass">
        <p style="font-weight: bold;">Mật khẩu:</p>
        <p>***
            <span style="font-size: 14px;font-weight: bold;">
                <i>
                    <a style="color: red;text-decoration: none;" href="">Đổi mật khẩu</a>
                </i>
            </span>
        </p>
    </div>
    <p style="color:#000">---------------------------------------------------------------------------------------------</p>
    <br>
    <h2>KẾT QUẢ BÀI LÀM</h2>
    <hr />
</div>