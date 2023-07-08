// 5000deg = 200.000 VND
// 5600deg = 500.000 VND
// 5780deg = 100.000 VNd
// 5880deg = Chúc may mắn lần sau
    var value = [5000,5600,5780,5880] 
    var wheel = document.getElementById('spin')
    
    function clickMouse(){
        var random = Math.random() * value.length
        var rand = Math.floor(random)
        console.log(value[rand])
        if(rand == 0){
            wheel.style.transform = "rotate(5000deg)"
            document.getElementById('TB').innerHTML = "Chúc mừng bạn"// Thành công
            setTimeout(function(){
                document.getElementById('result').style.display = "block"
            },4800)
            document.getElementById('we').disabled = true;
        }
        else if(rand == 1){
            wheel.style.transform = "rotate(5600deg)"
            document.getElementById('TB').innerHTML = "Chúc mừng bạn" // Thành công
            setTimeout(function(){
                document.getElementById('result').style.display = "block"
            },5000)
            document.getElementById('we').disabled = true;
        }
        else if(rand == 2){
            wheel.style.transform = "rotate(5780deg)"
            document.getElementById('TB').innerHTML = "Chúc mừng bạn" // Thành công
            setTimeout(function(){
                document.getElementById('result').style.display = "block"
            },5200)
            document.getElementById('we').disabled = true;
        }
        else{
            wheel.style.transform = "rotate(5880deg)"
            document.getElementById('TB').innerHTML = "Chúc bạn may mắn lần sau"
            setTimeout(function(){
                document.getElementById('result').style.display = "block"
            },5000)
            document.getElementById('we').disabled = true;
        }
    }
    function ClickOk(){
        location.reload();
    }