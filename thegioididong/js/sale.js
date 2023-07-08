var hour = document.querySelector('.hour');
var minutes = document.querySelector('.minutes');
var second = document.querySelector('.second');
var time = new Date("Apr 30 2023 23:00:00");

setInterval(() =>{
    var now = new Date();
    var diff = time - now;
    var h = Math.floor(diff / 1000 / 60 / 60) % 24;
    var m = Math.floor(diff / 1000 / 60) % 60;
    var s = Math.floor(diff / 1000) % 60;
    hour.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    second.innerHTML = s < 10 ? '0' + s : s;
},1000)