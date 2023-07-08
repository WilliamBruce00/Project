var btn = document.querySelectorAll("i");
var slide = document.querySelector('.slides-content');
var count = 0;
btn[1].onclick = () =>{
    count++;
    console.log(count)
    if(count == 1){
        slide.style.left = "-100%"
    }
    else if(count == 2){
        slide.style.left = "-200%"
    }
    else if(count == 3){
        slide.style.left = "-300%"
    }
    else if(count == 4){
        count = 0;
        slide.style.left = "0%"
    }
}
btn[0].onclick = () =>{
    count--;
    console.log(count)
    if(count == 2){
        slide.style.left = "-200%"
    }    
    else if(count == 1){
        slide.style.left = "-100%"
    }  
    else if(count == -1){
        slide.style.left = "-300%"
        count = 3;
    }
    else if(count == 0){
        slide.style.left = "0%"
    }
}
setInterval(() =>{
    count++;
    if(count == 1){
        slide.style.left = "-100%"
    }
    else if(count == 2){
        slide.style.left = "-200%"
    }
    else if(count == 3){
        slide.style.left = "-300%"
    }
    else if(count == 4){
        count = 0;
        slide.style.left = "0%"
    }
},5000) 
