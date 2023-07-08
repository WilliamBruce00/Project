<?php 
    $sql = "SELECT * FROM kinhte INNER JOIN details USING(name)";
    $result = mysqli_query($conn,$sql);
    $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
?>
<?php 
    
    
    if(isset($_POST["submitAddProduct"])){
        $img = '../uploads/'.$_FILES["img"]["name"];
        $sql_insert2 = "INSERT INTO details VALUES ('{$_POST['name']}','{$_POST['size']}','{$_POST['page']}','{$_POST['weight']}','{$_POST['intro']}')";
        $result_insert2 = mysqli_query($conn,$sql_insert2);
        $sql_insert = "INSERT INTO kinhte (name,auchor,price,img,NXB,NPH,category) VALUES 
            ('{$_POST['name']}','{$_POST['auchor']}','{$_POST['price']}','$img','{$_POST['NXB']}','{$_POST['NPH']}','{$_POST['category']}')";
        $result_insert = mysqli_query($conn,$sql_insert);
        
        move_uploaded_file($_FILES["img"]["tmp_name"],'uploads/'.$_FILES["img"]["name"]); 
    }
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
        <?php 
            foreach($data as $value){
                echo "<tr>
                    <th>{$value['id']}</th>
                    <th style='padding:5px'><img style='width:115px;height:169px'src={$value['img']}></th>
                    <th>{$value['name']}</th>
                    <th>{$value['auchor']}</th>
                    <th>{$value['price']}</th>
                    <th>{$value['NXB']}</th>
                    <th>{$value['NPH']}</th>
                    <th>{$value['category']}</th>
                    <th>{$value['size']}</th>
                    <th>{$value['Npage']}</th>
                    <th>{$value['weight']}</th>
                    <th style='color:cadetblue'><i class='fa-solid fa-pen-to-square' style='color: green;'></i> Edit</th>
                    <th style='color:cadetblue'><i class='fa-solid fa-rectangle-xmark' style='color:red'></i> Remove</th>
                </tr>";
            }
        ?>
    </table>
</div>
<div class='add-product'>
    <div class="close">
        <h3>Thêm sản phẩm</h3>
        <i class="fa-solid fa-xmark"></i>
    </div>
    <div class='add-product-content'>
        <form action="" id="formAddProduct" method="post" enctype="multipart/form-data">
            <input type="text" placeholder="Tên sách" name="name"><p></p>
            <input type="text" placeholder="Tác giả" name="auchor"><p></p>
            <input type="text" placeholder="Giá" name="price" value=""><p style="color:red"></p>
            <input type="text" placeholder="Nhà xuất bản" name="NXB"><p></p>
            <input type="text" placeholder="Nhà phát hành" name="NPH"><p></p>
            <!-- <input type="text" placeholder="Loại" name="category"><p></p> -->
            
            <input type="text" placeholder="Kích thước" name="size"><p></p>
            <input type="text" placeholder="Số trang" name="page"><p></p>
            <input type="text" placeholder="Khối lượng" name="weight"><p></p><br>
            <input type="file" name="img"><p></p>
            <select name="select">
                <option value="">Không chọn</option>
                <option value="economy">Kinh tế</option>
                <option value="blockchain">blockchain</option>
                <option value="languge">Ngoại ngữ</option>
                <option value="literature">Văn học</option>
                <option value="IT">Tin học</option>
            </select><p></p>
            <textarea placeholder="Mieu ta..." name="intro"></textarea><p></p>
            <button name="submitAddProduct" type="button">ADD</button>
        </form>
    </div>
</div>

<script>
    let arrTop = ["65%","-75%"];
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
        
    })
</script>
<script src="../js/addproduct.js"></script>