function change(x){
    var arr =["red","blue","yellow","green","black","pink"]
    var s = 0 + Math.round(5*Math.random());
    choice = x;
    if(choice == s){
        document.getElementById('result').innerHTML = "Bạn đã đoán đúng "
    }
    else{
        document.getElementById('result').innerHTML = "Chúc bạn may mắn lần sau"
    }
    
    if(s==0){
        document.getElementById('none').style.backgroundColor = "red";
    }
    else if(s==1){
        document.getElementById('none').style.backgroundColor = "blue";
    }
    else if(s==2){
        document.getElementById('none').style.backgroundColor = "yellow";
    }
    else if(s==3){
        document.getElementById('none').style.backgroundColor = "green";
    }
    else if(s==4){
        document.getElementById('none').style.backgroundColor = "black";
    }
    else if(s==5){
        document.getElementById('none').style.backgroundColor = "pink";
    }
    
}
