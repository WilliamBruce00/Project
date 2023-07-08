var anhArr = [
    "<img src='img/banana.png'>",            // length = 26;
    "<img src='img/apple.png'>  ",           // length = 27;
    "<img src='img/orange.png'>   ",         // length = 29;
    "<img src='img/grape.png'>      ",       // length = 31;
    "<img src='img/mango.png'>       ",      // length = 32;
    "+100$",                                  // length = 5;   
                                                                    
];

var win = 0;
var bet = document.getElementById('box4');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var turn = document.getElementById('money').innerHTML;
function clickMouse(){
    turn = turn - 1;
    document.getElementById('money').innerHTML = turn;
    if(document.getElementById('money').innerHTML < 0){
        document.getElementById('money').innerHTML = 0;
        alert("Hết lượt")
    }
    else{
        clear1 = setInterval(function(){
            randomImgOne =  Math.floor(Math.random()*6);
            one.innerHTML = anhArr[randomImgOne]
        },100)
        clear2 = setInterval(function(){
            randomImgOne =   Math.floor(Math.random()*6);
            two.innerHTML = anhArr[randomImgOne]
        },100)
        clear3 = setInterval(function(){
            randomImgOne = Math.floor(Math.random()*6);
            three.innerHTML = anhArr[randomImgOne]
        },100)      
        setTimeout(function(){
            
            if(one.innerHTML.length == 26 && two.innerHTML.length == 26 && three.innerHTML.length == 26 ||
               one.innerHTML.length == 27 && two.innerHTML.length == 27 && three.innerHTML.length == 27 ||
               one.innerHTML.length == 29 && two.innerHTML.length == 29 && three.innerHTML.length == 29 ||
               one.innerHTML.length == 31 && two.innerHTML.length == 31 && three.innerHTML.length == 31 ||
               one.innerHTML.length == 32 && two.innerHTML.length == 32 && three.innerHTML.length == 32){
                win = win + 500;
                document.getElementById('bet').innerHTML = win + "$"
                document.getElementById('box4').innerHTML = "+500$"
            } 
            else if(one.innerHTML.length == 5 || two.innerHTML.length == 5 || three.innerHTML.length == 5){
                win = win + 100;
                document.getElementById('bet').innerHTML = win + "$"
                document.getElementById('box4').innerHTML = "+100$"
                if(one.innerHTML.length == 5 && two.innerHTML.length == 5 && three.innerHTML.length == 5){
                    win = win + 200;
                    document.getElementById('bet').innerHTML = win + "$"
                    document.getElementById('box4').innerHTML = "+300$"
                }
                else if(one.innerHTML.length == 5 && two.innerHTML.length == 5 ||
                        one.innerHTML.length == 5 && three.innerHTML.length == 5 ||
                        two.innerHTML.length == 5 && three.innerHTML.length == 5){
                    win = win + 100;
                    document.getElementById('bet').innerHTML = win + "$"
                    document.getElementById('box4').innerHTML = "+200$"
                }
            }
            
            else{
                alert("Chúc bạn may mắn lần sau")
                document.getElementById('box4').innerHTML = "Rất tiếc!"
            }
            
            
            clearInterval(clear1);
            clearInterval(clear2)
            clearInterval(clear3)
        },5000)
    }
    document.getElementById('wheel').disabled = true;
    setTimeout(function(){
        document.getElementById('wheel').disabled = false;
    },5000);
    document.getElementById('box4').innerHTML = "GOOD LUCK"
}

