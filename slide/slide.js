var i = document.querySelectorAll('i');
var slide = document.querySelector('.slides');
var count = 0;
i[1].onclick = () =>{
    for(var i = 1;i<=4;i++){
        count = count + 100;
        slide.style.left = `${"-"+count+"%"}`
        if(count == 400){
            slide.style.left = "0%"
            count = 0;
        }
        return
    }
}
i[0].onclick = () =>{
    for(var i = 1;i<=4;i++){
        count = count - 100;
        slide.style.left = `${"-"+count+"%"}`
        if(count == -100){
            slide.style.left = "-300%"
            count = 300;
        }
        return
    }
}
setInterval(() =>{
    for(var i = 1;i<=4;i++){
        count = count + 100;
        slide.style.left = `${"-"+count+"%"}`
        if(count == 400){
            slide.style.left = "0%"
            count = 0;
        }
        return
    }
},4000)