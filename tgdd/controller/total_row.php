<?php 
    $total_prod = $data->getData("SELECT count(*) as count FROM listbook");
    $total_user = $data->getData("SELECT count(*) as count FROM users");
    $total_combo = $data->getData("SELECT count(*) as count FROM combo");
?>