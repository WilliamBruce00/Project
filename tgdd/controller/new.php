<?php
    foreach($data->getData("SELECT * FROM listbook ORDER BY id DESC limit 4") as $v_new){
        echo 
            "<div class='main__row1--prod'>
                <div class='main__row1--prod--top'>
                    <img src='../uploads/{$v_new['img']}'>
                </div>
                <div class='main__row1--prod--bottom'>
                    <p>
                        <a href='../index.php?page=details&id={$v_new['id']}'>{$v_new['name']}</a>
                    </p>
                    <p>{$v_new['auchor']}</p>
                    <p>{$v_new['price']}d</p>
                </div>
            </div>";
    }
?>