var Arr = new Array();
let q = window.location.search;
let params = new URLSearchParams(q);
var as = document.getElementsByTagName('a');
var num = 0;
var w = 0;
var width;
var x = document.getElementById('number');
var y = document.getElementById('linebar')
for(let p of params){
    p.splice(0,1);
    Arr.push(p.join())
    as[0].innerHTML = Arr[0]
    as[1].innerHTML = "Log Out"
}
console.log(Arr)
if(as[0].innerHTML == Arr[0]){
    as[0].href = ""
}
function logOut(){
    if(as[1].innerHTML == "Log Out"){
        as[1].href = "index.html"
        
    }
}
if(as[0].innerHTML == Arr[0]){
    function naViGi(x){
        if(x==0){
            as[2].href = "keobuabao.html" 
        }
        else if(x==1){
            as[3].href = "soso.html"
        }
        else if(x==2){
            as[4].href = "color.html"
        }
        else if(x==3){
            as[5].href = "chanle.html"
        }
        else if(x==4){
            as[6].href = "ailatrieuphu.html"
        }
        else if(x==5){
            as[7].href = "bongda.html"
        }
        else if(x==6){
            as[8].href = "dapchuot.html"
        }
        else if(x==7){
            as[9].href = "vongquay.html"
        }
        else if(x==8){
            as[10].href = "latbai.html"
        }
        else if(x==9){
            as[11].href = "caro.html"
        }
        else if(x==10){
            as[12].href = "click.html"
        }
        else if(x==11){
            as[13].href = "mayquay.html"
        }
        else if(x==12){
            as[14].href = "khunglong.html"
        }
        else if(x==13){
            as[15].href = "dieukhien.html"
        }
        else if(x==14){
            as[16].href = "nhac.html"
        }
        else if(x==15){
            as[17].href = "hopqua.html"
        }
        else if(x==16){
            as[18].href = "hinh.html"
        }
        else if(x==17){
            as[19].href = "speak.html"
        }
    }
}
