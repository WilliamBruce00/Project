<?php 
    $href_home = "../index.php?page=login";
    if(isset($_GET["username"])){
        $href_home = "../frontend/question.php?page=question&username=".$_GET["username"]."&pages=1";
    }
    
    
    
?>
    <div class="main__content">
        <h2 align="center">QUIZ TEST</h2>
        <section>
            <div class="main__content--key">
                <p>SUBJECT: </p>
                <p>TIME: </p>
                <p>TURN: </p>
                <p>SENTENCES: </p>

            </div>
            <div class="main__content--value">
                <p>Information technology</p>
                <p>15 minutes</p>
                <p>1</p>
                <p>10</p>
            </div>
        </section>
        <center>
            <button>
                <a style="color:#fff;text-decoration: none;display: block;line-height: 50px;" href="<?php echo $href_home?>">LÀM BÀI</a>
            </button>
        </center>
    </div>
