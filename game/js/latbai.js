var i ;
var ul = document.querySelector('ul')
console.log(ul)
for(i = ul.children.length;i>=0;i--){
    ul.appendChild(ul.children[Math.floor(Math.random()*i)])
}
var second = 0;
var miu = 0;
var hour = 0;
var one = document.getElementById('hinh1')
var two = document.getElementById('hinh2')
var three = document.getElementById('hinh3')
var four = document.getElementById('hinh4')
var five = document.getElementById('hinh5')
var six = document.getElementById('hinh6')
var seven = document.getElementById('hinh7')
var eight = document.getElementById('hinh8')
var night = document.getElementById('hinh9')
var ten = document.getElementById('hinh10')
var eleven = document.getElementById('hinh11')
var twelen = document.getElementById('hinh12')
function clickMouse(x){
    if(x==0){
        document.getElementById('hinh1').style.display = "block"
        document.getElementById('last1').style.display = "none"
        clear1 = setTimeout(function(){
            document.getElementById('hinh1').style.display = "none"
            document.getElementById('last1').style.display = "block"
        },800)
    }
    else if(x==1){
        document.getElementById('hinh2').style.display = "block"
        document.getElementById('last2').style.display = "none"
        clear2 = setTimeout(function(){
            document.getElementById('hinh2').style.display = "none"
            document.getElementById('last2').style.display = "block"
        },800)
    }
    else if(x==2){
        document.getElementById('hinh3').style.display = "block"
        document.getElementById('last3').style.display = "none"
        clear3 = setTimeout(function(){
            document.getElementById('hinh3').style.display = "none"
            document.getElementById('last3').style.display = "block"
        },800)
    }
    else if(x==3){
        document.getElementById('hinh4').style.display = "block"
        document.getElementById('last4').style.display = "none"
        clear4 = setTimeout(function(){
            document.getElementById('hinh4').style.display = "none"
            document.getElementById('last4').style.display = "block"
        },800)
    }
    else if(x==4){
        document.getElementById('hinh5').style.display = "block"
        document.getElementById('last5').style.display = "none"
        clear5 = setTimeout(function(){
            document.getElementById('hinh5').style.display = "none"
            document.getElementById('last5').style.display = "block"
        },800)
    }
    else if(x==5){
        document.getElementById('hinh6').style.display = "block"
        document.getElementById('last6').style.display = "none"
        clear6 = setTimeout(function(){
            document.getElementById('hinh6').style.display = "none"
            document.getElementById('last6').style.display = "block"
        },800)
    }
    else if(x==6){
        document.getElementById('hinh7').style.display = "block"
        document.getElementById('last7').style.display = "none"
        clear7 = setTimeout(function(){
            document.getElementById('hinh7').style.display = "none"
            document.getElementById('last7').style.display = "block"
        },800)
    }
    else if(x==7){
        document.getElementById('hinh8').style.display = "block"
        document.getElementById('last8').style.display = "none"
        clear8 = setTimeout(function(){
            document.getElementById('hinh8').style.display = "none"
            document.getElementById('last8').style.display = "block"
        },500)
    }
    else if(x==8){
        document.getElementById('hinh9').style.display = "block"
        document.getElementById('last9').style.display = "none"
        clear9 = setTimeout(function(){
            document.getElementById('hinh9').style.display = "none"
            document.getElementById('last9').style.display = "block"
        },500)
    }
    else if(x==9){
        document.getElementById('hinh10').style.display = "block"
        document.getElementById('last10').style.display = "none"
        clear10 = setTimeout(function(){
            document.getElementById('hinh10').style.display = "none"
            document.getElementById('last10').style.display = "block"
        },500)
    }
    else if(x==10){
        document.getElementById('hinh11').style.display = "block"
        document.getElementById('last11').style.display = "none"
        clear11 = setTimeout(function(){
            document.getElementById('hinh11').style.display = "none"
            document.getElementById('last11').style.display = "block"
        },500)
    }
    else if(x==11){
        document.getElementById('hinh12').style.display = "block"
        document.getElementById('last12').style.display = "none"
        clear12 = setTimeout(function(){
            document.getElementById('hinh12').style.display = "none"
            document.getElementById('last12').style.display = "block"
        },500)
    }
    result();
    
}
function result(){
    if(one.style.display == "block" && seven.style.display == "block"){
        clearTimeout(clear1)
        clearTimeout(clear7)
    }
    if(two.style.display == "block" && eight.style.display == "block"){
        clearTimeout(clear2)
        clearTimeout(clear8)
    } 
    if(three.style.display == "block" && night.style.display == "block"){
        clearTimeout(clear3)
        clearTimeout(clear9)
    }  
    if(four.style.display == "block" && ten.style.display == "block"){
        clearTimeout(clear4)
        clearTimeout(clear10)
    } 
    if(five.style.display == "block" && twelen.style.display == "block"){
        clearTimeout(clear5)
        clearTimeout(clear12)
    }
    if(six.style.display == "block" && eleven.style.display == "block"){
        clearTimeout(clear6)
        clearTimeout(clear11)
    }
    if(one.style.display == "block" &&
       two.style.display == "block" &&
       three.style.display == "block" &&
       four.style.display == "block" &&
       five.style.display == "block" &&
       six.style.display == "block" &&
       seven.style.display == "block" &&
       eight.style.display == "block" &&
       night.style.display == "block" &&
       ten.style.display == "block" &&
       eleven.style.display == "block" &&
       twelen.style.display == "block"){
            alert("Kết thúc trò chơi")
            location.reload();
    }
}
function watchStar(){
    setInterval(function(){
        second++;
        document.getElementById('bon').innerHTML = second;
        if(second == 10){
            second = 0;
            document.getElementById('bon').innerHTML = second;
            miu++;
            document.getElementById('ba').innerHTML = miu;
        }
    },1000)
}

