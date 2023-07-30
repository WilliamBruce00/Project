<?php 
    $data_user = $data->getData("SELECT * FROM users WHERE username = '{$_GET['user']}'")
?>
<div class="box-user">
    <h2>THÔNG TIN TÀI KHOẢN</h2>
    <HR>
    <br>
    <div class="info-user">
        <span style="width: 140px; display: inline-block; font-weight: bold;">ID:</span><span><?php echo $data_user[0]['id']?></span><br><br>
        <span style="width: 140px; display: inline-block; font-weight: bold;">Username:</span><span><?php echo $data_user[0]['username']?></span><br><br>
        <span style="width: 140px; display: inline-block; font-weight: bold;">Email:</span><span><?php echo $data_user[0]['email']?></span><br><br>
        <span style="width: 140px; display: inline-block; font-weight: bold;">Password:</span><span><?php echo $data_user[0]['password']?></span>
    </div>
</div>
