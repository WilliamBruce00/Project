<?php 
    // $conn = mysqli_connect('localhost','root','','bookstore');
    class DB_connection{
        private $hostname;
        private $username;
        private $password;
        private $database;

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
            return $this->connection()->query($query)->fetch_all(MYSQLI_ASSOC);
        }
        function addProduct($name,$auchor,$price,$img,$NXB,$NPH,$category,$size,$page,$weight,$intro,$path){
            move_uploaded_file($path,'uploads/'.$img); 

            return $this->connection()->query("INSERT INTO listbook (name,auchor,price,img,NXB,NPH,category,size,page,weight,intro) VALUES
                ('$name','$auchor','$price','$img','$NXB','$NPH','$category','$size','$page','$weight','$intro')
            ");
        }
        function addUser($user,$email,$pass){
            return $this->connection()->query("INSERT INTO users (username,email,password) VALUES
                ('$user','$email','$pass')
            ");
        }
        function updateProduct($name,$auchor,$price,$img,$NXB,$NPH,$category,$size,$page,$weight,$path,$old,$id){
            if($img == ""){
                $img = $old;
            }else{
                $img = $img;
                move_uploaded_file($path,'uploads/'.$img);
            }
            return $this->connection()->query(
                "UPDATE listbook SET name = '$name',auchor = '$auchor', price = '$price', img = '$img', NXB = '$NXB', NPH = '$NPH', category = '$category', size = '$size', page = '$page', weight = '$weight' WHERE id = $id 
            ");
        }
        function deleteProduct($id){
            return $this->connection()->query("DELETE FROM listbook WHERE id = $id");
        }
        
    }
    $data = new DB_connection('localhost','root','','bookstore');
    $data->connection();
?>