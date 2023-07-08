var one = document.querySelector('.one');
var two = document.querySelector('.two');
var three = document.querySelector('.three');




setInterval(function(){
    var time = new Date();
    var h = time.getHours() * 30
    var m = time.getMinutes() * 6
    var s = time.getSeconds() * 6
    m = m + 0.1;
    h = h + 0.001666666667;
    s = s + 6
    three.style.transform = `rotate(${s}deg)`
    two.style.transform = `rotate(${m}deg)`
    one.style.transform = `rotate(${(h - 360) + (m/12)}deg)`

},1000) 

