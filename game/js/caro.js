var flag = true;
var count = 0;
var btn0 = document.getElementsByTagName('button')[0]
var btn1 = document.getElementsByTagName('button')[1]
var btn2 = document.getElementsByTagName('button')[2]
var btn3 = document.getElementsByTagName('button')[3]
var btn4 = document.getElementsByTagName('button')[4]
var btn5 = document.getElementsByTagName('button')[5]
var btn6 = document.getElementsByTagName('button')[6]
var btn7 = document.getElementsByTagName('button')[7]
var btn8 = document.getElementsByTagName('button')[8]
function mark(x){
    var button = document.getElementsByTagName('button')[x]
    button.innerText = flag?"X":"O"
    button.style.backgroundColor = flag?"aqua":"yellow"
    button.setAttribute('disabled',"true")
    flag = !flag
    if(btn0.innerHTML == "X" && btn1.innerHTML == "X" && btn2.innerHTML == "X" ||
       btn3.innerHTML == "X" && btn4.innerHTML == "X" && btn5.innerHTML == "X" ||
       btn6.innerHTML == "X" && btn7.innerHTML == "X" && btn8.innerHTML == "X" ||
       btn0.innerHTML == "X" && btn3.innerHTML == "X" && btn6.innerHTML == "X" ||
       btn1.innerHTML == "X" && btn4.innerHTML == "X" && btn7.innerHTML == "X" ||
       btn2.innerHTML == "X" && btn5.innerHTML == "X" && btn8.innerHTML == "X" ||
       btn0.innerHTML == "X" && btn4.innerHTML == "X" && btn8.innerHTML == "X" ||
       btn2.innerHTML == "X" && btn4.innerHTML == "X" && btn6.innerHTML == "X"){
       alert("X Win")
       location.reload(); 
    }
    else if(btn0.innerHTML == "O" && btn1.innerHTML == "O" && btn2.innerHTML == "O" ||
            btn3.innerHTML == "O" && btn4.innerHTML == "O" && btn5.innerHTML == "O" ||
            btn6.innerHTML == "O" && btn7.innerHTML == "O" && btn8.innerHTML == "O" ||
            btn0.innerHTML == "O" && btn3.innerHTML == "O" && btn6.innerHTML == "O" ||
            btn1.innerHTML == "O" && btn4.innerHTML == "O" && btn7.innerHTML == "O" ||
            btn2.innerHTML == "O" && btn5.innerHTML == "O" && btn8.innerHTML == "O" ||
            btn0.innerHTML == "O" && btn4.innerHTML == "O" && btn8.innerHTML == "O" ||
            btn2.innerHTML == "O" && btn4.innerHTML == "O" && btn6.innerHTML == "O"){
        alert("O Win")
        location.reload();
    }
    count++;
    if(count==9){
        alert("Hòa")
        location.reload();
    }
}
