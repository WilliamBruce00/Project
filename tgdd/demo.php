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
<form action="" method="post">
    <select name="select" id="">
        <option value="">Khong chon</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JS">JS</option>
    </select>
    <input type="submit" value="submit" name="submit">
</form>