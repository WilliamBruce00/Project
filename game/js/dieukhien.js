    // ô2 [120 150 180]
    // ô1 [0 30]
    // ô3 [210 240 270]
    // ô4 [360 390 420]
    // ô5 [510 540]
    var second = 10;
    var miu = 5;
    var hour = 2;
    
    var move 
    var one;
    var two;
    var three;
    var four;
    var five;
    var object = {
        x: 300,
        y:340,
        banana: 0,
        apple: 0,
        grape: 0,
        orange: 0,
        mango: 0
    }
    var point = 0;
    var figure = document.getElementById('figure');
    var banana = document.getElementById('fruit_One');
    var apple = document.getElementById('fruit_Two');
    var grape = document.getElementById('fruit_Three');
    var orange = document.getElementById('fruit_Four');
    var mango = document.getElementById('fruit_Five');
    var points = document.getElementById('point');
    var mot = document.getElementById('one');
    var hai = document.getElementById('two');
    var ba = document.getElementById('three');
    var bon = document.getElementById('four');
    function playGame(){
        
        clearRandom = setInterval(function(){
            var randomFruit = Math.floor(Math.random()*5);
            console.log(randomFruit)
            if(randomFruit == 1){
                banana.style.display = "block";
                clearOne = setInterval(function(){  
                    if(one == 650){
                        object.banana = 0;
                        banana.style.top = object.banana + "px"
                        
                        clearInterval(clearOne)
                    }   
                    one = (object.banana = object.banana + 10);
                    banana.style.top = one + "px"    
                    var up = new Update();
                    if(up.move == 0 && one == 650 ||
                       up.move == 30 && one == 650 ){
                        point = point + 60;
                        points.innerHTML = point;
                    }
                },200)        
            }           
            else if(randomFruit == 0){
                apple.style.display = "block"
                clearTwo = setInterval(function(){ 
                    if(two == 650){
                        object.apple = 0;
                        apple.style.top = object.apple + "px"
                        clearInterval(clearTwo);
                    }    
                    two = (object.apple = object.apple + 10);
                    apple.style.top = two + "px"
                    var up = new Update();
                    if(up.move == 120 && two == 650 ||
                       up.move == 150 && two == 650 ||
                       up.move == 180 && two == 650){
                        point = point + 40;
                        points.innerHTML = point;
                    }
                },200)    
            }        
            else if(randomFruit == 2){
                grape.style.display = "block"
                clearThree = setInterval(function(){
                    if(three == 650){
                        object.grape = 0;
                        grape.style.top = object.grape + "px"
                        clearInterval(clearThree)
                    }
                    three = (object.grape = object.grape + 10);
                    grape.style.top = three + "px"
                    var up = new Update();
                    if(up.move == 210 && three == 650 ||
                       up.move == 240 && three == 650 ||
                       up.move == 270 && three == 650 ){
                        point = point + 100;
                        points.innerHTML = point;
                    }
                },200)
            }
            else if(randomFruit == 3){
                orange.style.display = "block";
                clearFour = setInterval(function(){
                    if(four == 650){
                        object.orange = 0;
                        orange.style.top = object.orange + "px"
                        clearInterval(clearFour)
                    }
                    four = (object.orange = object.orange + 10);
                    orange.style.top = four + "px"
                    var up = new Update();
                    if(up.move == 450 && four == 650 ||
                       up.move == 360 && four == 650 ||
                       up.move == 390 && four == 650 ||
                       up.move == 420 && four == 650){
                        point = point + 90;
                        points.innerHTML = point;
                    }
                },200)
            }        
            else if(randomFruit == 4){
                mango.style.display = "block";
                clearFive = setInterval(function(){
                    if(five == 650){
                        object.mango = 0;
                        mango.style.top = object.mango + "px"
                        clearInterval(clearFive)
                    }
                    five = (object.mango = object.mango + 10)
                    mango.style.top = five + "px"
                    var up = new Update();
                    if(up.move == 510 && five == 650 ||
                       up.move == 540 && five == 650 ){
                        point = point + 40;
                        points.innerHTML = point;
                    }
                },200)
            }   
            
        },6000)
        document.addEventListener('keyup', (e) =>{
            if(e.key == "ArrowLeft"){
                
                if(move == 0 ){
                    figure.style.left = "0px"
                    
                }
                else{
                    move = (object.x = object.x - 30) ;
                    figure.style.left = move + "px";
                }
            }
            
            else if(e.key == "ArrowRight"){
                if(move == 540){
                    figure.style.right = "540px"
                }
                else{
                    move = (object.x = object.x + 30) ;
                    figure.style.left = move + "px"
                }
            }
                      
        })
        watchTime();
        document.getElementById('play').disabled = true;
    } 
    function Update(){
        this.move = move
        this.one = one
        this.two = two
        this.three = three
        this.four = four
        this.five = five
    }
    function watchTime(){
        ba.innerHTML = 5;
        bon.innerHTML = 9;
        hai.innerHTML = 1;
        clearWatch = setInterval(function(){
            second--;
            bon.innerHTML = second;
            
            if(second == -1){
                second = 9;
                bon.innerHTML = second
                miu--;
                ba.innerHTML = miu;
            }
            if(miu == -1){
                miu = 5;
                ba.innerHTML = miu;
                hour = hour - 2;
                hai.innerHTML = hour;
            }
            if(second == 0 && miu == 0 && hour == 0){
                alert("Hết thời gian")
                alert("Điểm của bạn:"+" "+points.innerHTML)
                clearInterval(clearWatch)
                location.reload();
            }
        },1000)
    }    