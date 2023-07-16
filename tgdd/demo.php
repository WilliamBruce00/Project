<?php 
$str = "500.00,";
$arr = explode(",",$str);
$a = array_filter($arr, function($b){
    return $b == "";
});
?>
<?php 
    if(isset($_POST["submit"])){
        if($_POST["select"] == ""){
            echo "False";
        }
        else{
            echo "True";
        }
    }
?>
<?php 
    

?>
<form action="" method="post">
    <select name="select" id="">
        <option value="">Khong chon</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JS">JS</option>
    </select>
    <input type="button" value="submit" name="submit">
</form>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<script>
    let string = "3,4,5";
    string.match(".") ? console.log("Ok") : "";
    
</script>    
<input type="file" accept="gddjj.jpg">
<input type="hidden" value=>
</body>
<script>
    document.querySelectorAll("input")[0].onclick= () =>{
        if(document.querySelectorAll("input")[1].value != ""){
            console.log(document.querySelectorAll("input")[1].value.slice(12,document.querySelectorAll("input")[1].value.length))
            
        }else{
        }
    }

</script>
</html>
