var player = 0;
var cpu = 0;
function move(){
    setTimeout(function(){
        document.getElementById('bong15').style.display = "block"
        document.getElementById('bong19').style.display = "none"
    },1000)
    setTimeout(function(){
        document.getElementById('bong14').style.display = "block"
        document.getElementById('bong15').style.display = "none"
    },1040)
    setTimeout(function(){
        document.getElementById('bong13').style.display = "block"
        document.getElementById('bong14').style.display = "none"
    },1060)
    setTimeout(function(){
        document.getElementById('bong12').style.display = "block"
        document.getElementById('bong13').style.display = "none"
    },1080)
    setTimeout(function(){
        document.getElementById('bong2').style.display = "block"
        document.getElementById('bong12').style.display = "none"
    },1100)
    setTimeout(function(){
        document.getElementById('bong1').style.display = "block"
        document.getElementById('bong2').style.display = "none"
    },1120)
    
    var random = 0 + Math.round(2*Math.random());
    
    if(random==0){
        setTimeout(function(){
            document.getElementById('img-center').style.display = "block"
        },1130)
    }
    else if(random==1){
        setTimeout(function(){
            document.getElementById('img-left').style.display = "block"
            document.getElementById('img-center').style.display = "none"
        },1130)
    }
    else if(random==2){
        setTimeout(function(){
            document.getElementById('img-right').style.display = "block"
            document.getElementById('img-center').style.display = "none"
        },1130)
    }
    if(document.getElementById('bong1').style.display = "block" && random==1){
        setTimeout(function(){
            document.getElementById('result').innerHTML = "KHÔNG VÀO"
            document.getElementById('conti').style.display = "block"
            document.getElementById('sl').disabled = true;document.getElementById('sr').disabled = true;document.getElementById('sc').disabled = true;
            cpu++;
            document.getElementById('cpu').innerHTML = cpu
        },1130)
    }
    else{
        setTimeout(function(){
            document.getElementById('result').innerHTML = "VÀO"
            document.getElementById('conti').style.display = "block"
            document.getElementById('sl').disabled = true;document.getElementById('sr').disabled = true;document.getElementById('sc').disabled = true;
            player++;
            document.getElementById('player').innerHTML = player
        },1130)
    }
    
        
    
}
function move2(){
    setTimeout(function(){
        document.getElementById('bong15').style.display = "block"
        document.getElementById('bong19').style.display = "none"
    },1000)
    setTimeout(function(){
        document.getElementById('bong14').style.display = "block"
        document.getElementById('bong15').style.display = "none"
    },1040)
    setTimeout(function(){
        document.getElementById('bong13').style.display = "block"
        document.getElementById('bong14').style.display = "none"
    },1060)
    setTimeout(function(){
        document.getElementById('bong12').style.display = "block"
        document.getElementById('bong13').style.display = "none"
    },1080)
    setTimeout(function(){
        document.getElementById('bong5').style.display = "block"
        document.getElementById('bong12').style.display = "none"
    },1100)
    setTimeout(function(){
        document.getElementById('bong4').style.display = "block"
        document.getElementById('bong5').style.display = "none"
    },1120)
    var random = 0 + Math.round(2*Math.random());
    
    if(random==0){
        setTimeout(function(){
            document.getElementById('img-center').style.display = "block"
        },1130)
    }
    else if(random==1){
        setTimeout(function(){
            document.getElementById('img-left').style.display = "block"
            document.getElementById('img-center').style.display = "none"
        },1130)
    }
    else if(random==2){
        setTimeout(function(){
            document.getElementById('img-right').style.display = "block"
            document.getElementById('img-center').style.display = "none"
        },1130)
    }
    if(document.getElementById('bong5').style.display = "block" && random == 2){
        setTimeout(function(){
            document.getElementById('result').innerHTML = "KHÔNG VÀO"
            document.getElementById('conti').style.display = "block"
            document.getElementById('sl').disabled = true;document.getElementById('sr').disabled = true;document.getElementById('sc').disabled = true;
            cpu++;
            document.getElementById('cpu').innerHTML = cpu
        },1130)
    }
    else[
        setTimeout(function(){
            document.getElementById('result').innerHTML = "VÀO"
            document.getElementById('conti').style.display = "block"
            document.getElementById('sl').disabled = true;document.getElementById('sr').disabled = true;document.getElementById('sc').disabled = true;
            player++;
            document.getElementById('player').innerHTML = player
        },1130)
    ]
}
function panenka(){
    setTimeout(function(){
        document.getElementById('bong15').style.display = "block";
        document.getElementById('bong19').style.display = "none";
    },1000)
    setTimeout(function(){
        document.getElementById('bong14').style.display = "block";
        document.getElementById('bong15').style.display = "none"
    },1100)
    setTimeout(function(){
        document.getElementById('bong13').style.display = "block";
        document.getElementById('bong14').style.display = "none"
    },1200)
    setTimeout(function(){
        document.getElementById('bong12').style.display = "block";
        document.getElementById('bong13').style.display = "none";
    },1300)
    setTimeout(function(){
        document.getElementById('bong11').style.display = "block";
        document.getElementById('bong12').style.display = "none"
    },1400)
    setTimeout(function(){
        document.getElementById('bong10').style.display = "block";
        document.getElementById('bong11').style.display = "none";
    },1500)
    var random = 0 + Math.round(2*Math.random());
    
    if(random==0){
        setTimeout(function(){
            document.getElementById('img-center').style.display = "block"
        },1000)
    }
    else if(random==1){
        setTimeout(function(){
            document.getElementById('img-left').style.display = "block"
            document.getElementById('img-center').style.display = "none"
        },1000)
    }
    else if(random==2){
        setTimeout(function(){
            document.getElementById('img-right').style.display = "block"
            document.getElementById('img-center').style.display = "none"
        },1000)
    }
    if(document.getElementById('bong10').style.display = "block" && random==0){
        setTimeout(function(){
            document.getElementById('result').innerHTML = "KHÔNG VÀO"
            document.getElementById('conti').style.display = "block"
            document.getElementById('sl').disabled = true;document.getElementById('sr').disabled = true;document.getElementById('sc').disabled = true;
            cpu++;
            document.getElementById('cpu').innerHTML = cpu
        },1500)
    }
    else if(document.getElementById('bong10').style.display = "block"  && random==1){
        setTimeout(function(){
            document.getElementById('result').innerHTML = "VÀO"
            document.getElementById('conti').style.display = "block"
            document.getElementById('sl').disabled = true;document.getElementById('sr').disabled = true;document.getElementById('sc').disabled = true;
            player++;
            document.getElementById('player').innerHTML = player
        },1500)
    }
    else if(document.getElementById('bong10').style.display = "block"  && random==2){
        setTimeout(function(){
            document.getElementById('result').innerHTML = "VÀO"
            document.getElementById('conti').style.display = "block"
            document.getElementById('sl').disabled = true;document.getElementById('sr').disabled = true;document.getElementById('sc').disabled = true;
            player++;
            document.getElementById('player').innerHTML = player
        },1500)
    }
    
}
function continiu(){
    document.getElementById('img-left').style.display = "none"
    document.getElementById('img-right').style.display = "none"
    document.getElementById('bong1').style.display = "none"
    document.getElementById('bong10').style.display = "none"
    document.getElementById('bong4').style.display = "none"
    document.getElementById('img-center').style.display = "block"
    document.getElementById('bong19').style.display = "block"
    document.getElementById('sl').disabled = false;
    document.getElementById('sc').disabled = false;
    document.getElementById('sr').disabled = false;
}