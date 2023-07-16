<?php 
    if(isset($_POST['submitUpdateProduct'])){
        if($data->updateProduct($_POST['name'],$_POST['auchor'],$_POST['price'],$_FILES["img"]["name"],$_POST['NXB'],$_POST['NPH'],$_POST['select'],$_POST['size'],$_POST['page'],$_POST['weight'],$_FILES["img"]["tmp_name"],$_POST['oldimg'],$_POST['id'])){
            echo "<script>location.href = '../admin.php?page=product&ofpage={$_GET['ofpage']}'</script>";
        }
        
    }
?>