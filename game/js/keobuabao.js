var c = null;
var player = 0;
var cpu = 0;
function getValue(x){
    
    var arr = ["Rock","Scissors","Paper"]
    
    c = x ;                               //| c là người chơi chọn
    s = Math.floor(Math.random()*3);      //| s la máy tính chọn
    console.log(s)
    
    if(s==0){                                   // Xét trường hợp nếu máy chọn = 0(Rock)
        if(s==c){                               // nguoi chon c[0] = may chon s[0] => Hoa Rock
            document.getElementById('ketqua').innerHTML = "Hòa rồi!";
        }
        else if(c==1 && s<c){                   // nguoi chon c[1] = may chon s[0]  => Thua
            document.getElementById('ketqua').innerHTML = "Bạn Thua";
            setTimeout(function(){
                cpu++;
                document.getElementById('cpu').innerHTML = cpu;
            })
        }
        else if(c==2 && s<c){                   // nguoi chon c[2] = may chon s[0]  => Win
            document.getElementById('ketqua').innerHTML = "Bạn Thắng";
            setTimeout(function(){
                player++;
                document.getElementById('player').innerHTML = player;
            },100)
        }
    }                                           //-------------------------------------------------------
    else if(s==1){                              // Xét trường hợp nếu máy chọn = 1[Scissors]
        if(s==c){                               // nguoi chon c[1] = may chon s[1] => Hoa Scissors
            document.getElementById('ketqua').innerHTML = "Hòa rồi!"
        }
        else if(s>c){                           // nguoi chon c[0] = may chon s[1] => Win 
            document.getElementById('ketqua').innerHTML = "Bạn Thắng"
            setTimeout(function(){
                player++;
                document.getElementById('player').innerHTML = player;
            },100)
        }
        else if(c==2 && c>s){                   // nguoi chon c[2] = may chon s[1] => Thua
            document.getElementById('ketqua').innerHTML = "Bạn Thua"
            setTimeout(function(){
                cpu++;
                document.getElementById('cpu').innerHTML = cpu;
            })
        }
    }                                           //----------------------------------------------------------
    else if(s==2){                              // Xét trường hợp nếu máy chọn = 2[Paper]
        if(s==c){                               // nguoi chon c[2] = may chon s[2] => Hoa Paper
            document.getElementById('ketqua').innerHTML = "Hòa rồi!"
        }
        else if(c==1 && c<s){                   // nguoi chon c[1] = may chon s[2] => Win
            document.getElementById('ketqua').innerHTML = "Bạn Thắng"
            setTimeout(function(){
                player++;
                document.getElementById('player').innerHTML = player;
            },100)
        }
        else if(c==0 && c<s){                   // nguoi chon c[0] = may chon s[2] => Thua
            document.getElementById('ketqua').innerHTML = "Bạn Thua"
            setTimeout(function(){
                cpu++;
                document.getElementById('cpu').innerHTML = cpu;
            })
        }
    }
    
    // Chuyen may kieu so arr[0,1,2] sang ky tu abc-z [rock,scissor,paper]
    /* if(s==0){
        var s = document.createElement('IMG')
        s.setAttribute('src','img/Untitled-removebg-preview-removebg-preview.png')
        s.setAttribute('width','180px')
        s.setAttribute('height','180px')
        document.getElementById('hinh').append(s)
        
    }
    else if(s==1){
        var s = document.createElement('IMG')
        s.setAttribute('src','img/keo-removebg-preview-removebg-preview.png')
        s.setAttribute('width','180px')
        s.setAttribute('height','180px')
        document.getElementById('hinh').append(s)
        
    }
    else if(s==2){
        var s = document.createElement('IMG')
        s.setAttribute('src','img/bao-removebg-preview-removebg-preview.png')
        s.setAttribute('width','180px')
        s.setAttribute('height','180px')
        document.getElementById('hinh').append(s)
        
    } */
    //----------------------------------------------------------------
    
    
    if(s==0){
        document.getElementById('bao').style.display = "block"
        document.getElementById('keo').style.display = "none"
        document.getElementById('giay').style.display = "none"
    }
    else if(s==1){
        document.getElementById('keo').style.display = "block";
        document.getElementById('bao').style.display = "none"
        document.getElementById('giay').style.display = "none"
    }
    else if(s==2){
        document.getElementById('giay').style.display = "block"
        document.getElementById('keo').style.display = "none";
        document.getElementById('bao').style.display = "none";
    }
    
   
   
    
    
     
     
      
     
          
      
    
        
    
        
    
   
    
           
    
}
   
   
    //----------------------------------------------------------------
