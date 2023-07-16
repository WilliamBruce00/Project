<?php 
    $row_of_page = 10;
    $total_page = ($_GET['ofpage'] - 1) * $row_of_page;
    $row_number = $data->getData("SELECT count(*) as count FROM listbook");
    $href_number = ceil($row_number[0]['count'] / $row_of_page);
    
    $_GET["ofpage"] == $href_number ? $next = $href_number : $next = $_GET["ofpage"] + 1;
    $_GET["ofpage"] == 1 ? $previous = 1 : $previous = $_GET["ofpage"] - 1;

    foreach($data->getData("SELECT * FROM listbook ORDER BY id DESC limit $total_page,$row_of_page") as $value){
        echo "<tr>
                    <th>{$value['id']}</th>
                    <th style='padding:5px'><img style='width:115px;height:169px'src='../uploads/{$value['img']}'></th>
                    <th>{$value['name']}</th>
                    <th>{$value['auchor']}</th>
                    <th>{$value['price']}</th>
                    <th>{$value['NXB']}</th>
                    <th>{$value['NPH']}</th>
                    <th>{$value['category']}</th>
                    <th>{$value['size']}</th>
                    <th>{$value['page']}</th>
                    <th>{$value['weight']}</th>
                    <th><a class='update' href= ''>Update</a></th>
                    <th><a class='remove' href='../admin.php?page=product&ofpage={$_GET['ofpage']}&id={$value['id']}'>Remove</a></th>
                </tr>";
    }
?>