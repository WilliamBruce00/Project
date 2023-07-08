<?php 
    include("../config/db_connection.php");
?>
<?php 
    $one = 0;
    $two = 5;
    $three = 0;
    $four = 0;
?>   

    
        
    
    
    
<?php    
    $sql = "SELECT * FROM question";
    $result = mysqli_query($conn,$sql);
    $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
?>
<?php 
    if(isset($_POST["submit"])){
        $arrBoo = []; 
        $true = [];
        for($i = 0;$i < 10;$i++){
            $sen = $data[$i]["sentences"];
            $radio = $_POST["check$i"];
            $sql1 = "SELECT * FROM answer WHERE sentences = $sen and ans = '$radio'";
            $result1 = mysqli_query($conn,$sql1);
            $data1 = mysqli_fetch_all($result1,MYSQLI_ASSOC);
            $boo =  empty($data1) ? "false": "true";
            array_push($arrBoo,$boo);
            
        }
        print_r($arrBoo);
        $arr = array_filter($arrBoo, function ($item){
            return $item != "false";
        });
        $point =  count($arr);
        $day = date("d/m/Y");
        $user = $_GET["username"];
        header("location: ../index.php?username=$user&point=$point&day=$day");
    }            
?>            
     
     
        
        
        
   
        
    
    
    

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/rendering_question.css">
</head>
<body>
    


<div class='list-question'>
    <div class="time-question">
        <p style="margin-right: 20px;">Time:</p>
        <span><?php echo $one?></span>
        <span><?php echo $two?></span>
        <span>:</span>
        <span><?php echo $three?></span>
        <span><?php echo $four?></span>
    </div>
    <div class="box-question">
        <form method="post" action="">
        <table>
            
            <?php 
                $key0 = -1;
                foreach( $data as $value){
                    $key0 = $key0 + 1;

                    $key1 = $value["title"];
                    $key2 = $value["option1"];
                    $key3 = $value["option2"];
                    $key4 = $value["option3"];
                    $key5 = $value["option4"];
                    echo "<tr>
                            <th style='color:#fff;height:40px;background-color: #1e90ff'>$key1</th>
                        </tr>".
                        "<tr>
                            <th><input type='radio' name='check$key0' value='$key2'/>$key2</th>
                        </tr>".
                        "<tr>
                            <th><input type='radio' name='check$key0' value='$key3'/>$key3</th>
                        </tr>".
                        "<tr>
                            <th><input type='radio' name='check$key0' value='$key4'/>$key4</th>
                        </tr>".
                        "<tr>
                            <th><input type='radio' name='check$key0' value='$key5'/>$key5</th>
                        </tr>";
                        
                }                    
            ?>        
            
                
            
        </table>
        <input type="submit" name="submit"  value="NOP BAI" class="submit"/>
        </form>
        <div class="question-active">
            <p class="active">01</p>
            <p class="active">02</p>
            <p class="active">03</p>
            <p class="active">04</p>
            <p class="active">05</p>
            <p class="active">06</p>
            <p class="active">07</p>
            <p class="active">08</p>
            <p class="active">09</p>
            <p class="active">10</p>

        </div>
    </div>
    
        
            
            
        
</div>
</body>
</html>
<script src="../js/message.js"></script>
<script src="../js/countdown.js"></script>