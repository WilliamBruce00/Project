var text = document.querySelectorAll('textarea');
var count = 0;
var re = ""
var th = document.querySelectorAll('th');
text[1].disabled = true;
var arr = [
    ["apple","orange","mango","grape","hello","yes","true","false","no","water","fire","grass","fly","ground","normal","computer","smartphone","mouse","cat","dog","tiger","a fan","number","word","folder","table","start","finsh"],
    ["táo","cam","xoài","nho","Xin chào","Ừ","đúng","sai","không","nước","lửa","cỏ","bay","đất","thường","máy tính","điện thoại","chuột","mèo","chó","cọp, hổ","quạt máy","số","từ","thư mục","máy tính bảng","bắt đầu","kết thúc"]
]

function tranfer(){
    count++;
    if(count%2 != 0){
        th[0].innerHTML = "Vietnamese"
        th[1].innerHTML = "English"
        tranViet();
        if(text[0].value != "" && text[1].value != ""){
            text[0].value = ""
            text[1].value = ""
        }
        else if(text[0].value != "" || text[1].value !=""){
            text[0].value = ""
            text[1].value = ""
        } 
    }
    else{
        th[1].innerHTML = "Vietnamese"
        th[0].innerHTML = "English"
        if(text[0].value != "" && text[1].value != ""){
            text[0].value = ""
            text[1].value = ""
        }
    }
}
function tranViet(){
   
        for(var i = 0 ;i<arr.length;i++){
            
            if(text[0].value == arr[0][0]){
                re = arr[1][0]
            }    
            else if(text[0].value == arr[0][1]){
                re = arr[1][1]
            }
            else if(text[0].value == arr[0][2]){
                re = arr[1][2]
            }
            else if(text[0].value == arr[0][3]){
                re  = arr[1][3]
            }
            else if(text[0].value == arr[0][4]){
                re = arr[1][4]
            }
            else if(text[0].value == arr[0][5]){
                re = arr[1][5]
            }
            else if(text[0].value == arr[0][6]){
                re = arr[1][6]
            }
            else if(text[0].value == arr[0][7]){
                re = arr[1][7]
            }
            else if(text[0].value == arr[0][8]){
                re = arr[1][8]
            }
            else if(text[0].value == arr[0][9]){
                re = arr[1][9]
            }
            else if(text[0].value == arr[0][10]){
                re = arr[1][10]
            }
            else if(text[0].value == arr[0][11]){
                re = arr[1][11]
            }
            else if(text[0].value == arr[0][12]){
                re = arr[1][12]
            }
            else if(text[0].value == arr[0][13]){
                re = arr[1][13]
            }
            else if(text[0].value == arr[0][14]){
                re = arr[1][14]
            }
            else if(text[0].value == arr[0][15]){
                re = arr[1][15]
            }
            else if(text[0].value == arr[0][16]){
                re = arr[1][16]
            }
            else if(text[0].value == arr[0][17]){
                re = arr[1][17]
            }
            else if(text[0].value == arr[0][18]){
                re = arr[1][18]
            }
            else if(text[0].value == arr[0][19]){
                re = arr[1][19]
            }
            else if(text[0].value == arr[0][20]){
                re = arr[1][20]
            }
            else if(text[0].value == arr[0][21]){
                re = arr[1][21]
            }
            else if(text[0].value == arr[0][22]){
                re = arr[1][22]
            }

            return text[1].value = re
        }
    
    
}
function speak(){
    let unter = new SpeechSynthesisUtterance(text[0].value);
    speechSynthesis.speak(unter)
}