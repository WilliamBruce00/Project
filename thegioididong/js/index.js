var is = document.querySelectorAll('i');
var img = document.querySelector('.images');
var arrImg = [
    "<img src = 'img/1200x44-1200x44-15.webp'>",
    "<img src = 'img/big-1200-44-1200x44.webp'>", 
    "<img src = 'img/toppar-1200-44-1200x44.webp'>"
];
var cur = 0;
is[1].onclick = () =>{
    cur++;
    console.log(cur)
    if(cur <= 2){
        img.innerHTML = arrImg[cur]
    }
    else if(cur > 2){
        cur = 0;
        img.innerHTML = arrImg[cur]
    }
}
is[0].onclick = () =>{
    cur--;
    console.log(cur)
    if(cur >= 0){
        img.innerHTML = arrImg[cur]
    }
    else if(cur < 0){
        cur = 2
        img.innerHTML = arrImg[cur]
       
    }
}