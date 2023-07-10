<?php 
$sql_user = "SELECT * FROM users WHERE username = '{$_GET['user']}'";
$result_user = mysqli_query($conn,$sql_user);
$data_user = mysqli_fetch_array($result_user,MYSQLI_ASSOC);
?>
<div class="box-user">
    <h2>THÔNG TIN TÀI KHOẢN</h2>
    <HR>
    <br>
    <div class="info-user">
        <span style="width: 140px; display: inline-block; font-weight: bold;">ID:</span><span><?php echo $data_user['id']?></span><br><br>
        <span style="width: 140px; display: inline-block; font-weight: bold;">Username:</span><span><?php echo $data_user['username']?></span><br><br>
        <span style="width: 140px; display: inline-block; font-weight: bold;">Email:</span><span><?php echo $data_user['email']?></span><br><br>
        <span style="width: 140px; display: inline-block; font-weight: bold;">Password:</span><span><?php echo $data_user['password']?></span>
    </div>
</div>
