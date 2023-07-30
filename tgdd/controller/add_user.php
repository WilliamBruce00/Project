<?php 
    if(isset($_POST["submitSignup"])){
        $data->table('users');
        $data->column("username","email","password");
        $data->Add($_POST['user'],$_POST['email'],$_POST['pass']);
        $data->direction("'../index.php'");
    }
?>