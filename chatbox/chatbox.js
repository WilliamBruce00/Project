import data from './database.js';
var count = 0;
var chat = document.querySelector('.chat')
var text = document.querySelectorAll('input');
var s = document.querySelector('.switch');
var load = "bot đang soạn tin....";
text[1].disabled = false

function submitE(){
    text[0].value.toLowerCase();
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    if(text[0].value == ""){
        text[1].disabled = false;
    }
    else{
        var user = document.createElement('article');
        var content = document.createTextNode(text[0].value);
        var timeM = document.createTextNode(h + ":" + m );
        var p = document.createElement('p')
        p.appendChild(timeM)
        user.appendChild(content)                
        user.appendChild(p)
        chat.appendChild(user)
        function tinh(text = ""){
            var x =  user.childNodes[0].textContent.replace('"',"");
            var x = x.replace("x","*")
            for(var i =0;i<x.length;i++){
                if(x[i] == Number(x[i]) || x[i] == "-" || x[i] == "*" || x[i] == "+"){
                    text += x[i];
                    
                }
            }
            return eval(text)
        }
            
        if(user.childNodes[0].length == 3 || user.childNodes[0].length == 4 || user.childNodes[0].length == 2 || user.childNodes[0].length == 1){
            user.style.marginLeft = "850px"
            user.style.width = "50px"
        }
        else if(user.childNodes[0].length == 5){
            user.style.width = "60px"
            user.style.marginLeft = "840px"
        }
        else if(user.childNodes[0].length == 6){
            user.style.width = "60px"
            user.style.marginLeft = "840px"
        }
        else if(user.childNodes[0].length == 7){
            user.style.width = "70px"
            user.style.marginLeft = "830px"
        }
        else if(user.childNodes[0].length == 8){
            user.style.width = "80px"
            user.style.marginLeft = "820px"
        }
        else if(user.childNodes[0].length == 9){
            user.style.width = "90px"
            user.style.marginLeft = "810px"
        }
        else if(user.childNodes[0].length == 10){
            user.style.width = "100px"
            user.style.marginLeft = "800px"
        }
        else if(user.childNodes[0].length == 11){
            user.style.width = "110px"
            user.style.marginLeft = "790px"
        }
        else if(user.childNodes[0].length == 12 || user.childNodes[0].length == 13){
            user.style.width = "130px"
            user.style.marginLeft = "770px"
        }
        else if(user.childNodes[0].length == 14 || user.childNodes[0].length == 15){
            user.style.width = "140px"
            user.style.marginLeft = "760px"
        }
        else if(user.childNodes[0].length == 16 || user.childNodes[0].length == 17 || user.childNodes[0].length == 18){
            user.style.width = "170px"
            user.style.marginLeft = "730px"
        }
        else if(user.childNodes[0].length == 19){
            user.style.width = "180px"
            user.style.marginLeft = "720px"
        }
        else if(user.childNodes[0].length == 20 || user.childNodes[0].length == 21 || user.childNodes[0].length == 22 ){
            user.style.width = "210px"
            user.style.marginLeft = "690px"
        }
        else if(user.childNodes[0].length == 23 || user.childNodes[0].length == 24){
            user.style.width = "230px"
            user.style.marginLeft = "670px"
        }    
        else if(user.childNodes[0].length == 25 || user.childNodes[0].length == 26){
            user.style.width = "250px"
            user.style.marginLeft = "650px"
        }
        else if(user.childNodes[0].length == 27 || user.childNodes[0].length == 28){
            user.style.width = "270px"
            user.style.marginLeft = "630px"
        }
        else if(user.childNodes[0].length == 29 || user.childNodes[0].length == 30){
            user.style.width = "290px"
            user.style.marginLeft = "610px"
        }  
        else if(user.childNodes[0].length == 31 || user.childNodes[0].length == 32){
            user.style.width = "310px"
            user.style.marginLeft = "590px"
        }  
        else if(user.childNodes[0].length == 33 || user.childNodes[0].length == 34){
            user.style.width = "330px"
            user.style.marginLeft = "570px"
        }   
        else if(user.childNodes[0].length == 35 || user.childNodes[0].length == 36){
            user.style.width = "350px"
            user.style.marginLeft = "550px"
        }
        else if(user.childNodes[0].length == 37 || user.childNodes[0].length == 38){
            user.style.width = "370px"
            user.style.marginLeft = "530px"
        }
        else if(user.childNodes[0].length == 39 || user.childNodes[0].length == 40){
            user.style.width = "390px"
            user.style.marginLeft = "510px"
        }
        else if(user.childNodes[0].length == 41 || user.childNodes[0].length == 42){
            user.style.width = "410px"
            user.style.marginLeft = "490px"
        }
        else if(user.childNodes[0].length == 43 || user.childNodes[0].length == 44){
            user.style.width = "430px"
            user.style.marginLeft = "470px"
        }
        else if(user.childNodes[0].length == 45 || user.childNodes[0].length == 46){
            user.style.width = "450px"
            user.style.marginLeft = "450px"
        }
        else if(user.childNodes[0].length == 47 || user.childNodes[0].length == 48){
            user.style.width = "470px"
            user.style.marginLeft = "430px"
        }
        else if(user.childNodes[0].length == 49 || user.childNodes[0].length == 50){
            user.style.width = "490px"
            user.style.marginLeft = "410px"
        }
        else if(user.childNodes[0].length == 51 || user.childNodes[0].length == 52){
            user.style.width = "510px"
            user.style.marginLeft = "390px"
        }
        else if(user.childNodes[0].length == 53 || user.childNodes[0].length == 54){
            user.style.width = "530px"
            user.style.marginLeft = "370px"
        }
        else if(user.childNodes[0].length == 55 || user.childNodes[0].length == 56){
            user.style.width = "550px"
            user.style.marginLeft = "350px"
        }
        else if(user.childNodes[0].length == 57 || user.childNodes[0].length == 58){
            user.style.width = "570px"
            user.style.marginLeft = "330px"
        }
        else if(user.childNodes[0].length == 59 || user.childNodes[0].length == 60){
            user.style.width = "590px"
            user.style.marginLeft = "310px"
        }
        else if(user.childNodes[0].length == 61 || user.childNodes[0].length == 62){
            user.style.width = "610px"
            user.style.marginLeft = "290px"
        }
        else if(user.childNodes[0].length > 62){
            user.style.width = "630px"
            user.style.marginLeft = "270px"
        }
        
        if(text[0].value.toLowerCase().match('xin chào')){    
            var bot = document.createElement('aside')
            var content = document.createTextNode(load)
            bot.appendChild(content)                
            chat.appendChild(bot)
            bot.style.color = "blue"
            bot.style.fontStyle = "italic"
            bot.style.fontSize = "15px"
            setTimeout(function(){
                bot.innerHTML = data.hello
                var p = document.createElement('p')
                var timeM = document.createTextNode(h+":"+m)
                p.appendChild(timeM)
                bot.appendChild(p)
                bot.style.color = "black"
                bot.style.fontStyle = "normal"
                bot.style.fontSize = "19px"  
            },2000)
            text[0].value = null;
        }    
        else if(text[0].value.toLowerCase().match('bạn tên gì')){
            var bot = document.createElement('aside')
            var content = document.createTextNode(load)
            bot.appendChild(content)                
            chat.appendChild(bot)
            bot.style.color = "blue"
            bot.style.fontStyle = "italic"
            bot.style.fontSize = "15px"
            setTimeout(function(){
                bot.innerHTML = data.name
                var p = document.createElement('p')
                var timeM = document.createTextNode(h+":"+m)
                p.appendChild(timeM)
                bot.appendChild(p)
                bot.style.color = "black"
                bot.style.fontStyle = "normal"
                bot.style.fontSize = "19px";
            },2000)
            text[0].value = null;    
        }     
        else if(text[0].value.toLowerCase().match('bao nhiêu tuổi')){
            var bot = document.createElement('aside')
            var content = document.createTextNode(load)
            bot.appendChild(content)                
            chat.appendChild(bot)
            bot.style.color = "blue"
            bot.style.fontStyle = "italic"
            bot.style.fontSize = "15px"
            setTimeout(function(){
                bot.innerHTML = data.age
                var p = document.createElement('p')
                var timeM = document.createTextNode(h+":"+m)
                p.appendChild(timeM)
                bot.appendChild(p)
                bot.style.color = "black"
                bot.style.fontStyle = "normal"
                bot.style.fontSize = "19px";    
            },2000)        
            text[0].value = null;
        }           
            
        else if(text[0].value.toLowerCase().match('do you have any brothers or sisters')){
            var bot = document.createElement('aside')
            var content = document.createTextNode(load)
            bot.appendChild(content)                
            chat.appendChild(bot)
            bot.style.color = "blue"
            bot.style.fontStyle = "italic"
            bot.style.fontSize = "15px"
            setTimeout(function(){
                bot.innerHTML = "I do not have sister or brother."
                var p = document.createElement('p')
                var timeM = document.createTextNode(h+":"+m)
                p.appendChild(timeM)
                bot.appendChild(p)
                bot.style.color = "black"
                bot.style.fontStyle = "normal"
                bot.style.fontSize = "19px";    
            },2000)        
            text[0].value = null;
        }        
             
        else if(text[0].value.toLowerCase().match('giúp')){
            var bot = document.createElement('aside')
            var content = document.createTextNode(load)
            bot.appendChild(content)                
            chat.appendChild(bot)
            bot.style.color = "blue"
            bot.style.fontStyle = "italic"
            bot.style.fontSize = "15px"
            setTimeout(function(){
                bot.innerHTML = data.help
                var p = document.createElement('p')
                var timeM = document.createTextNode(h+":"+m)
                p.appendChild(timeM)
                bot.appendChild(p)
                bot.style.color = "black"
                bot.style.fontStyle = "normal"
                bot.style.fontSize = "19px";
            },2000)        
            text[0].value = null;   
        } 
        else if(text[0].value.toLowerCase().match('bài văn 200 chữ về tình mẫu tử')){
            var bot = document.createElement('aside')
            var content = document.createTextNode(load)
            bot.appendChild(content)                
            chat.appendChild(bot)
            bot.style.color = "blue"
            bot.style.fontStyle = "italic"
            bot.style.fontSize = "15px"
           
            setTimeout(function(){
                bot.style.width = "610px"
                bot.innerHTML = data.topic
                var p = document.createElement('p')
                var timeM = document.createTextNode(h+":"+m)
                p.appendChild(timeM)
                bot.appendChild(p)
                bot.style.color = "black"
                bot.style.fontStyle = "normal"
                bot.style.fontSize = "19px";
            },2000)        
            text[0].value = null;  
             
        } 
        else if(text[0].value.toLowerCase().match('ronaldo là ai') || text[0].value.toLowerCase().match('biết ronaldo không')){
            var bot = document.createElement('aside')
            var content = document.createTextNode(load)
            bot.appendChild(content)                
            chat.appendChild(bot)
            bot.style.color = "blue"
            bot.style.fontStyle = "italic"
            bot.style.fontSize = "15px"
           
            setTimeout(function(){
                bot.style.width = "610px"
                bot.innerHTML = data.cr7
                var p = document.createElement('p')
                var timeM = document.createTextNode(h+":"+m)
                p.appendChild(timeM)
                bot.appendChild(p)
                bot.style.color = "black"
                bot.style.fontStyle = "normal"
                bot.style.fontSize = "19px";
            },2000)        
            text[0].value = null;  
             
        } 
        else if(text[0].value.toLowerCase().match('ngày mấy')){
            var bot = document.createElement('aside')
            var content = document.createTextNode(load)
            bot.appendChild(content)                
            chat.appendChild(bot)
            bot.style.color = "blue"
            bot.style.fontStyle = "italic"
            bot.style.fontSize = "15px"
           
            setTimeout(function(){
                bot.style.width = "300px"
                bot.innerHTML = data.day();
                var p = document.createElement('p')
                var timeM = document.createTextNode(h+":"+m)
                p.appendChild(timeM)
                bot.appendChild(p)
                bot.style.color = "black"
                bot.style.fontStyle = "normal"
                bot.style.fontSize = "19px";
            },2000)        
            text[0].value = null;  
             
        }
        else if(text[0].value.toLowerCase().match('tháng mấy')){
            var bot = document.createElement('aside')
            var content = document.createTextNode(load)
            bot.appendChild(content)                
            chat.appendChild(bot)
            bot.style.color = "blue"
            bot.style.fontStyle = "italic"
            bot.style.fontSize = "15px"
           
            setTimeout(function(){
                bot.style.width = "260px"
                bot.innerHTML = data.month();
                var p = document.createElement('p')
                var timeM = document.createTextNode(h+":"+m)
                p.appendChild(timeM)
                bot.appendChild(p)
                bot.style.color = "black"
                bot.style.fontStyle = "normal"
                bot.style.fontSize = "19px";
            },2000)        
            text[0].value = null;  
             
        }
        else if(text[0].value.toLowerCase().match('năm mấy')){
            var bot = document.createElement('aside')
            var content = document.createTextNode(load)
            bot.appendChild(content)                
            chat.appendChild(bot)
            bot.style.color = "blue"
            bot.style.fontStyle = "italic"
            bot.style.fontSize = "15px"
           
            setTimeout(function(){
                bot.style.width = "230px"
                bot.innerHTML = data.year();
                var p = document.createElement('p')
                var timeM = document.createTextNode(h+":"+m)
                p.appendChild(timeM)
                bot.appendChild(p)
                bot.style.color = "black"
                bot.style.fontStyle = "normal"
                bot.style.fontSize = "19px";
            },2000)        
            text[0].value = null;  
             
        } 
        else if(text[0].value.toLowerCase().match("-") || text[0].value.toLowerCase().match("x")){
            var bot = document.createElement('aside')
            var content = document.createTextNode(load)
            bot.appendChild(content)                
            chat.appendChild(bot)
            bot.style.color = "blue"
            bot.style.fontStyle = "italic"
            bot.style.fontSize = "15px"
           
            setTimeout(function(){
                bot.style.width = "230px"
                bot.innerHTML = tinh();
                var p = document.createElement('p')
                var timeM = document.createTextNode(h+":"+m)
                p.appendChild(timeM)
                bot.appendChild(p)
                bot.style.color = "black"
                bot.style.fontStyle = "normal"
                bot.style.fontSize = "19px";
            },2000)        
            text[0].value = null;  
             
        } 
        else{
            var bot = document.createElement('aside')
            var content = document.createTextNode("Sorry, I don't know you mean")
            bot.appendChild(content)                
            chat.appendChild(bot)
            bot.style.color = "blue"
            bot.style.fontStyle = "italic"
            bot.style.fontSize = "15px"
            text[0].value =null
        }       

            
                   
    }    
    
}                      


                
                
                
            
            
              
                
             
            
               
                
               
            
        
        
       
document.onkeyup = (e) =>{
    if(e.key == "Enter"){
        submitE();
    }
        
} 
s.onclick = () =>{
    count++;
    if(count%2!=0){
        document.querySelector('.container').style.backgroundColor = "black";document.body.style.backgroundColor = "#18181b"
        s.style.left = "45px"
    }
    else{
        document.querySelector('.container').style.backgroundColor = "#DCDCDC";document.body.style.backgroundColor = "white"
        s.style.left = "10px"
    }
}
 
var bot = document.createElement('aside')
var content = document.createTextNode("Xin chào bạn, tôi là robot, tôi có thể giúp gì cho bạn không")
bot.appendChild(content)                
chat.appendChild(bot)
bot.style.color = "black"
bot.style.fontStyle = "normal"
bot.style.fontSize = "20px"
bot.style.width = "400px"


