var container = document.querySelector('.container')
var imgs = document.getElementsByTagName('img')
var prod = document.getElementsByClassName('prod');
var turn = parseInt(document.getElementById('turn').innerHTML);console.log(turn)
for (var i = container.children.length;i>=0;i--){
    container.appendChild(container.children[Math.floor(Math.random()*i)]);
}
function opTion(x){
   
        
    
        if(x==0){
            turnH();
            if(document.getElementById('turn').innerHTML < 0){
                alert("Hết lượt")
                document.getElementById('turn').innerHTML = 0;
                document.getElementById('prod1').disabled = true;
            } 
            else{
                alert("Chúc mừng bạn 1 iPhone 14")
                document.getElementById('hinh1').style.display = "none"
                document.getElementById('qua1').style.display = "block"
                document.getElementById('prod1').disabled = true;
            }
           
        }    
        else if(x==1){
            turnH();
            if(document.getElementById('turn').innerHTML < 0){
                alert("Hết lượt");
                document.getElementById('turn').innerHTML = 0;
                document.getElementById('prod2').disabled = true;
            }
            else{
                alert("Chúc mừng bạn 1 chiếc laptop")
                document.getElementById('hinh2').style.display = "none";
                document.getElementById('qua2').style.display = "block";
                document.getElementById('prod2').disabled = true;
            }
        }    
        else if(x==2){
            turnH();
            if(document.getElementById('turn').innerHTML < 0 ){
                alert("Hết lượt")
                document.getElementById('turn').innerHTML = 0;
                document.getElementById('prod3').disabled = true;
            }
            else{
                alert("Chúc bạn may mắn lần sau");
                document.getElementById('hinh3').style.display = "none";
                document.getElementById('prod3').disabled = true;
            }
        }
        else if(x==3){
            turnH();
            if(document.getElementById('turn').innerHTML < 0){
                alert("Hết lượt")
                document.getElementById('turn').innerHTML = 0;
                document.getElementById('prod4').disabled = true;
            }
            else{
                alert('Chúc bạn may mắn lần sau');
                document.getElementById('hinh4').style.display = "none";
                document.getElementById('prod4').disabled = true;
            }
        }
        else if(x==4){
            turnH();
            if(document.getElementById('turn').innerHTML < 0){
                alert("Hết lượt")
                document.getElementById('turn').innerHTML = 0;
                document.getElementById('prod5').disabled = true;
            }
            else{
                alert("Chúc bạn may mắn lần sau");
                document.getElementById('hinh5').style.display = "none"
                document.getElementById('prod5').disabled = true;
            }
        }
        else if(x==5){
            turnH();
            if(document.getElementById('turn').innerHTML < 0){
                alert("Hết lượt")
                document.getElementById('turn').innerHTML = 0;
                document.getElementById('prod6').disabled = true;
            }
            else{
                alert("Chúc mừng bạn 1 chiếc máy giặt");
                document.getElementById('hinh6').style.display = "none";
                document.getElementById('qua6').style.display = "block";
                document.getElementById('prod6').disabled = true;
            }
        }
        else if(x==6){
            turnH();
            if(document.getElementById('turn').innerHTML < 0){
                alert("Hết lượt")
                document.getElementById('turn').innerHTML = 0;
                document.getElementById('prod7').disabled = true;
            }
            else{
                alert("Chúc mừng bạn 1 chiếc máy lạnh")
                document.getElementById('hinh7').style.display = "none";
                document.getElementById('qua7').style.display = "block";
                document.getElementById('prod7').disabled =  true;
            }
            
        }
        else if(x==7){
            turnH();
            if(document.getElementById('turn').innerHTML < 0){
                alert("Hết lượt")
                document.getElementById('turn').innerHTML = 0;
                document.getElementById('prod8').disabled = true;
            }
            else{
                alert("Chúc bạn may mắn lần sau");
                document.getElementById('hinh8').style.display = "none";
                document.getElementById('prod8').disabled = true;
            }
        }
        else if(x==8){
            turnH();
            if(document.getElementById('turn').innerHTML < 0 ){
                alert("Hết lượt")
                document.getElementById('turn').innerHTML = 0;
                document.getElementById('prod9').disabled = true;
            }
            else{
                alert("Chúc bạn may mắn lần sau");
                document.getElementById('hinh9').style.display = "none";
                document.getElementById('prod9').disabled = true;
            }
        }
    
    
    
        
    
}
function turnH(){
    turn = turn - 1;
    document.getElementById('turn').innerHTML = turn;
}    

