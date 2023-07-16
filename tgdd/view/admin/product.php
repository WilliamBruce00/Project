<?php 
    // if(isset($_GET['id'])){
    //     $sql_remove = "DELETE FROM listbook WHERE id = {$_GET['id']}";
    //     $result_remove = mysqli_query($conn,$sql_remove);
    //     if($result_remove){
    //         echo "<script>location.href = '../admin.php?page=product&ofpage={$_GET['ofpage']}'</script>";
    //     }
    // }
    include("./controller/delete_product.php");
?>
<div class="product">
    <button class="btnAdd">THÊM SẢN PHẨM</button> 
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Img</th>
            <th>Name</th>
            <th>Author</th>
            <th>Price</th>
            <th>NXB</th>
            <th>NPH</th>
            <th>Category</th>
            <th>Size</th>
            <th>Page</th>
            <th>Weight</th>
            <th colspan="2">Active</th>
        </tr>
        <?php include("./controller/product_list.php")?>
        
    </table>
</div>
<?php include("addproduct.php")?>
<?php include("updateproduct.php")?>
<div class="product-href">
    <span style="margin-right: 5px;">Page <?php echo $_GET["ofpage"]?> of <?php echo $href_number?> </span>
    <a href="../admin.php?page=product&ofpage=<?php echo $previous?>"><i class="fa-solid fa-angle-left"></i></a>
        <?php 
            $key = $_GET["ofpage"];
            for($i=1;$i<=$href_number;$i++){
                $key = $key - 1;
                echo "<a class='m$key' href='../admin.php?page=product&ofpage=$i'>$i</a>";
            }
        ?>
    <a href="../admin.php?page=product&ofpage=<?php echo $next?>"><i class="fa-solid fa-angle-right"></i></a>
</div>
<script>
    let arrTop = ["370px","-400px"];
    let arrOpa = ["0.4","1"];
    $(document).ready(() =>{
        $(document).click((e) =>{
            e.target.innerHTML == "THÊM SẢN PHẨM" 
                ? (
                    $(".add-product").css({'top': arrTop[0]}),
                    $(".product").css({'opacity': arrOpa[0]})) 
                :   (e.target.className == "fa-solid fa-xmark" 
                    ?  ($(".add-product").css({'top': arrTop.reverse()[0]}), 
                        $(".product").css({'opacity': arrOpa.reverse()[0]}), 
                        arrOpa.sort(),
                        arrTop.sort().reverse()) 
                    : "");
        })
        $(".update-product .close .fa-xmark").click(() =>{
            $(".update-product").css({"top":arrTop[1]})
        })
        $(".update").click((e) =>{
            e.preventDefault();
               $("#formUpdateProduct input:eq(0)").val(e.target.parentElement.parentElement.children[2].innerHTML)
               $("#formUpdateProduct input:eq(1)").val(e.target.parentElement.parentElement.children[3].innerHTML)
               $("#formUpdateProduct input:eq(2)").val(e.target.parentElement.parentElement.children[4].innerHTML)
               $("#formUpdateProduct input:eq(3)").val(e.target.parentElement.parentElement.children[5].innerHTML)
               $("#formUpdateProduct input:eq(4)").val(e.target.parentElement.parentElement.children[6].innerHTML)
               $("#formUpdateProduct input:eq(5)").val(e.target.parentElement.parentElement.children[8].innerHTML)
               $("#formUpdateProduct input:eq(6)").val(e.target.parentElement.parentElement.children[9].innerHTML)
               $("#formUpdateProduct input:eq(7)").val(e.target.parentElement.parentElement.children[10].innerHTML)
               $("#formUpdateProduct input:eq(10)").attr("value",e.target.parentElement.parentElement.children[0].innerHTML)
               $("#formUpdateProduct input:eq(8)").attr("value",e.target.parentElement.parentElement.children[1].children[0].getAttribute('src').replace("../uploads/",""))
                $("#formUpdateProduct img").attr("src",e.target.parentElement.parentElement.children[1].children[0].getAttribute('src'))
               $("#formUpdateProduct select").val(e.target.parentElement.parentElement.children[7].innerHTML)
            $(".update-product").css({"top": arrTop[0]})
        })
    })
</script>
