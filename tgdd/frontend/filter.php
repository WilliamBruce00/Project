<?php 
    $message ="";
    if($_GET["p"] == "0" && $_GET["page"] == 'kinhte'){
        
            
        $row_of_page = 8;
        $total_page = ($_GET["pages"] - 1) * $row_of_page;

        $row_number = mysqli_num_rows(mysqli_query($conn,"SELECT * FROM kinhte WHERE category = 'kinhte'"));
        $href_number = ceil($row_number / 8);
    
        $_GET["pages"] == $href_number ? $next = $href_number : $next = $_GET["pages"] + 1;
        $_GET["pages"] == 1 ? $previous = 1 : $previous = $_GET["pages"] - 1;

        $sql = "SELECT * FROM kinhte WHERE category = 'kinhte' ORDER BY id DESC limit $total_page,$row_of_page";
        $result = mysqli_query($conn,$sql);
        $kinhte = mysqli_fetch_all($result,MYSQLI_ASSOC);

            foreach($kinhte as $value){
            $key5 = $value["id"];
            $key4 = $value["img"];
            $key1 = $value["name"];
            $key2 = $value["auchor"];
            $key3 = $value["price"];
                echo "<div class='item'>
                        <div class='item-top'>
                            <img src=$key4>
                        </div>
                        <div class='item-bottom'>
                            <p><a href='../index.php?page=details&id=$key5'>$key1</a></p>
                            <p>$key2</p>
                            <p>{$key3}đ</p>
                        </div>
                    </div>";
            }
    }    
    if($_GET["p"] == "0" && $_GET["page"] == 'blockchain'){
        
            
        $row_of_page = 8;
        $total_page = ($_GET["pages"] - 1) * $row_of_page;

        $row_number = mysqli_num_rows(mysqli_query($conn,"SELECT * FROM kinhte WHERE category = 'blockchain'"));
        $href_number = ceil($row_number / 8);
    
        $_GET["pages"] == $href_number ? $next = $href_number : $next = $_GET["pages"] + 1;
        $_GET["pages"] == 1 ? $previous = 1 : $previous = $_GET["pages"] - 1;

        $sql = "SELECT * FROM kinhte WHERE category = 'blockchain' ORDER BY id DESC limit $total_page,$row_of_page";
        $result = mysqli_query($conn,$sql);
        $kinhte = mysqli_fetch_all($result,MYSQLI_ASSOC);

            foreach($kinhte as $value){
            $key5 = $value["id"];
            $key4 = $value["img"];
            $key1 = $value["name"];
            $key2 = $value["auchor"];
            $key3 = $value["price"];
                echo "<div class='item'>
                        <div class='item-top'>
                            <img src=$key4>
                        </div>
                        <div class='item-bottom'>
                            <p><a href='../index.php?page=details&id=$key5'>$key1</a></p>
                            <p>$key2</p>
                            <p>{$key3}đ</p>
                        </div>
                    </div>";
            }
    }    
    else if($_GET["p"] != "500.000," && $_GET["p"] != "0"){
        $row_of_page = 8;
        $total_page = ($_GET["pages"] - 1) * $row_of_page;
        $arr = explode(",",$_GET["p"]);
        $row_number = mysqli_num_rows(mysqli_query($conn,"SELECT * FROM kinhte WHERE category = '{$_GET['page']}' AND CONVERT(price,int) BETWEEN '$arr[0]' AND '$arr[1]'"));
        $href_number = ceil($row_number / 8);
    
        $_GET["pages"] == $href_number ? $next = $href_number : $next = $_GET["pages"] + 1;
        $_GET["pages"] == 1 ? $previous = 1 : $previous = $_GET["pages"] - 1;

        $sql = "SELECT * FROM kinhte WHERE category = '{$_GET['page']}' AND CONVERT(price,int) BETWEEN '$arr[0]' AND '$arr[1]' limit $total_page,$row_of_page";
        $result = mysqli_query($conn,$sql);
        $kinhte = mysqli_fetch_all($result,MYSQLI_ASSOC);
        empty($kinhte) ? $message = "Khong tim thay ket qua" : "";

            foreach($kinhte as $value){
            $key5 = $value["id"];
            $key4 = $value["img"];
            $key1 = $value["name"];
            $key2 = $value["auchor"];
            $key3 = $value["price"];
                echo "<div class='item'>
                        <div class='item-top'>
                            <img src=$key4>
                        </div>
                        <div class='item-bottom'>
                            <p><a href='../index.php?page=details&id=$key5'>$key1</a></p>
                            <p>$key2</p>
                            <p>{$key3}đ</p>
                        </div>
                    </div>";
            }
            echo "<h3 style='color:red;transform:translateX(110%);'>$message</h3>";

    }
    else if($_GET["p"] == "500.000,"){
        $row_of_page = 8;
        $total_page = ($_GET["pages"] - 1) * $row_of_page;
        $arr = explode(",",$_GET["p"]);
        $row_number = mysqli_num_rows(mysqli_query($conn,"SELECT * FROM kinhte"));
        $href_number = ceil($row_number / 8);
    
        $_GET["pages"] == $href_number ? $next = $href_number : $next = $_GET["pages"] + 1;
        $_GET["pages"] == 1 ? $previous = 1 : $previous = $_GET["pages"] - 1;

        $sql = "SELECT * FROM kinhte WHERE CONVERT(price,int) >= '$arr[0]'  limit $total_page,$row_of_page";
        $result = mysqli_query($conn,$sql);
        $kinhte = mysqli_fetch_all($result,MYSQLI_ASSOC);
        empty($kinhte) ? $message = "Khong tim thay ket qua" : "";
            foreach($kinhte as $value){
            $key5 = $value["id"];    
            $key4 = $value["img"];
            $key1 = $value["name"];
            $key2 = $value["auchor"];
            $key3 = $value["price"];
                echo "<div class='item'>
                        <div class='item-top'>
                            <img src=$key4>
                        </div>
                        <div class='item-bottom'>
                            <p><a href='../index.php?page=details&id=$key'>$key1</a></p>
                            <p>$key2</p>
                            <p>{$key3}đ</p>
                        </div>
                    </div>";
            }
            echo "<h3 style='color:red;transform:translateX(110%);'>$message</h3>";
    }
?>
