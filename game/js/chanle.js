var money = 0;
var money2 = 0;
function random1(){
    var random1 = 10 + Math.round(99*Math.random());
    document.getElementById('random').innerHTML = random1;
    if(document.getElementById('inputext').value == 0 ){
        alert("Vui lòng nhập tiền cược")
        
    }
    else if(document.getElementById('inputext').value > parseInt(document.getElementById('have').innerHTML)){
        alert("Số tiền cược phải bé hơn số tiền đang có")
    }
    
    else{  
        if(random1%2==0){
        
            document.getElementById('result').innerHTML = "Bạn Thắng";
                    
            var money = parseInt(document.getElementById('have').innerHTML) + document.getElementById('inputext').value*1;
            document.getElementById('have').innerHTML = money;
            alert("Thắng:"+document.getElementById('inputext').value*1);
            
        }
        else{
            document.getElementById('result').innerHTML ="Bạn Thua"
            var money = parseInt(document.getElementById('have').innerHTML) - document.getElementById('inputext').value*1;
            document.getElementById('have').innerHTML = money;
            alert("Thua:"+document.getElementById('inputext').value*1);
        }
    }
}
function random2(){
    var random2 = 10 + Math.round(99*Math.random());
    document.getElementById('random').innerHTML = random2;
    
    if(document.getElementById('inputext').value == 0){
        alert("Vui lòng nhập tiền cược")
    }
    else if(document.getElementById('inputext').value > parseInt(document.getElementById('have').innerHTML)){
        alert("Số tiền cược phải bé hơn số tiền đang có")
    }
    else{  
        if(random2%2!=0){
        
            document.getElementById('result').innerHTML = "Bạn Thắng";
            var money = parseInt(document.getElementById('have').innerHTML) + document.getElementById('inputext').value*1;
            document.getElementById('have').innerHTML = money;
            alert("Thắng:"+document.getElementById('inputext').value*1);
        }
        else{
            document.getElementById('result').innerHTML ="Bạn Thua"
            var money = parseInt(document.getElementById('have').innerHTML) - document.getElementById('inputext').value*1;
            document.getElementById('have').innerHTML = money;
            alert("Thua:"+document.getElementById('inputext').value*1);
        }
    
    }
   
}