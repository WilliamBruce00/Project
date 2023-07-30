<?php 
    class DB_connection{
        private $hostname;
        private $username;
        private $password;
        private $database;
        public $query;
        public $href;
        public $col;
        public $table;
        public function __construct($hostname,$username,$password,$database) {
            $this->hostname = $hostname;
            $this->username = $username;
            $this->password = $password;
            $this->database = $database;
        }
        function connection(){
            $mysql = new mysqli($this->hostname,$this->username,$this->password,$this->database);
            if(!$mysql){
                echo "Error";
            }
            return $mysql;
        }        
        function getData($query){
            $this->query = $query;
            return $this->connection()->query($query);
        }
        function fetchData(){
            return $this->getData($this->query)->fetch_all(MYSQLI_ASSOC);
        }
        function pagination($table,$page,$sort,$where = '' ){
            $total_page = ($_GET['ofpage'] - 1) * $page;
            $total_row = $this->getData("SELECT count(*) as count FROM $table $where")->fetch_all(MYSQLI_ASSOC);
            $href = ceil($total_row[0]['count'] / $page);
            $this->href = $href;
            return $this->getData("SELECT * FROM $table $where ORDER BY id $sort limit $total_page,$page");
        }
        function href(){
            $_GET["ofpage"] == $this->href ? $next = $this->href : $next = $_GET["ofpage"] + 1;
            $_GET["ofpage"] == 1 ? $previous = 1 : $previous = $_GET["ofpage"] - 1;
            echo "<span style='margin-right: 5px;'>Page {$_GET['ofpage']} of $this->href  </span>";
            echo "<a href='../admin.php?page=product&ofpage=$previous'><i class='fa-solid fa-angle-left'></i></a>";
            $key = $_GET['ofpage'];
            for($i=1;$i<=$this->href;$i++){
                $key = $key - 1;
                echo "<a class='m$key' href='../admin.php?page=product&ofpage=$i'>$i</a>";
            }
            echo "<a href='../admin.php?page=product&ofpage=$next'><i class='fa-solid fa-angle-right'></i></a>";
        }

        public function column(...$col){
            $this->col = $col;
        }
        public function table($table){
            $this->table = $table;
        }
        public function Add(...$value){
            if(count($this->col) === count($value)){
                $this->connection()->query("INSERT INTO $this->table (id) VALUES (DEFAULT)");
                foreach($value as $v){
                    if(preg_match("/.jpg/",$v) || preg_match("/.png/",$v) || preg_match("/.jpeg/",$v)){
                        move_uploaded_file($_FILES['img']['tmp_name'],"uploads/".$v);
                    }
                }
                for($i=0;$i<count($this->col);$i++){
                    $this->connection()->query(
                        "UPDATE $this->table 
                         SET {$this->col[$i]} = '$value[$i]'
                         WHERE id = (
                            SELECT id 
                            FROM $this->table 
                            ORDER BY id 
                            desc limit 1)");
                }
            }else{
                trigger_error("Example error");
            }
        }

        public function Update(...$value){
            $b = array_keys($this->connection()->query("SELECT * FROM $this->table")->fetch_all(MYSQLI_ASSOC)[0]);
            foreach($value as $v){
                if(preg_match("/.jpg/",$v) || preg_match("/.png/",$v) || preg_match("/.jpeg/",$v)){
                    move_uploaded_file($_FILES['img']['tmp_name'],"uploads/".$v);
                }
            }
            $id = $_POST['id'];
            for($i=1;$i<count($b)-1;$i++){
                $v = $value[$i - 1];
                $this->connection()->query(
                    "UPDATE $this->table 
                     SET {$b[$i]} = '$v'
                     WHERE id = $id"
                    );
            }
        }

        public function Delete($table,$id){
            $this->connection()->query("DELETE FROM $table WHERE id = $id");
        }

        public function direction($path){
            echo "<script>location.href = $path</script>";
        }
        // function addProduct($name,$auchor,$price,$img,$NXB,$NPH,$category,$size,$page,$weight,$intro,$path){
        //     move_uploaded_file($path,'uploads/'.$img); 

        //     return $this->connection()->query("INSERT INTO listbook (name,auchor,price,img,NXB,NPH,category,size,page,weight,intro) VALUES
        //         ('$name','$auchor','$price','$img','$NXB','$NPH','$category','$size','$page','$weight','$intro')
        //     ");
        // }
        // function addUser($user,$email,$pass){
        //     return $this->connection()->query("INSERT INTO users (username,email,password) VALUES
        //         ('$user','$email','$pass')
        //     ");
        // }
        // function updateUser($password,$username){
        //     return $this->connection()->query("UPDATE users SET password = '$password' WHERE username = '$username'");
        // }
        // function updateProduct($name,$auchor,$price,$img,$NXB,$NPH,$category,$size,$page,$weight,$path,$old,$id){
        //     if($img == ""){
        //         $img = $old;
        //     }else{
        //         $img = $img;
        //         move_uploaded_file($path,'uploads/'.$img);
        //     }
        //     return $this->connection()->query(
        //         "UPDATE listbook SET name = '$name',auchor = '$auchor', price = '$price', img = '$img', NXB = '$NXB', NPH = '$NPH', category = '$category', size = '$size', page = '$page', weight = '$weight' WHERE id = $id 
        //     ");
        // }
        // function deleteProduct($id){
        //     return $this->connection()->query("DELETE FROM listbook WHERE id = $id");
        // }
        // function addOrder($name,$phone,$address,$product,$quanlity,$price,$username){
        //    return $this->connection()->query(
        //         "INSERT INTO orders (name,phone,address,product,quanlity,time,date,price,status,username) VALUES
        //          ('$name','$phone','$address','$product','$quanlity',curtime(),date_format(curdate(), '%d-%m-%Y'),'$price','Đang thực hiện','$username')   
        //         "
        //    );
        // }
    }
    $data = new DB_connection('localhost','root','','bookstore');
    $data->connection();
?>