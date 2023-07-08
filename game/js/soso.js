function random(){
    
    if(document.getElementById('so1').value && document.getElementById('so2').value && document.getElementById('so3').value && document.getElementById('so4').value != null){
        var a = 0 + Math.round(9*Math.random());console.log(a)
        var b = 0 + Math.round(9*Math.random());console.log(b)
        var c = 0 + Math.round(9*Math.random());console.log(c)
        var d = 0 + Math.round(9*Math.random());console.log(d)
     
        document.getElementById('demo').innerHTML = a;
        document.getElementById('demo2').innerHTML = b;
        document.getElementById('demo3').innerHTML = c;
        document.getElementById('demo4').innerHTML = d;
    }
    else{
        alert("Vui lòng chọn 6 số từ 0 đến 9 để bắt đầu trò chơi");
    }
    
    var kq ="";
    if( a==document.getElementById('so1').value || a ==document.getElementById('so2').value || a == document.getElementById('so3').value || a==document.getElementById('so4').value ||
        b==document.getElementById('so1').value || b ==document.getElementById('so2').value || b == document.getElementById('so3').value || b==document.getElementById('so4').value ||
        c==document.getElementById('so1').value || c ==document.getElementById('so2').value || c == document.getElementById('so3').value || c==document.getElementById('so4').value ||
        d==document.getElementById('so1').value || d ==document.getElementById('so2').value || d == document.getElementById('so3').value || d==document.getElementById('so4').value){
        kq = "Chúc mừng bạn đã trúng giải ba 1 con số";
        
       
    }
    if((a==document.getElementById('so1').value && b==document.getElementById('so2').value)||
       (a==document.getElementById('so1').value && b==document.getElementById('so3').value)||
       (a==document.getElementById('so1').value && b==document.getElementById('so4').value)||
       (b==document.getElementById('so2').value && a==document.getElementById('so1').value)||
       (b==document.getElementById('so2').value && c==document.getElementById('so3').value)||
       (b==document.getElementById('so2').value && d==document.getElementById('so4').value)||
       (c==document.getElementById('so3').value && a==document.getElementById('so1').value)||
       (c==document.getElementById('so3').value && b==document.getElementById('so2').value)||
       (c==document.getElementById('so3').value && d==document.getElementById('so4').value)||
       (d==document.getElementById('so4').value && a==document.getElementById('so1').value)||
       (d==document.getElementById('so4').value && b==document.getElementById('so2').value)||
       (d==document.getElementById('so4').value && c==document.getElementById('so3').value)){
        kq = "Chúc mừng bạn đã trúng giải nhì 2 con số"
    }
    if((a==document.getElementById('so1').value && b==document.getElementById('so2').value && c==document.getElementById('so3').value)||
       (a==document.getElementById('so1').value && c==document.getElementById('so3').value && d==document.getElementById('so4').value)||
       (b==document.getElementById('so2').value && a==document.getElementById('so1').value && c==document.getElementById('so3').value)||
       (b==document.getElementById('so2').value && c==document.getElementById('so3').value && d==document.getElementById('so4').value)||
       (c==document.getElementById('so3').value && d==document.getElementById('so4').value && a==document.getElementById('so1').value)||
       (c==document.getElementById('so3').value && a==document.getElementById('so1').value && b==document.getElementById('so2').value)||
       (d==document.getElementById('so4').value && a==document.getElementById('so1').value && b==document.getElementById('so2').value)||
       (d==document.getElementById('so4').value && b==document.getElementById('so2').value && c==document.getElementById('so3').value))  {
        kq = "Chúc mừng bạn đã trúng giải nhất 3 con số"
    }
    if((a==document.getElementById('so1').value && b==document.getElementById('so2').value && c==document.getElementById('so3').value && d==document.getElementById('so4').value)){
        kq = "Chúc mừng bạn đã trúng giải đặc biệt 4 con số"
    }
    if(a!=document.getElementById('so1').value && b!=document.getElementById('so2').value && c!=document.getElementById('so3').value && d!=document.getElementById('so4').value){
        kq = "Chúc bạn may mắn lần sau"
    }      
        
    
    return alert(kq)
    
    
}