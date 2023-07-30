<?php
foreach($data->getData("SELECT * FROM listbook limit 0,8") as $combo){
            $deal =   $combo['price'] - ($combo['price'] * 0.2)."00";
            echo "<div class='main__row3--prod'>
                        <div class='main__row3--prod--top'>
                            <img src='../uploads/{$combo['img']}'>
                        </div>
                        <div class='main__row3--prod--bottom'> 
                            <p>
                                <a href=''>{$combo['name']}</a>
                            </p>
                            <p>{$combo['auchor']}</p>
                            <p style='color:#000;font-weight:normal'>
                                 <del>{$combo['price']}đ</del>
                            </p>
                            <p style='color:red;font-weight:bold'>{$deal}đ</p>
                        </div>
                </div>";
        }
?>        