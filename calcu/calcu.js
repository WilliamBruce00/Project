var output = document.querySelector('.output');
var value = document.querySelectorAll('.value');
var text = "";
value.forEach(item =>{
    item.onclick = (e) =>{
        if(e.target.getAttribute("getValue") != "=" && e.target.getAttribute("getValue") != "AC" && e.target.getAttribute("getValue") != "DE"){
            output.innerHTML += e.target.innerHTML;
            text += e.target.getAttribute("getValue");
            text = text.replace(e.target.innerHTML,e.target.innerHTML) + ")"
            text = text.replace(")","");
        } 
        if(e.target.getAttribute("getValue") == "Math.pow()"){
            output.innerHTML = output.innerHTML.sup();
            text = `${"Math.pow("+output.innerHTML+",2)"}`
            text = text.replace("x<sup>2</sup></sup>","")
            text = text.replace("<sup>","");
        }
        if(e.target.getAttribute("getValue") == "="){
            output.innerHTML = eval(text);
            text = output.innerHTML
        }    
        if(e.target.getAttribute("getValue") == "AC"){
            location.reload();
        }
        if(e.target.getAttribute("getValue") == "DE"){
            text = output.innerHTML.substr(0,output.innerHTML.length-1)
            output.innerHTML = text
        }  
        console.log(text)
    }            
})               
        
           
        
        
            
        
           
           
        
    
        
    

        
        

