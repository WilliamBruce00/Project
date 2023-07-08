var btn = document.querySelectorAll('button');
var num = document.querySelectorAll('.number');
var s1 = 0;
var s2 = 0;
var m1 = 0;
var m2 =0;
btn.forEach(item =>{
    item.onclick = (e) =>{
        if(e.target.innerHTML == "start"){
            e.target.innerHTML = "stop"
            item.style.backgroundColor = "red"
            clear = setInterval(watch,100)
        }
        else if(e.target.innerHTML == "stop"){
            e.target.innerHTML = "start"
            item.style.backgroundColor = "green"
            clearInterval(clear)
        }
        else if(e.target.innerHTML == "reset"){
            location.reload();
        }
    }
})

var watch = () =>{
    s1++;
    num[3].innerHTML = s1 == 10 ? s1 = 0 : s1
    if(s1 == 0){
        s2++;
        num[2].innerHTML = s2 == 6 ? s2 = 0 : s2
    }
    if(s1 == 0 && s2 == 0){
        m1++;
        num[1].innerHTML = m1 == 10 ? m1 = 0 : m1
    }
    if(s1 == 0 && s2 == 0 && m1 == 0){
        m2++;
        num[1].innerHTML = m2
    }
}