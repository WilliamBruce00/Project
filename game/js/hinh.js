var arrImg = [
    "<img src='img/baothuc.png'> ",                  // length = 28;
    "<img src='img/caokien.png'>  ",                 // length = 29;
    "<img src='img/cobap.png'>     ",                // length = 30;
    "<img src='img/macarong.png'>   ",               // length = 31;
    "<img src='img/mahoa.png'>       ",              // length = 32;
    "<img src='img/matkhau.png'>      ",             // length = 33;
    "<img src='img/muinhon.png'>       ",            // length = 34;
    "<img src='img/nhantu.png'>         ",           // length = 35;
    "<img src='img/taihoa.png'>          ",          // length = 36;
    "<img src='img/thamhoa.png'>          "          // length = 37;
]
var second = 0;
var minutes = 0;
var hour = 0;
var hour2 = 0;
var text = document.getElementById('textput');
var box = document.getElementById('box');
function playGame(){
    box.innerHTML = arrImg[0]
    document.getElementById('play').disabled = true;
    watchTime();
}
function check(){
    if(box.innerHTML.length == 28){
        baothuc();
    }
    else if(box.innerHTML.length == 29){
        caokien();
    }
    else if(box.innerHTML.length == 30){
        cobap();
    }
    else if(box.innerHTML.length == 31){
        macarong();
    }
    else if(box.innerHTML.length == 32){
        mahoa();
    }
    else if(box.innerHTML.length == 33){
        matkhau();
    }
    else if(box.innerHTML.length == 34){
        muinhon();
    }
    else if(box.innerHTML.length == 35){
        nhantu();
    }
    else if(box.innerHTML.length == 36){
        taihoa();
    }
    else if(box.innerHTML.length == 37){
        thamhoa();
    }
}
// hinh 1
function baothuc(){
    if(box.innerHTML.length == 28 && text.value == "báo thức"){
        alert("Câu hỏi tiếp theo")
        next();
        text.value = null;
    }
    else{
        alert("Chưa chính xác");
        text.value = null;
    }
}
// hinh 2
function caokien(){
    if(box.innerHTML.length == 29 && text.value == "cao kiến"){
        alert("Câu hỏi tiếp theo")
        next();
        text.value = null;
    }
    else{
        alert("Chưa chính xác");
        text.value = null;
    }
}    
// hinh 3
function cobap(){
    if(box.innerHTML.length == 30 && text.value == "cơ bắp"){
        alert("Câu hỏi tiếp theo")
        next();
        text.value = null;
    }
    else{
        alert("Chưa chính xác");
        text.value = null;
    }
}
// hinh 4
function macarong(){
    if(box.innerHTML.length == 31 && text.value == "ma cà rồng"){
        alert("Câu hỏi tiếp theo")
        next();
        text.value = null;
    }
    else{
        alert("Chưa chính xác");
        text.value = null;
    }
}
// hình 5
function mahoa(){
    if(box.innerHTML.length == 32 && text.value == "mã hóa"){
        alert("Câu hỏi tiếp theo")
        next();
        text.value = null;
    }
    else{
        alert("Chưa chính xác");
        text.value = null;
    }
}
// hình 6 
function matkhau(){
    if(box.innerHTML.length == 33 && text.value == "mật khẩu"){
        alert("Câu hỏi tiếp theo")
        next();
        text.value = null;
    }
    else{
        alert("Chưa chính xác");
        text.value = null;
    }
}
// hinh 7
function muinhon(){
    if(box.innerHTML.length == 34 && text.value == "mũi nhọn"){
        alert("Câu hỏi tiếp theo")
        next();
        text.value = null;
    }
    else{
        alert("Chưa chính xác");
        text.value = null;
    }
}
// hinh 8
function nhantu(){
    if(box.innerHTML.length == 35 && text.value == "nhân từ"){
        alert("Câu hỏi tiếp theo")
        next();
        text.value = null;
    }
    else{
        alert("Chưa chính xác");
        text.value = null;
    }
}
// hinh 9
function taihoa(){
    if(box.innerHTML.length == 36 && text.value == "tai họa"){
        alert("Câu hỏi tiếp theo")
        next();
        text.value = null;
    }
    else{
        alert("Chưa chính xác");
        text.value = null;
    }
}
// hinh 10 
function thamhoa(){
    if(box.innerHTML.length == 37 && text.value == "thảm họa"){
        alert("Chúc mừng bạn đã hoàn thành 10 câu hỏi");
        alert("Thời gian: "+document.getElementById('mot').innerHTML+document.getElementById('hai').innerHTML + ":" + document.getElementById('ba').innerHTML + document.getElementById('bon').innerHTML)
        next();
        text.value = null;
        clearInterval(clear)
        location.reload();
    }
    else{
        alert("Chưa chính xác");
        text.value = null;
    }
}
function next(){
    if(box.innerHTML.length == 28){
        box.innerHTML = arrImg[1]
    }
    else if(box.innerHTML.length == 29){
        box.innerHTML = arrImg[2]
    }
    else if(box.innerHTML.length == 30){
        box.innerHTML = arrImg[3]
    }
    else if(box.innerHTML.length == 31){
        box.innerHTML = arrImg[4]
    }
    else if(box.innerHTML.length == 32){
        box.innerHTML = arrImg[5]
    }
    else if(box.innerHTML.length == 33){
        box.innerHTML = arrImg[6]
    }
    else if(box.innerHTML.length == 34){
        box.innerHTML = arrImg[7]
    }
    else if(box.innerHTML.length == 35){
        box.innerHTML = arrImg[8]
    }
    else if(box.innerHTML.length == 36){
        box.innerHTML = arrImg[9]
    }
}
function watchTime(){
    clear = setInterval(function(){
        second++;
        document.getElementById('bon').innerHTML = second;
        if(second==10){
            second = 0;
            document.getElementById('bon').innerHTML = second;
            minutes++;
            document.getElementById('ba').innerHTML = minutes;
        }
        if(minutes==6){
            minutes = 0;
            document.getElementById('ba').innerHTML = minutes;
            hour++;
            document.getElementById('hai').innerHTML = hour;
        }
        if(hour==10){
            hour = 0;
            
            document.getElementById('hai').innerHTML = hour;
            hour2++;
            document.getElementById('mot').innerHTML = hour2;
        }
    },1000)
}