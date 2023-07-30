<?php 
    // $row_of_page = 10;
    // $total_page = ($_GET['ofpage'] - 1) * $row_of_page;
    // $row_number = $data->getData("SELECT count(*) as count FROM listbook")->fetch_all(MYSQLI_ASSOC);
    // $href_number = ceil($row_number[0]['count'] / $row_of_page);
    
    // $_GET["ofpage"] == $href_number ? $next = $href_number : $next = $_GET["ofpage"] + 1;
    // $_GET["ofpage"] == 1 ? $previous = 1 : $previous = $_GET["ofpage"] - 1;

    // $data->getData("SELECT * FROM listbook ORDER BY id DESC limit $total_page,$row_of_page");
    $a = "blockchain";
    $data->pagination('listbook',10,'desc');
    array_map(function($v){
        echo "<tr>
            <th>{$v['id']}</th>
            <th style='padding:5px'><img style='width:80px;height:114px'src='../uploads/{$v['img']}'></th>
            <th>{$v['name']}</th>
            <th>{$v['auchor']}</th>
            <th>{$v['price']}</th>
            <th>{$v['NXB']}</th>
            <th>{$v['NPH']}</th>
            <th>{$v['category']}</th>
            <th>{$v['size']}</th>
            <th>{$v['page']}</th>
            <th>{$v['weight']}</th>
            <th><a class='update' href= ''>Update</a></th>
            <th><a class='remove' href='../admin.php?page=product&ofpage={$_GET['ofpage']}&id={$v['id']}'>Remove</a></th>
        <tr>";
    },$data->fetchData());

?>