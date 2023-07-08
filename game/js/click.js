var output = document.querySelector('.output')
var message = document.querySelector('.message')
message.textContent = "Press to Start"
const box = document.createElement('div')
const game = {
    timer: 0,
    start: null
};
box.classList.add('box') 
output.append(box)


box.addEventListener('click',()=>{
    
    box.style.display = "none";
    
    game.timer = setTimeout(function(){
        message.textContent = "Click it..."
        game.start = new Date().getTime();
        var random = Math.floor(Math.random()*450);
        box.style.display = "block"
        box.style.left = random + "px"
        box.style.top = random + "px"
    },Math.random()*3000)
    if(!game.start){
        message.textContent = "Loading...";
    }
    else{
        const cur = new Date().getTime();
        const dur = (cur - game.start)/1000;
        message.textContent = "Tốc độ:"+" "+dur;
    }
})
