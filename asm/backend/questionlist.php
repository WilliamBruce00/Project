
<?php 
    include("../config/db_connection.php");
?>
<?php 
    $sql = "SELECT * FROM question";
    $result = mysqli_query($conn,$sql);
    $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/question.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
       
    
</head>
<body>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
            <th colspan="2">Action</th>
        </tr>
        <?php 
            foreach( $data as $value){
                $key1 = $value["id"];
                $key2 = $value["title"];
                $key3 = $value["option1"];
                $key4 = $value["option2"];
                $key5 = $value["option3"];
                $key6 = $value["option4"];
                echo "<tr>
                        <th>$key1</th>
                        <th>$key2</th>
                        <th>$key3</th>
                        <th>$key4</th>
                        <th>$key5</th>
                        <th>$key6</th>
                        <th>
                            <i class='fa-solid fa-pen-to-square'></i>
                            <span>Edit</span>
                        </th>
                        <th>
                            <i class='fa-solid fa-square-xmark'></i>
                            <span>Remove</span>
                        </th>
                </tr>";
            }
        ?>

    </table>

</body>
</html>