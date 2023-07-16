<?php 
    include("./controller/user_list.php")
?>
<div class="box-member">
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Tên đăng nhập</th>
            <th>Email</th>
            <th>Mật khẩu</th>
            <th colspan="2">Action</th>
        </tr>
        <?php 
            foreach($data_user as $v_user){
                echo "<tr>
                    <th>{$v_user['id']}</th>
                    <th>{$v_user['username']}</th>
                    <th>{$v_user['email']}</th>
                    <th>{$v_user['password']}</th>
                    <th><a  class='update' href='../admin.php?page=member&id={$v_user['id']}'>Update</a></th>
                    <th><a  class='remove' href='../admin.php?page=member&id={$v_user['id']}'>Remove</th>
                </tr>";
            }
        ?>
    </table>
    
</div>