<?php 
    $data->getData("SELECT * FROM users");
    array_map(function($v){
        echo "<tr>
                    <th>{$v['id']}</th>
                    <th>{$v['username']}</th>
                    <th>{$v['email']}</th>
                    <th>{$v['password']}</th>
                    <th><a  class='update' href='../admin.php?page=member&id={$v['id']}'>Update</a></th>
                    <th><a  class='remove' href='../admin.php?page=member&id={$v['id']}'>Remove</th>
            </tr>";
    },$data->fetchData())    
?>