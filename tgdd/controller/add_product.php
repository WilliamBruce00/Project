<?php 
    if(isset($_POST['submitAddProduct'])){
        if($data->addProduct($_POST['name'],$_POST['auchor'],$_POST['price'],$_FILES["img"]["name"],$_POST["NXB"],$_POST["NPH"],$_POST['select'],$_POST['size'],$_POST['page'],$_POST['weight'],$_POST['intro'],$_FILES["img"]["tmp_name"])){
            echo "<script>location.href = '../admin.php?page=product&ofpage={$_GET['ofpage']}'</script>";
        }
    }
?>