var object = {
    x: 600,
    y: 0,
    z:100
}
var left 
var bottom = 0;
var fall 
var five = 0;
var four = 0;
var three = 0;
var two = 0;
var one = 0;
var img = document.getElementById('cactus');
var Trex = document.getElementById('Trex');
alert("Bấm chữ b để điều khiển")
function playGame(){
    
    runCactus();
    watch();
    document.getElementById('play').disabled = true;
}    
function watch(){
    setInterval(function(){
        five++;
        document.getElementById('five').innerHTML = five;
        if(five==10){
            five = 0;
            document.getElementById('five').innerHTML = five;
            four++;
            document.getElementById('four').innerHTML = four;
        }
        if(four==6){
            four = 0;
            document.getElementById('four').innerHTML = four;
            three++;
            document.getElementById('three').innerHTML = three;
        }
        if(three==10){
            three = 0;
            document.getElementById('three').innerHTML = three;
            two++;
            document.getElementById('two').innerHTML = two;
        }
        if(two==6){
            two = 0;
            document.getElementById('two').innerHTML = two;
            one++
            document.getElementById('one').innerHTML = one;
        }
    },20)
}    
    
    
    
    

function runCactus(){
    clearCactus = setInterval(function(){
        left = (object.x = object.x - 10) + "px";
        img.style.left = left;
        if(left == 0 + "px"){
            object.x = 600;
        }
        
        document.onkeydown = function(e){
            var up = new Update(0);
            if(up.bottom == 0){
                if(e.key == "b"){
                    clearTrex = setInterval(function(){
                    bottom = (object.y = object.y + 5);
                    Trex.style.bottom = bottom + "px"
                        if(bottom == 160  ){
                            clearInterval(clearTrex)
                            object.y = 0;
                            clearFall = setInterval(function(){
                            fall = (object.z = object.z - 5);
                            Trex.style.bottom = fall + "px";
                                if(fall == 0){
                                    clearInterval(clearFall)
                                    object.z = 100;
                                }
                            
                            },35)
                        }
                    
                    },5)
                }
            }
        }
        
        if(left == 30 +"px" && bottom == 0  ){
            alert("Game Over")
            location.reload();
        } 
        else if(left == 30 + "px" && fall == 0){
            alert("Game Over")
            location.reload();
        }
        else if(left == 50 + "px" && fall == 40 ||
                left == 50 + "px" && fall == 35 ||
                left == 50 + "px" && fall == 30 ||
                left == 50 + "px" && fall == 20 ||
                left == 50 + "px" && fall == 15 ||
                left == 50 + "px" && fall == 10  ){
            alert("Game Over")
            location.reload();
        }
        
    },30)

     
}
function Update(bottom){
    this.bottom = bottom
}