<?php 
    if(isset($_GET['id'])){
        // $data->deleteProduct($_GET['id']);
        $data->Delete('listbook',$_GET['id']);
    }
?>