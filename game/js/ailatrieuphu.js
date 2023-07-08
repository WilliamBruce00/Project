var ans1 = "Tiếng Trung";
var ans2=  "Mặt trời";
var ans3 = "8";
var ans4=  "Chương trình cho phép bạn truy cập website trên Internet";
var ans5 = "Table Heading Row Repeat";
var ans6=  "MOV";
var ans7= "adam@gmail.com"
var ans8= "SmartWatch"
var ans9= "Google"
var ans10= "Pong"
var ans11= "Router"
var ans12= "Microsoft Word"
var ans13= "Winrars"
var ans14= "Thomas Edison"
var ans15= "Tiểu hùng tinh"
var money = "";

var a = con;
var result="";
function option1(){
    /* if(ans1!=document.getElementById('q1').innerHTML){
        result = "Sai rồi"
        location.reload();
    }   */
    if(ans1==document.getElementById('q1').innerHTML){
        result = "Chính xác"
        document.getElementById('value').innerHTML = "$"+money + 100;
        document.getElementById('contin').style.display = "block"
    }
    else  if(ans3==document.getElementById('q1').innerHTML){
        result = "Chính xác"
        document.getElementById('value').innerHTML = "$"+money + 500;
        document.getElementById('contin').style.display = "block"
    }
    else  if(ans4==document.getElementById('q1').innerHTML){
        result = "Chính xác"
        document.getElementById('value').innerHTML = "$"+money + 1000;
        document.getElementById('contin').style.display = "block"
    }
    else  if(ans5==document.getElementById('q1').innerHTML && ans5!=document.getElementById('q4').innerHTML){
        result = "Chính Xác"
        document.getElementById('value').innerHTML = "$"+money + 2000;
        document.getElementById('contin').style.display = "block"
    }
    else  if(ans12==document.getElementById('q1').innerHTML){
        result = "Chính Xác"
        document.getElementById('value').innerHTML = "$"+money + 128000;
        document.getElementById('contin').style.display = "block"
    }
    else{
        result = "Sai rồi mời bạn về";
        location.reload();
    }
    return alert(result)
}
function option2(){
   /*  if(ans1!=document.getElementById('q2').innerHTML){
        result = "Sai rồi"
        location.reload();
    } */
    
     if(ans13==document.getElementById('q2').innerHTML){
        result = "Chính xác"
        document.getElementById('value').innerHTML = "$"+money + 250000;
        document.getElementById('contin').style.display = "block"
    }
    else{
        result = "Sai rồi mời bạn về"
        location.reload();
    }
    return alert(result)
}
function option3(){
    /* if(ans1!=document.getElementById('q3').innerHTML){
        result = "Sai rồi"
        location.reload();
    }  */
    if(ans2==document.getElementById('q3').innerHTML){
        result = "Chính xác";
        document.getElementById('value').innerHTML = "$"+money + 300;
        document.getElementById('contin').style.display = "block"
    }
    else if(ans7==document.getElementById('q3').innerHTML){
        result = "Chính xác";
        document.getElementById('value').innerHTML = "$"+money + 8000;
        document.getElementById('contin').style.display = "block"
    }
    else  if(ans11==document.getElementById('q3').innerHTML){
        result = "Chính xác";
        document.getElementById('value').innerHTML = "$"+money + 96000;
        document.getElementById('contin').style.display = "block"
    }
    else  if(ans14==document.getElementById('q3').innerHTML){
        result = "Chính xác";
        document.getElementById('value').innerHTML = "$"+money + 500000;
        document.getElementById('contin').style.display = "block"
    }
    else  if(ans9==document.getElementById('q3').innerHTML){
        result = "Chính xác"
        document.getElementById('value').innerHTML = "$"+money + 32000;
        document.getElementById('contin').style.display = "block"
    }
    else{
        result = "Sai rồi mời bạn về";
        location.reload();
    }
    return alert(result)
}
function option4(){
     /*  if(ans1!=document.getElementById('q4').innerHTML){
        result = "Sai rồi";
        location.reload();
     }  */
     if(ans6==document.getElementById('q4').innerHTML){
        result = "Chính xác"
        document.getElementById('value').innerHTML = "$"+money + 4000 ;
        document.getElementById('contin').style.display = "block"
    } 
   else if(ans8==document.getElementById('q4').innerHTML){
        result = "Chính xác"
        document.getElementById('value').innerHTML = "$"+money + 16000;
        document.getElementById('contin').style.display = "block"
    }
    else  if(ans10==document.getElementById('q4').innerHTML){
        result = "Chính xác"
        document.getElementById('value').innerHTML = "$"+money + 64000 ;
        document.getElementById('contin').style.display = "block"
    }
    else  if(ans15==document.getElementById('q4').innerHTML){
        result = "Chúc mừng bạn đã trở thành triệu phú 1 triệu USD"
        document.getElementById('value').innerHTML = "$"+money + 1000000 ;
        
    }
    else{
        result = "Sai rồi mời bạn về";
        location.reload();
    }
    
        
    
    return alert(result)

}
function next(){
    if(ans1==document.getElementById('q1').innerHTML){
        document.getElementById('q0').innerHTML = "Nguồn năng lượng mặt trời đến từ đầu?"
        document.getElementById('q1').innerHTML="Nước"
        document.getElementById('q2').innerHTML="Gió"
        document.getElementById('q3').innerHTML="Mặt trời"
        document.getElementById('q4').innerHTML="Ôxy"
        document.getElementById('contin').style.display = "none"
        document.getElementById('table').style.display = "none"
    }
    else if(ans2==document.getElementById('q3').innerHTML){
        document.getElementById('q0').innerHTML = "Có bao nhiêu bit trong 1 byte?"
        document.getElementById('q1').innerHTML="8"
        document.getElementById('q2').innerHTML="16"
        document.getElementById('q3').innerHTML="24"
        document.getElementById('q4').innerHTML="32"
        document.getElementById('contin').style.display = "none"
        document.getElementById('table').style.display = "none"
    }
    else if(ans3==document.getElementById('q1').innerHTML){
        document.getElementById('q0').innerHTML = "Trình duyệt Web là gì?"
        document.getElementById('q1').innerHTML="Chương trình cho phép bạn truy cập website trên Internet"
        document.getElementById('q2').innerHTML="Một trang web tin tức"
        document.getElementById('q3').innerHTML="Một loại công cụ tìm kiếm trên Web"
        document.getElementById('q4').innerHTML="Máy tính lưu trữ tập tin WWW"
        document.getElementById('contin').style.display = "none"
        document.getElementById('table').style.display = "none"
    }
    else if(ans4==document.getElementById('q1').innerHTML){
        document.getElementById('q0').innerHTML = "Lặp lại các dòng tiêu đề của bảng biểu ta dùng?"
        document.getElementById('q1').innerHTML="Table Heading Row Repeat"
        document.getElementById('q2').innerHTML="Cả ba đều sai"
        document.getElementById('q3').innerHTML="TableFormular"
        document.getElementById('q4').innerHTML="TableSort"
        document.getElementById('contin').style.display = "none"
        document.getElementById('table').style.display = "none"
    }
    else if(ans5==document.getElementById('q1').innerHTML){
        document.getElementById('q0').innerHTML = "Các nào dưới đây không phải là phần mở rộng định dạng tập tin ảnh"
        document.getElementById('q1').innerHTML="GIF"
        document.getElementById('q2').innerHTML="PNG"
        document.getElementById('q3').innerHTML="JPEG"
        document.getElementById('q4').innerHTML="MOV"
        document.getElementById('contin').style.display = "none"
        document.getElementById('table').style.display = "none"
    }
    else if(ans6==document.getElementById('q4').innerHTML){
        document.getElementById('q0').innerHTML = "Đâu là định dạng email hợp lệ trong các email sau"
        document.getElementById('q1').innerHTML="www.adam.com"
        document.getElementById('q2').innerHTML="adam@gmail"
        document.getElementById('q3').innerHTML="adam@gmail.com"
        document.getElementById('q4').innerHTML="Cả ba đều đúng"
        document.getElementById('contin').style.display = "none"
        document.getElementById('table').style.display = "none"
    }
    else if(ans7==document.getElementById('q3').innerHTML){
        document.getElementById('q0').innerHTML = "Các thiết bị Apple Watch còn được gọi là?"
        document.getElementById('q1').innerHTML="fruit"
        document.getElementById('q2').innerHTML="SmartKey"
        document.getElementById('q3').innerHTML="Smartphone"
        document.getElementById('q4').innerHTML="SmartWatch"
        document.getElementById('contin').style.display = "none"
        document.getElementById('table').style.display = "none"
    }
    else if(ans8==document.getElementById('q4').innerHTML){
        document.getElementById('q0').innerHTML = "Đâu là một công cụ tìm kiếm?"
        document.getElementById('q1').innerHTML="Youtube"
        document.getElementById('q2').innerHTML="Facebook"
        document.getElementById('q3').innerHTML="Google"
        document.getElementById('q4').innerHTML="Apple"
        document.getElementById('contin').style.display = "none"
        document.getElementById('table').style.display = "none"
    }
    else if(ans9==document.getElementById('q3').innerHTML){
        document.getElementById('q0').innerHTML = "Đâu là video game đầu tiên trên thế giới"
        document.getElementById('q1').innerHTML="Mario"
        document.getElementById('q2').innerHTML="Snake"
        document.getElementById('q3').innerHTML="Sudoku"
        document.getElementById('q4').innerHTML="Pong"
        document.getElementById('contin').style.display = "none"
        document.getElementById('table').style.display = "none"
    }
    else if(ans10==document.getElementById('q4').innerHTML){
        document.getElementById('q0').innerHTML = "Thiết bị nào sau đây dùng để kết nối mạng"
        document.getElementById('q1').innerHTML="Ram"
        document.getElementById('q2').innerHTML="Rom"
        document.getElementById('q3').innerHTML="Router"
        document.getElementById('q4').innerHTML="CPU"
        document.getElementById('contin').style.display = "none"
        document.getElementById('table').style.display = "none"
    }
    else if(ans11==document.getElementById('q3').innerHTML){
        document.getElementById('q0').innerHTML = "Chương trình nào sau đây dùng để soạn thảo văn bản"
        document.getElementById('q1').innerHTML="Microsoft Word"
        document.getElementById('q2').innerHTML="Microsoft Excel"
        document.getElementById('q3').innerHTML="Microsoft access"
        document.getElementById('q4').innerHTML="Microsoft Powerpoint"
        document.getElementById('contin').style.display = "none"
        document.getElementById('table').style.display = "none"
    }
    else if(ans12==document.getElementById('q1').innerHTML){
        document.getElementById('q0').innerHTML = "Chương trình nào sau đây dùng để giải nén tập tin, thư mục"
        document.getElementById('q1').innerHTML="Winzips"
        document.getElementById('q2').innerHTML="Winrars"
        document.getElementById('q3').innerHTML="Winz 7"
        document.getElementById('q4').innerHTML="Cả ba đều sai"
        document.getElementById('contin').style.display = "none"
        document.getElementById('table').style.display = "none"
    }
    else if(ans13==document.getElementById('q2').innerHTML){
        document.getElementById('q0').innerHTML = "Ai là người phát minh ra bóng đèn?"
        document.getElementById('q1').innerHTML="Nikola Tesla"
        document.getElementById('q2').innerHTML="Leonardo da Vinci"
        document.getElementById('q3').innerHTML="Thomas Edison"
        document.getElementById('q4').innerHTML="Albert Einstein"
        document.getElementById('contin').style.display = "none"
        document.getElementById('table').style.display = "none"
    }
    else if(ans14==document.getElementById('q3').innerHTML){
        document.getElementById('q0').innerHTML = "Sao Bắc đẩu nằm trong chòm sao nào dưới đây"
        document.getElementById('q1').innerHTML="Hiệp sĩ"
        document.getElementById('q2').innerHTML="Phi mã"
        document.getElementById('q3').innerHTML="Thiên cầm"
        document.getElementById('q4').innerHTML="Tiểu hùng tinh"
        document.getElementById('contin').style.display = "none"
        document.getElementById('table').style.display = "none"
    }
    
    
    
    
}
function stop(){
    alert("Bạn đã dừng cuộc chơi với"+" "+document.getElementById('value').innerHTML);
    location.reload();
}
function playgame(){
    document.getElementById('q0').innerHTML = "Ngoài tiếng anh, ngôn ngữ nào được người dùng trên web sử dụng phổ biến nhất"
    document.getElementById('q1').innerHTML="Tiếng Trung"
    document.getElementById('q2').innerHTML="Tiếng Anh"
    document.getElementById('q3').innerHTML="Tiếng Ý"
    document.getElementById('q4').innerHTML="Tiếng Hàn"
    document.getElementById('contin').style.display = "none"
    document.getElementById('box').style.display = "block"
}
function clickHelp(){
    if(document.getElementById('q1').innerHTML == ans1){
        document.getElementById('q0').innerHTML = "Ngoài tiếng anh, ngôn ngữ nào được người dùng trên web sử dụng phổ biến nhất"
        document.getElementById('q1').innerHTML="Tiếng Trung"
        document.getElementById('q2').innerHTML=""
        document.getElementById('q3').innerHTML=""
        document.getElementById('q4').innerHTML="Tiếng Hàn"
        
    }
    else if(document.getElementById('q3').innerHTML == ans2){
        document.getElementById('q0').innerHTML = "Nguồn năng lượng mặt trời đến từ đầu?"
        document.getElementById('q1').innerHTML = ""
        document.getElementById('q2').innerHTML="Gió"
        document.getElementById('q3').innerHTML="Mặt trời"
        document.getElementById('q4').innerHTML=""
    }
    else if(document.getElementById('q1').innerHTML == ans3){
        document.getElementById('q0').innerHTML = "Có bao nhiêu bit trong 1 byte?"
        document.getElementById('q1').innerHTML="8"
        document.getElementById('q2').innerHTML=""
        document.getElementById('q3').innerHTML=""
        document.getElementById('q4').innerHTML="32"
    }   
    else if(document.getElementById('q1').innerHTML == ans4){
        document.getElementById('q0').innerHTML = "Trình duyệt Web là gì?"
        document.getElementById('q1').innerHTML="Chương trình cho phép bạn truy cập website trên Internet"
        document.getElementById('q2').innerHTML="Một trang web tin tức"
        document.getElementById('q3').innerHTML=""
        document.getElementById('q4').innerHTML=""
    } 
    else if(document.getElementById('q1').innerHTML == ans5){
        document.getElementById('q0').innerHTML = "Lặp lại các dòng tiêu đề của bảng biểu ta dùng?"
        document.getElementById('q1').innerHTML="Table Heading Row Repeat"
        document.getElementById('q2').innerHTML=""
        document.getElementById('q3').innerHTML=""
        document.getElementById('q4').innerHTML="TableSort"
    }
    else if(document.getElementById('q4').innerHTML == ans6){
        document.getElementById('q0').innerHTML = "Các nào dưới đây không phải là phần mở rộng định dạng tập tin ảnh"
        document.getElementById('q1').innerHTML="GIF"
        document.getElementById('q2').innerHTML=""
        document.getElementById('q3').innerHTML=""
        document.getElementById('q4').innerHTML="MOV"
    }
    else if(document.getElementById('q3').innerHTML == ans7){
        document.getElementById('q0').innerHTML = "Đâu là định dạng email hợp lệ trong các email sau"
        document.getElementById('q1').innerHTML=""
        document.getElementById('q2').innerHTML="adam@gmail"
        document.getElementById('q3').innerHTML="adam@gmail.com"
        document.getElementById('q4').innerHTML=""
    }
    else if(document.getElementById('q4').innerHTML == ans8){
        document.getElementById('q0').innerHTML = "Các thiết bị Apple Watch còn được gọi là?"
        document.getElementById('q1').innerHTML="fruit"
        document.getElementById('q2').innerHTML=""
        document.getElementById('q3').innerHTML=""
        document.getElementById('q4').innerHTML="SmartWatch"
    }     
    else if(document.getElementById('q3').innerHTML == ans9){
        document.getElementById('q0').innerHTML = "Đâu là một công cụ tìm kiếm?"
        document.getElementById('q1').innerHTML="Youtube"
        document.getElementById('q2').innerHTML=""
        document.getElementById('q3').innerHTML="Google"
        document.getElementById('q4').innerHTML=""
    }   
    else if(document.getElementById('q4').innerHTML == ans10){
        document.getElementById('q0').innerHTML = "Đâu là video game đầu tiên trên thế giới"
        document.getElementById('q1').innerHTML=""
        document.getElementById('q2').innerHTML="Snake"
        document.getElementById('q3').innerHTML=""
        document.getElementById('q4').innerHTML="Pong"
    } 
    else if(document.getElementById('q3').innerHTML == ans11){
        document.getElementById('q0').innerHTML = "Thiết bị nào sau đây dùng để kết nối mạng"
        document.getElementById('q1').innerHTML=""
        document.getElementById('q2').innerHTML=""
        document.getElementById('q3').innerHTML="Router"
        document.getElementById('q4').innerHTML="CPU"
    }   
    else if(document.getElementById('q1').innerHTML == ans12){
        document.getElementById('q0').innerHTML = "Chương trình nào sau đây dùng để soạn thảo văn bản"
        document.getElementById('q1').innerHTML="Microsoft Word"
        document.getElementById('q2').innerHTML=""
        document.getElementById('q3').innerHTML="Microsoft access"
        document.getElementById('q4').innerHTML=""
    }
    else if(document.getElementById('q2').innerHTML == ans13){
        document.getElementById('q0').innerHTML = "Chương trình nào sau đây dùng để giải nén tập tin, thư mục"
        document.getElementById('q1').innerHTML="Winzips"
        document.getElementById('q2').innerHTML="Winrars"
        document.getElementById('q3').innerHTML=""
        document.getElementById('q4').innerHTML=""
    }
    else if(document.getElementById('q3').innerHTML == ans14){
        document.getElementById('q0').innerHTML = "Ai là người phát minh ra bóng đèn?"
        document.getElementById('q1').innerHTML="Nikola Tesla"
        document.getElementById('q2').innerHTML=""
        document.getElementById('q3').innerHTML="Thomas Edison"
        document.getElementById('q4').innerHTML=""
    }
    else if(document.getElementById('q4').innerHTML == ans15){
        document.getElementById('q0').innerHTML = "Sao Bắc đẩu nằm trong chòm sao nào dưới đây"
        document.getElementById('q1').innerHTML=""
        document.getElementById('q2').innerHTML=""
        document.getElementById('q3').innerHTML="Thiên cầm"
        document.getElementById('q4').innerHTML="Tiểu hùng tinh"
    }    
        
           
        
    
    if(document.getElementById('help').innerHTML = "50/50"){
        document.getElementById('help').disabled = true;
    }
}
function clickHelp2(){
    if(document.getElementById('q1').innerHTML == ans1){
        document.getElementById('q0').innerHTML = "Ngoài tiếng anh, ngôn ngữ nào được người dùng trên web sử dụng phổ biến nhất"
        document.getElementById('q1').innerHTML="Tiếng Trung"
        document.getElementById('q2').innerHTML="Tiếng Anh"
        document.getElementById('q3').innerHTML="Tiếng Ý"
        document.getElementById('q4').innerHTML="Tiếng Hàn"
        document.getElementById('row1').style.width = "50px"
        document.getElementById('row1').style.height = "100px"
        document.getElementById('row1').style.backgroundColor = "red"
        document.getElementById('row2').style.width = "50px"
        document.getElementById('row2').style.height = "300px"
        document.getElementById('row2').style.backgroundColor = "red"
        document.getElementById('row3').style.width = "50px"
        document.getElementById('row3').style.height = "200px"
        document.getElementById('row3').style.backgroundColor = "red"
        document.getElementById('row4').style.width = "50px"
        document.getElementById('row4').style.height = "450px"
        document.getElementById('row4').style.backgroundColor = "red"
        document.getElementById('table').style.display = "block"
        document.getElementById('op').style.display = "block"
    }
    else if(document.getElementById('q3').innerHTML == ans2){
        document.getElementById('q0').innerHTML = "Nguồn năng lượng mặt trời đến từ đầu?"
        document.getElementById('q1').innerHTML="Nước"
        document.getElementById('q2').innerHTML="Gió"
        document.getElementById('q3').innerHTML="Mặt trời"
        document.getElementById('q4').innerHTML="Ôxy"
        document.getElementById('row1').style.width = "50px"
        document.getElementById('row1').style.height = "150px"
        document.getElementById('row1').style.backgroundColor = "red"
        document.getElementById('row2').style.width = "50px"
        document.getElementById('row2').style.height = "480px"
        document.getElementById('row2').style.backgroundColor = "red"
        document.getElementById('row3').style.width = "50px"
        document.getElementById('row3').style.height = "200px"
        document.getElementById('row3').style.backgroundColor = "red"
        document.getElementById('row4').style.width = "50px"
        document.getElementById('row4').style.height = "250px"
        document.getElementById('row4').style.backgroundColor = "red"
        document.getElementById('table').style.display = "block"
        document.getElementById('op').style.display = "block"
    }
    else if(document.getElementById('q1').innerHTML == ans3){
        document.getElementById('q0').innerHTML = "Có bao nhiêu bit trong 1 byte?"
        document.getElementById('q1').innerHTML="8"
        document.getElementById('q2').innerHTML="16"
        document.getElementById('q3').innerHTML="24"
        document.getElementById('q4').innerHTML="32"
        document.getElementById('row1').style.width = "50px"
        document.getElementById('row1').style.height = "70px"
        document.getElementById('row1').style.backgroundColor = "red"
        document.getElementById('row2').style.width = "50px"
        document.getElementById('row2').style.height = "100px"
        document.getElementById('row2').style.backgroundColor = "red"
        document.getElementById('row3').style.width = "50px"
        document.getElementById('row3').style.height = "300px"
        document.getElementById('row3').style.backgroundColor = "red"
        document.getElementById('row4').style.width = "50px"
        document.getElementById('row4').style.height = "490px"
        document.getElementById('row4').style.backgroundColor = "red"
        document.getElementById('table').style.display = "block"
        document.getElementById('op').style.display = "block"
    }
    else if(document.getElementById('q1').innerHTML == ans4){
        document.getElementById('q0').innerHTML = "Trình duyệt Web là gì?"
        document.getElementById('q1').innerHTML="Chương trình cho phép bạn truy cập website trên Internet"
        document.getElementById('q2').innerHTML="Một trang web tin tức"
        document.getElementById('q3').innerHTML="Một loại công cụ tìm kiếm trên Web"
        document.getElementById('q4').innerHTML="Máy tính lưu trữ tập tin WWW"
        document.getElementById('row1').style.width = "50px"
        document.getElementById('row1').style.height = "10px"
        document.getElementById('row1').style.backgroundColor = "red"
        document.getElementById('row2').style.width = "50px"
        document.getElementById('row2').style.height = "300px"
        document.getElementById('row2').style.backgroundColor = "red"
        document.getElementById('row3').style.width = "50px"
        document.getElementById('row3').style.height = "120px"
        document.getElementById('row3').style.backgroundColor = "red"
        document.getElementById('row4').style.width = "50px"
        document.getElementById('row4').style.height = "430px"
        document.getElementById('row4').style.backgroundColor = "red"
        document.getElementById('table').style.display = "block"
        document.getElementById('op').style.display = "block"
    }
    else if(document.getElementById('q1').innerHTML == ans5){
        document.getElementById('q0').innerHTML = "Lặp lại các dòng tiêu đề của bảng biểu ta dùng?"
        document.getElementById('q1').innerHTML="Table Heading Row Repeat"
        document.getElementById('q2').innerHTML="Cả ba đều sai"
        document.getElementById('q3').innerHTML="TableFormular"
        document.getElementById('q4').innerHTML="TableSort"
        document.getElementById('row1').style.width = "50px"
        document.getElementById('row1').style.height = "50px"
        document.getElementById('row1').style.backgroundColor = "red"
        document.getElementById('row2').style.width = "50px"
        document.getElementById('row2').style.height = "170px"
        document.getElementById('row2').style.backgroundColor = "red"
        document.getElementById('row3').style.width = "50px"
        document.getElementById('row3').style.height = "280px"
        document.getElementById('row3').style.backgroundColor = "red"
        document.getElementById('row4').style.width = "50px"
        document.getElementById('row4').style.height = "470px"
        document.getElementById('row4').style.backgroundColor = "red"
        document.getElementById('table').style.display = "block"
        document.getElementById('op').style.display = "block"
    }
    else if(document.getElementById('q4').innerHTML == ans6){
        document.getElementById('q0').innerHTML = "Các nào dưới đây không phải là phần mở rộng định dạng tập tin ảnh"
        document.getElementById('q1').innerHTML="GIF"
        document.getElementById('q2').innerHTML="PNG"
        document.getElementById('q3').innerHTML="JPEG"
        document.getElementById('q4').innerHTML="MOV"
        document.getElementById('row1').style.width = "50px"
        document.getElementById('row1').style.height = "496px"
        document.getElementById('row1').style.backgroundColor = "red"
        document.getElementById('row2').style.width = "50px"
        document.getElementById('row2').style.height = "380px"
        document.getElementById('row2').style.backgroundColor = "red"
        document.getElementById('row3').style.width = "50px"
        document.getElementById('row3').style.height = "188px"
        document.getElementById('row3').style.backgroundColor = "red"
        document.getElementById('row4').style.width = "50px"
        document.getElementById('row4').style.height = "45px"
        document.getElementById('row4').style.backgroundColor = "red"
        document.getElementById('table').style.display = "block"
        document.getElementById('op').style.display = "block"
    }
    else if(document.getElementById('q3').innerHTML == ans7){
        document.getElementById('q0').innerHTML = "Đâu là định dạng email hợp lệ trong các email sau"
        document.getElementById('q1').innerHTML="www.adam.com"
        document.getElementById('q2').innerHTML="adam@gmail"
        document.getElementById('q3').innerHTML="adam@gmail.com"
        document.getElementById('q4').innerHTML="Cả ba đều đúng"
        document.getElementById('row1').style.width = "50px"
        document.getElementById('row1').style.height = "5px"
        document.getElementById('row1').style.backgroundColor = "red"
        document.getElementById('row2').style.width = "50px"
        document.getElementById('row2').style.height = "420px"
        document.getElementById('row2').style.backgroundColor = "red"
        document.getElementById('row3').style.width = "50px"
        document.getElementById('row3').style.height = "192px"
        document.getElementById('row3').style.backgroundColor = "red"
        document.getElementById('row4').style.width = "50px"
        document.getElementById('row4').style.height = "67px"
        document.getElementById('row4').style.backgroundColor = "red"
        document.getElementById('table').style.display = "block"
        document.getElementById('op').style.display = "block"
    }
    else if(document.getElementById('q4').innerHTML == ans8){
        document.getElementById('q0').innerHTML = "Các thiết bị Apple Watch còn được gọi là?"
        document.getElementById('q1').innerHTML="fruit"
        document.getElementById('q2').innerHTML="SmartKey"
        document.getElementById('q3').innerHTML="Smartphone"
        document.getElementById('q4').innerHTML="SmartWatch"
        document.getElementById('row1').style.width = "50px"
        document.getElementById('row1').style.height = "499px"
        document.getElementById('row1').style.backgroundColor = "red"
        document.getElementById('row2').style.width = "50px"
        document.getElementById('row2').style.height = "420px"
        document.getElementById('row2').style.backgroundColor = "red"
        document.getElementById('row3').style.width = "50px"
        document.getElementById('row3').style.height = "333px"
        document.getElementById('row3').style.backgroundColor = "red"
        document.getElementById('row4').style.width = "50px"
        document.getElementById('row4').style.height = "289px"
        document.getElementById('row4').style.backgroundColor = "red"
        document.getElementById('table').style.display = "block"
        document.getElementById('op').style.display = "block"
    }
    else if(document.getElementById('q3').innerHTML == ans9){
        document.getElementById('q0').innerHTML = "Đâu là một công cụ tìm kiếm?"
        document.getElementById('q1').innerHTML="Youtube"
        document.getElementById('q2').innerHTML="Facebook"
        document.getElementById('q3').innerHTML="Google"
        document.getElementById('q4').innerHTML="Apple"
        document.getElementById('row1').style.width = "50px"
        document.getElementById('row1').style.height = "9px"
        document.getElementById('row1').style.backgroundColor = "red"
        document.getElementById('row2').style.width = "50px"
        document.getElementById('row2').style.height = "500px"
        document.getElementById('row2').style.backgroundColor = "red"
        document.getElementById('row3').style.width = "50px"
        document.getElementById('row3').style.height = "234px"
        document.getElementById('row3').style.backgroundColor = "red"
        document.getElementById('row4').style.width = "50px"
        document.getElementById('row4').style.height = "140px"
        document.getElementById('row4').style.backgroundColor = "red"
        document.getElementById('table').style.display = "block"
        document.getElementById('op').style.display = "block"
    }
    else if(document.getElementById('q4').innerHTML == ans10){
        document.getElementById('q0').innerHTML = "Đâu là video game đầu tiên trên thế giới"
        document.getElementById('q1').innerHTML="Mario"
        document.getElementById('q2').innerHTML="Snake"
        document.getElementById('q3').innerHTML="Sudoku"
        document.getElementById('q4').innerHTML="Pong"
        document.getElementById('row1').style.width = "50px"
        document.getElementById('row1').style.height = "457px"
        document.getElementById('row1').style.backgroundColor = "red"
        document.getElementById('row2').style.width = "50px"
        document.getElementById('row2').style.height = "389px"
        document.getElementById('row2').style.backgroundColor = "red"
        document.getElementById('row3').style.width = "50px"
        document.getElementById('row3').style.height = "447px"
        document.getElementById('row3').style.backgroundColor = "red"
        document.getElementById('row4').style.width = "50px"
        document.getElementById('row4').style.height = "189px"
        document.getElementById('row4').style.backgroundColor = "red"
        document.getElementById('table').style.display = "block"
        document.getElementById('op').style.display = "block"
    }
    else if(document.getElementById('q3').innerHTML == ans11){
        document.getElementById('q0').innerHTML = "Thiết bị nào sau đây dùng để kết nối mạng"
        document.getElementById('q1').innerHTML="Ram"
        document.getElementById('q2').innerHTML="Rom"
        document.getElementById('q3').innerHTML="Router"
        document.getElementById('q4').innerHTML="CPU"
        document.getElementById('row1').style.width = "50px"
        document.getElementById('row1').style.height = "20px"
        document.getElementById('row1').style.backgroundColor = "red"
        document.getElementById('row2').style.width = "50px"
        document.getElementById('row2').style.height = "485px"
        document.getElementById('row2').style.backgroundColor = "red"
        document.getElementById('row3').style.width = "50px"
        document.getElementById('row3').style.height = "321px"
        document.getElementById('row3').style.backgroundColor = "red"
        document.getElementById('row4').style.width = "50px"
        document.getElementById('row4').style.height = "123px"
        document.getElementById('row4').style.backgroundColor = "red"
        document.getElementById('table').style.display = "block"
        document.getElementById('op').style.display = "block"
    }
    else if(document.getElementById('q1').innerHTML == ans12){
        document.getElementById('q0').innerHTML = "Chương trình nào sau đây dùng để soạn thảo văn bản"
        document.getElementById('q1').innerHTML="Microsoft Word"
        document.getElementById('q2').innerHTML="Microsoft Excel"
        document.getElementById('q3').innerHTML="Microsoft access"
        document.getElementById('q4').innerHTML="Microsoft Powerpoint"
        document.getElementById('row1').style.width = "50px"
        document.getElementById('row1').style.height = "50px"
        document.getElementById('row1').style.backgroundColor = "red"
        document.getElementById('row2').style.width = "50px"
        document.getElementById('row2').style.height = "20px"
        document.getElementById('row2').style.backgroundColor = "red"
        document.getElementById('row3').style.width = "50px"
        document.getElementById('row3').style.height = "190px"
        document.getElementById('row3').style.backgroundColor = "red"
        document.getElementById('row4').style.width = "50px"
        document.getElementById('row4').style.height = "500px"
        document.getElementById('row4').style.backgroundColor = "red"
        document.getElementById('table').style.display = "block"
        document.getElementById('op').style.display = "block"
    }
    else if(document.getElementById('q2').innerHTML == ans13){
        document.getElementById('q0').innerHTML = "Chương trình nào sau đây dùng để giải nén tập tin, thư mục"
        document.getElementById('q1').innerHTML="Winzips"
        document.getElementById('q2').innerHTML="Winrars"
        document.getElementById('q3').innerHTML="Winz 7"
        document.getElementById('q4').innerHTML="Cả ba đều sai"
        document.getElementById('row1').style.width = "50px"
        document.getElementById('row1').style.height = "10px"
        document.getElementById('row1').style.backgroundColor = "red"
        document.getElementById('row2').style.width = "50px"
        document.getElementById('row2').style.height = "100px"
        document.getElementById('row2').style.backgroundColor = "red"
        document.getElementById('row3').style.width = "50px"
        document.getElementById('row3').style.height = "390px"
        document.getElementById('row3').style.backgroundColor = "red"
        document.getElementById('row4').style.width = "50px"
        document.getElementById('row4').style.height = "30px"
        document.getElementById('row4').style.backgroundColor = "red"
        document.getElementById('table').style.display = "block"
        document.getElementById('op').style.display = "block"
    }
    else if(document.getElementById('q3').innerHTML == ans14){
        document.getElementById('q0').innerHTML = "Ai là người phát minh ra bóng đèn?"
        document.getElementById('q1').innerHTML="Nikola Tesla"
        document.getElementById('q2').innerHTML="Leonardo da Vinci"
        document.getElementById('q3').innerHTML="Thomas Edison"
        document.getElementById('q4').innerHTML="Albert Einstein"
        document.getElementById('row1').style.width = "50px"
        document.getElementById('row1').style.height = "120px"
        document.getElementById('row1').style.backgroundColor = "red"
        document.getElementById('row2').style.width = "50px"
        document.getElementById('row2').style.height = "468px"
        document.getElementById('row2').style.backgroundColor = "red"
        document.getElementById('row3').style.width = "50px"
        document.getElementById('row3').style.height = "358px"
        document.getElementById('row3').style.backgroundColor = "red"
        document.getElementById('row4').style.width = "50px"
        document.getElementById('row4').style.height = "369px"
        document.getElementById('row4').style.backgroundColor = "red"
        document.getElementById('table').style.display = "block"
        document.getElementById('op').style.display = "block"
    }
    else if(document.getElementById('q4').innerHTML == ans15){
        document.getElementById('q0').innerHTML = "Sao Bắc đẩu nằm trong chòm sao nào dưới đây"
        document.getElementById('q1').innerHTML="Hiệp sĩ"
        document.getElementById('q2').innerHTML="Phi mã"
        document.getElementById('q3').innerHTML="Thiên cầm"
        document.getElementById('q4').innerHTML="Tiểu hùng tinh"
        document.getElementById('row1').style.width = "50px"
        document.getElementById('row1').style.height = "210px"
        document.getElementById('row1').style.backgroundColor = "red"
        document.getElementById('row2').style.width = "50px"
        document.getElementById('row2').style.height = "10px"
        document.getElementById('row2').style.backgroundColor = "red"
        document.getElementById('row3').style.width = "50px"
        document.getElementById('row3').style.height = "98px"
        document.getElementById('row3').style.backgroundColor = "red"
        document.getElementById('row4').style.width = "50px"
        document.getElementById('row4').style.height = "45px"
        document.getElementById('row4').style.backgroundColor = "red"
        document.getElementById('table').style.display = "block"
        document.getElementById('op').style.display = "block"
    }
    if(document.getElementById('help2').innerHTML == "Hỏi ý kiến"){
        document.getElementById('help2').disabled = true;
        
    }
}




