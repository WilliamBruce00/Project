<div class="box-economy">
    <div class="box-economy-filter filter">
        <div class="filter-sort">
            <a href="">[ Từ cao - thấp ]</a>
            <a href="">[ Từ thấp - cao ]</a>
            <a href="">[ Từ A - Z ]</a>
            <a href="">[ Từ Z - A ]</a>
        </div>
        <select name='select'>
            <option value="0">--Không chọn--</option>
            <option value="50.000 100.000">Từ 50K - 100K</option>
            <option value="100.000 200.000">Từ 100K - 200K</option>
            <option value="200.000 500.000">Từ 200K - 500K</option>
            <option value="500.000">Trên 500k</option>
        </select>
        <button><a href="../index.php?page=<?php echo $_GET['page']?>&p=0">Tim kiem</a></button>
        
    </div>
    <div class="economy-list">
        <?php if(isset($_GET["p"])){
            include("./controller/filter.php");
        }
        ?>
    </div>
    <div class="list-href">
        <a href="../index.php?page=<?php echo $_GET['page']?>&pages=<?php echo $previous."&p={$_GET['p']}"?>"><i class="fa-solid fa-angle-left"></i></a>
        <?php 
            $key = 0;
            if(isset($_GET["pages"])){
                $key = $_GET["pages"];
            }
            for($i = 1;$i<=$href_number;$i++){
                $key = $key - 1;
                echo "<a class='active$key' href='../index.php?page={$_GET['page']}&pages=$i&p={$_GET['p']}'>$i</a>";
            }    
        ?>        
        <a href='../index.php?page=<?php echo $_GET['page']?>&pages=<?php echo $next."&p={$_GET['p']}"?>'><i class="fa-solid fa-angle-right"></i></a>
    </div>
</div>
<script>
    $(document).ready(() =>{
        $(".filter select").change((e) =>{
            let arr = e.target.value.split(" ");
            let [a , b] = arr;
            b === undefined ? b = "" : "";
            console.log($(".filter button a").attr("href",`../index.php?page=<?php echo $_GET['page']?>&p=${a},${b}`))
        })        
    })
</script>
    

    



            
        
                    
                    
                    
                
                    
                
            
            

            
        
            
        
                    
                
            
        
            
        
            
             
        

            
                   
                

            
            
        
    
