<?php include("./controller/add_product.php")?>
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