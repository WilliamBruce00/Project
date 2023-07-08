var point=0;
var i = 10;
var s = 5;
var ob = {
    with: 360
}
function playGame(){
    /*-------------------------------------------------------------------------*/
    // Ẩn hiện icon chuột chũi (setInterval + setTimeout + DOM +random())
    stop = setInterval(function(){
        var random = 0 + Math.round(8*Math.random())
        
        if(random==0){
            document.getElementById('mouse1').style.display = "block"
           
            if(document.getElementById('mouse1').style.display = "block"){
                setTimeout(function(){
                    document.getElementById('mouse1').style.display = "none"
                },2000)
            }
        }
        else if(random==1){
            document.getElementById('mouse2').style.display = "block"
            if(document.getElementById('mouse2').style.display = "block"){
                setTimeout(function(){
                    document.getElementById('mouse2').style.display = "none"
                },2000)
            }
        }
        else if(random==2){
            document.getElementById('mouse3').style.display = "block"
            if(document.getElementById('mouse3').style.display = "block"){
                setTimeout(function(){
                    document.getElementById('mouse3').style.display = "none"
                },2000)
            }
        }
        else if(random==3){
            document.getElementById('mouse4').style.display = "block"
            if(document.getElementById('mouse4').style.display = "block"){
                setTimeout(function(){
                    document.getElementById('mouse4').style.display = "none"
                },2000)
            }
        }
        else if(random==4){
            document.getElementById('mouse5').style.display = "block"
            if(document.getElementById('mouse5').style.display = "block"){
                setTimeout(function(){
                    document.getElementById('mouse5').style.display = "none"
                },2000)
            }
        }
        else if(random==5){
            document.getElementById('mouse6').style.display = "block"
            if(document.getElementById('mouse6').style.display = "block"){
                setTimeout(function(){
                    document.getElementById('mouse6').style.display = "none"
                },2000)
            }
        }
        else if(random==6){
            document.getElementById('mouse7').style.display = "block"
            if(document.getElementById('mouse7').style.display = "block"){
                setTimeout(function(){
                    document.getElementById('mouse7').style.display = "none"
                },2000)
            }
        }
        else if(random==7){
            document.getElementById('mouse8').style.display = "block"
            if(document.getElementById('mouse8').style.display = "block"){
                setTimeout(function(){
                    document.getElementById('mouse8').style.display = "none"
                },2000)
            }
        }
        else if(random==8){
            document.getElementById('mouse9').style.display = "block"
            if(document.getElementById('mouse9').style.display = "block"){
                setTimeout(function(){
                    document.getElementById('mouse9').style.display = "none"
                },2000)
            }
        }
    },500)
/*-----------------------------------------------------------------------------------------*/
// Đồng hồ đếm ngược + linebar (setInterval + DOM) |
    clear = setInterval(function(){
        i--;
        document.getElementById('bon').innerHTML = i;
        var y = (ob.with = ob.with - 6) + "px";
        if(y<=0+"px"){
            ob.with = 360;
        }
        
        document.getElementById('row').style.width = y;
        document.getElementById('row').style.height = "20px"
        document.getElementById('row').style.backgroundColor = "green";console.log(y);
        if(i==-1){
            i=9;
            document.getElementById('bon').innerHTML = i;
            s--;
            document.getElementById('ba').innerHTML = s;
        }
        if(s==0 && i==0){
            clearInterval(clear)
            alert("Hết thời gian rồi")
            alert("Thành tích:"+document.getElementById('point').innerHTML + "điểm");
            clearInterval(stop)
            location.reload();
        }
        if(s==-1){
            s=5;
            
            document.getElementById('ba').innerHTML = s;
        } 
        
    },1000)
    
    
}
/*-----------------------------------------------------------------------------*/
// Cộng điểm (AddeventListner + DOM) |
function clickMouse(){
    
    point = point + 100;
    document.getElementById('point').innerHTML = point;
    document.getElementById('mouse1').style.display = "none"
    
}
function clickMouse2(){
    point = point + 100;
    document.getElementById('point').innerHTML = point;
    document.getElementById('mouse2').style.display = "none"
}
function clickMouse3(){
    point = point + 100;
    document.getElementById('point').innerHTML = point;
    document.getElementById('mouse3').style.display = "none"
}
function clickMouse4(){
    point = point + 100;
    document.getElementById('point').innerHTML = point;
    document.getElementById('mouse4').style.display = "none"
}
function clickMouse5(){
    point = point + 100;
    document.getElementById('point').innerHTML = point;
    document.getElementById('mouse5').style.display = "none"
}
function clickMouse6(){
    point = point + 100;
    document.getElementById('point').innerHTML = point;
    document.getElementById('mouse6').style.display = "none"
}
function clickMouse7(){
    point = point + 100;
    document.getElementById('point').innerHTML = point;
    document.getElementById('mouse7').style.display = "none"
}
function clickMouse8(){
    point = point + 100;
    document.getElementById('point').innerHTML = point;
    document.getElementById('mouse8').style.display = "none"
}
function clickMouse9(){
    point = point + 100;
    document.getElementById('point').innerHTML = point;
    document.getElementById('mouse9').style.display = "none"
}
document.addEventListener('onclick',clickMouse);
document.addEventListener('onclick',clickMouse2)
document.addEventListener('onclick',clickMouse3)
document.addEventListener('onclick',clickMouse4)
document.addEventListener('onclick',clickMouse5)
document.addEventListener('onclick',clickMouse6)
document.addEventListener('onclick',clickMouse7)
document.addEventListener('onclick',clickMouse8)
document.addEventListener('onclick',clickMouse9)