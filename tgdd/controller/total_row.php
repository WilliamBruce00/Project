<?php 
    $total_prod = $data->getData("SELECT count(*) as count FROM listbook")->fetch_all(MYSQLI_ASSOC);
    $total_user = $data->getData("SELECT count(*) as count FROM users")->fetch_all(MYSQLI_ASSOC);
    $total_order = $data->getData("SELECT count(*) as count FROM orders")->fetch_all(MYSQLI_ASSOC);
?>