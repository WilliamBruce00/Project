<?php 
     if(isset($_GET["pages"])){
        $_GET["pages"] = $_GET["pages"];
        }else{
            $_GET["pages"] = 1;
        }
?>
<?php 
    $message ="";
    if($_GET["p"] == "0" && isset($_GET["page"])){
        $row_of_page = 8;
        $total_page = ($_GET["pages"] - 1) * $row_of_page;
        $row_number = $data->getData(
            "SELECT count(*) as count 
             FROM listbook 
             WHERE category = '{$_GET['page']}'")->fetch_all(MYSQLI_ASSOC);
        $href_number = ceil($row_number[0]['count'] / 8);
        $_GET["pages"] == $href_number ? $next = $href_number : $next = $_GET["pages"] + 1;
        $_GET["pages"] == 1 ? $previous = 1 : $previous = $_GET["pages"] - 1;
       
        $data->getData(
            "SELECT * 
             FROM listbook 
             WHERE category = '{$_GET['page']}' 
             ORDER BY id 
             DESC limit $total_page,$row_of_page");
        array_map(function($v){
            echo "<div class='item'>
                   <div class='item-top'>
                         <img src='../uploads/{$v['img']}'>
                     </div>
                     <div class='item-bottom'>
                         <p><a href='../index.php?page=details&id={$v['id']}'>{$v['name']}</a></p>
                         <p>{$v['auchor']}</p>
                         <p>{$v['price']}đ</p>
                     </div>
                 </div>";
        },$data->fetchData());
    }    
    else if($_GET["p"] != "500.000," && $_GET["p"] != "0"){
        $row_of_page = 8;
        $total_page = ($_GET["pages"] - 1) * $row_of_page;
        $arr = explode(",",$_GET["p"]);
        $row_number = $data->getData(
            "SELECT count(*) as count 
             FROM listbook 
             WHERE category = '{$_GET['page']}' AND CONVERT(price,int) BETWEEN '$arr[0]' AND '$arr[1]'")->fetch_all(MYSQLI_ASSOC);
        $href_number = ceil($row_number[0]['count'] / 8);
        $_GET["pages"] == $href_number ? $next = $href_number : $next = $_GET["pages"] + 1;
        $_GET["pages"] == 1 ? $previous = 1 : $previous = $_GET["pages"] - 1;
        $href_number == 0 ? $message = "Khong tim thay ket qua" : "";
        
        $data->getData(
            "SELECT * 
             FROM listbook 
             WHERE category = '{$_GET['page']}' AND CONVERT(price,int) BETWEEN '$arr[0]' AND '$arr[1]' limit $total_page,$row_of_page");
        array_map(function($v){
            echo "<div class='item'>
                        <div class='item-top'>
                            <img src='../uploads/{$v['img']}'>
                        </div>
                        <div class='item-bottom'>
                            <p><a href='../index.php?page=details&id={$v['id']}'>{$v['name']}</a></p>
                            <p>{$v['auchor']}</p>
                            <p>{$v['price']}đ</p>
                        </div>
                </div>";
        },$data->fetchData());         
        echo "<h3 style='color:red;transform:translateX(110%);'>$message</h3>";
    }

    else if($_GET["p"] == "500.000,"){
        $row_of_page = 8;
        $total_page = ($_GET["pages"] - 1) * $row_of_page;
        $arr = explode(",",$_GET["p"]);
        $row_number = $data->getData(
            "SELECT count(*) as count 
             FROM listbook 
             WHERE category = '{$_GET['page']}' AND CONVERT(price,int) >= '$arr[0]'")->fetch_all(MYSQLI_ASSOC);
        $href_number = ceil($row_number[0]['count'] / 8);
        $_GET["pages"] == $href_number ? $next = $href_number : $next = $_GET["pages"] + 1;
        $_GET["pages"] == 1 ? $previous = 1 : $previous = $_GET["pages"] - 1;
        $href_number == 0 ? $message = "Khong tim thay ket qua" : "";
      
        $data->getData(
            "SELECT * 
             FROM listbook 
             WHERE category = '{$_GET['page']}' AND CONVERT(price,int) >= '$arr[0]' limit $total_page,$row_of_page");
        array_map(function($v){
            echo "<div class='item'>
                        <div class='item-top'>
                            <img src='../uploads/{$v['img']}'>
                        </div>
                        <div class='item-bottom'>
                            <p><a href='../index.php?page=details&id={$v['id']}'>{$v['name']}</a></p>
                            <p>{$v['auchor']}</p>
                            <p>{$v['price']}đ</p>
                        </div>
                </div>";
        },$data->fetchData());
        echo "<h3 style='color:red;transform:translateX(110%);'>$message</h3>";
    }
?>