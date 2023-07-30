<?php 
    $data->getData("SELECT * FROM orders WHERE username = '{$_GET['user']}'");
    array_map(function($v,$n){
       $n = $n + 1;
        $total = $v['price'] * $v['quanlity'].".000";
        echo "<tr>
                    <th>$n</th>
                    <th>{$v['product']}</th>
                    <th>{$v['quanlity']}</th>
                    <th>{$v['price']}</th>
                    <th>{$v['time']}</th>
                    <th>{$v['date']}</th>
                    <th>$total</th>
                    <th style='color: red'>{$v['status']}</th>
            </tr>";
    },$data->fetchData(),array_keys($data->getData("SELECT * FROM orders WHERE username = '{$_GET['user']}'")->fetch_all(MYSQLI_ASSOC)));
?>