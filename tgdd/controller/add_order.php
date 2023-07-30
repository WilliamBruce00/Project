<?php 
    date_default_timezone_set("Etc/GMT-7");
    if(isset($_POST['submitOrder'])){
        // if(!isset($_GET['loop'])){
        //     $data->addOrder($_POST['name'],$_POST['phone'],$_POST['address'],$_GET['name'],$_GET['quan'],$_GET['price'],$_GET['userss']);
        // }else{
        //     for($i=0;$i<$_GET['loop'];$i++){
        //         $data->addOrder($_POST['name'],$_POST['phone'],$_POST['address'],$_GET["name$i"],$_GET["q$i"],$_GET["price$i"],$_GET['userss']);
        //     }
        // }    
        if(!isset($_GET['loop'])){
            $data->table("orders");
            $data->column("product","quanlity","price","time","date","status","username","name","phone","address");
            $data->Add(
                $_GET['name'],
                $_GET['quan'],
                $_GET['price'],
                date('h:i:s'),
                date('d-m-y'),
                "Đang thực hiện",
                $_GET['userss'],
                $_POST['name'],
                $_POST['phone'],
                $_POST['address']
            );
            $data->direction("'../index.php?page=profile&pagachild=orderu&user={$_GET['userss']}'");    
        }else{
            for($i=0;$i<$_GET['loop'];$i++){
                $data->table("orders");
                $data->column("product","quanlity","price","time","date","status","username","name","phone","address");
                $data->Add(
                    $_GET["name$i"],
                    $_GET["q$i"],
                    $_GET["price$i"],
                    date('h:i:s'),
                    date('d-m-y'),
                    "Đang thực hiện",
                    $_GET['userss'],
                    $_POST['name'],
                    $_POST['phone'],
                    $_POST['address']
                );
            }
            $data->direction("'../index.php?page=profile&pagachild=orderu&user={$_GET['userss']}'");    
        }
    }
?>