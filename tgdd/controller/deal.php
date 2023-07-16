<?php
foreach($data->getData("SELECT * FROM combo") as $combo){
            echo "<div class='main__row3--prod'>
                        <div class='main__row3--prod--top'>
                            <img src='{$combo['img']}'>
                        </div>
                        <div class='main__row3--prod--bottom'> 
                            <p>
                                <a href=''>{$combo['name']}</a>
                            </p>
                            <p>{$combo['auchor']}</p>
                            <p style='color:#000;font-weight:normal'>
                                <del>{$combo['pbefore']}đ</del>
                            </p>
                            <p style='color:red;font-weight:bold'>{$combo['pafter']}đ</p>
                        </div>
                </div>";
        }
?>        