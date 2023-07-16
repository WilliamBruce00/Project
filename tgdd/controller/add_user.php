<?php 
    if(isset($_POST["submitSignup"])){
        if($data->addUser($_POST['user'],$_POST['email'],$_POST['pass'])){
            echo "<script>window.location.href = '../index.php'</script>";
        }
    }
?>