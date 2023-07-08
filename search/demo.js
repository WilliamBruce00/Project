var question = "Tôi có thể giúp gì cho bạn không ?"
var text = document.querySelector('#text'); 
var result = document.querySelector('#result');
var what = document.querySelector('.what')
    document.onkeydown = (e) =>{
        if(e.key == "Enter" && text.value.match('canvas draw a line') ){
            result.innerHTML = "<b>Vẽ Một đường thẳng</b>"+"<br><br>"+"<br>"+"var  c = document.getElementById('myCanvas');" + "<br>" + 
                                        "var ctx = c.getContext('2d');" + "<br>"+
                                        "ctx.moveTo(0, 0);" + "<br>" +
                                        "ctx.lineTo(200, 100);" + "<br>" +
                                        "ctx.stroke();" + "<br><br>" + 
                                "<u><i>Giải thích</i></u>" + "<br>" + 
                                "- moveTo(x,y)    x,y là điểm bắt đầu" + "<br>" +
                                "- lineTo(x,y)    x,y là điểm kết thúc" + "<br>" +
                                "- stroke() hàm dùng để vẽ"     
            text.value = null;                    
            result.style.border = "1px solid black"  
            what.style.display = "none"                      
        }
        else if(e.key == "Enter" && text.value.match('canvas draw a cicrle')){
            result.innerHTML =  "<b>Vẽ Một đường tròn</b>"+"<br><br>"+"<br>"+"var c = document.getElementById('myCanvas');" + "<br>" +
                                        "var ctx = c.getContext('2d');" + "<br>"+
                                        "ctx.beginPath();" + "<br>" +
                                        "ctx.arc(95, 50, 40, 0, 2 * Math.PI);" + "<br>" +
                                        "ctx.stroke();" + "<br><br>" +
                                "<u><i>Giải thích</i></u>" + "<br>" +
                                "- beginPath() để vẽ đường tròn" + "<br>" +
                                "- arc(x1,y1,x2,y2, r*2)   x1,y1 là điểm bắt đầu | x2,y2 là kết thúc | r là bán kính đường tròn" + "<br>" +
                                "- stroke() hàm dùng để vẽ"
            text.value = null;
            result.style.border = "1px solid black"
            what.style.display = "none"  
        }
        else if(e.key == "Enter" && text.value.match('canvas draw a text')){
            result.innerHTML =  "<b>Vẽ bản văn</b>"+"<br><br>" + "<br>" + "var c = document.getElementById('myCanvas');" + "<br>" +
                                        "var ctx = c.getContext('2d');" + "<br>"+
                                        "ctx.font = '30px Arial';" + "<br>" +
                                        'ctx.fillText("Hello World", 10, 50);' + "<br><br>" +
                                "<u><i>Giải thích</i></u>" + "<br>" +
                                "- font để thiết lập (cỡ chữ, kiểu chữ)" + "<br>" + 
                                "- fillText(text,x,y)    text là văn bản nhập vào | x,y là tọa độ" + "<br>"+
                                "- strokeText(text,x,y)  text là văn bản nhập vào | x,y là tọa độ" 
            text.value = null;                    
            result.style.border = "1px solid black"
            what.style.display = "none"                           
        }
        else if(e.key == "Enter" && text.value.match('canvas draw a image')){
            result.innerHTML =  "<b>Vẽ bản văn</b>"+"<br><br>" + "<br>" + "var c = document.getElementById('myCanvas');" + "<br>" +
                                        "var ctx = c.getContext('2d');" + "<br>"+
                                        'var img = document.getElementById("scream");' + "<br>" +
                                        "ctx.drawImage(img, 10, 10);" + "<br><br>" +
                                "<u><i>Giải thích</i></u>" + "<br>" +
                                "- dramImage(ảnh,tọa x, tọa y)"     
            text.value = null;   
            result.style.border = "1px solid black"
            what.style.display = "none"                      
        }
        else if(e.key == "Enter" && text.value.match("bài văn 200 chữ về tình mẫu tử")){
            result.innerHTML = "Bao đời nay, tình mẹ và sự hi sinh cao cả, vĩ đại của người mẹ luôn là đề tài được ngợi ca. Có thể khẳng định rằng, trên thế giới có nhiều tình cảm tốt đẹp, nhưng một trong những tình cảm tốt đẹp nhất chính là tình mẫu tử thiêng liêng. Tình mẫu tử là tình cảm của người mẹ dành cho đứa con của mình từ khi còn là chiếc bào thai bé nhỏ trong bụng. Nhờ có tình mẫu tử, mỗi chúng ta được lớn lên, được hoàn thiện và phát triển từ ngoại hình và nhân cách, trở thành những người con thanh tú, những người công dân có ích cho xã hội. Không có mẹ sẽ không có mặt ta ở trên đời. Không có tình yêu thương, sự chăm sóc của mẹ, ta sẽ lớn lên với những thiệt thòi, tủi hổ hơn rất nhiều so với người khác. Không có công lao dạy dỗ, uốn nắn của mẹ, ta dễ phạm phải con đường sai lầm. Không có mẹ, ta không có chốn bình yên để trở về sau những giông bão ngoài kia. Có thể thấy, dù trong bất cứ thời đại, hoàn cảnh nào thì mẹ cũng là người đầu tiên và tiên quyết vô cùng quan trọng đối với mỗi người con chúng ta. Tình mẹ vô cùng thiêng liêng, cao đẹp. Chúng ta hãy biết trân trọng thứ tình cảm quý giá đó và có những hành động thể hiện tình cảm yêu thương với mẹ của mình ngay khi sớm nhất có thể. Thời gian sẽ dần phôi pha, mẹ cũng không thể đi cùng ta đến hết cuộc đời, nhưng tình mẹ vẫn luôn mãi là ngọn lửa sáng nhất trong tâm hồn ta. Ngay từ hôm nay, hãy biết giúp đỡ mẹ nhiều hơn một chút, thể hiện tình cảm với mẹ nhiều hơn một chút, trân trọng từng khoảnh khắc nhiều hơn một chút để thấy cuộc đời ngày càng tươi đẹp hơn cũng như tận hưởng trọn vẹn tình mẫu tử cao cả. Mỗi chúng ta chỉ được sống một lần duy nhất, mẹ và tình mẹ cũng chỉ có một, hãy trân trọng và tạo dựng được nhiều giá trị văn minh cho xã hội trên nền tảng tình cảm yêu thương."
            result.style.border = "1px solid black"
            what.style.display = "none"  
        }
        else if(e.key == "Enter"){
            alert("Không tìm thấy kết quả")
        }    
    }    
    
    for(var i = 0 ;i<question.length;i++){
        setTimeout(function(){
            what.innerHTML = question[0]
        },1000)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1]
        },1100)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2]
        },1200)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3]
        },1300)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4]
        },1400)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5]
        },1500)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6]
        },1600)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7]
        },1700)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8]
        },1800)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9]
        },1900)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10]
        },2000)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11]
        },2100)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12]
        },2200)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13]
        },2300)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13] + question[14]
        },2400)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13] + question[14] + question[15]
        },2500)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13] + question[14] + question[15] + question[16]
        },2600)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13] + question[14] + question[15] + question[16] + question[17]
        },2700)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13] + question[14] + question[15] + question[16] + question[17] + question[18]
        },2800)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13] + question[14] + question[15] + question[16] + question[17] + question[18] + question[19]
        },2900)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13] + question[14] + question[15] + question[16] + question[17] + question[18] + question[19] + question[20]
        },3000)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13] + question[14] + question[15] + question[16] + question[17] + question[18] + question[19] + question[20] + question[21]
        },3100)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13] + question[14] + question[15] + question[16] + question[17] + question[18] + question[19] + question[20] + question[21] + question[22]
        },3200)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13] + question[14] + question[15] + question[16] + question[17] + question[18] + question[19] + question[20] + question[21] + question[22] + question[23]
        },3300)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13] + question[14] + question[15] + question[16] + question[17] + question[18] + question[19] + question[20] + question[21] + question[22] + question[23] + question[24]
        },3400)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13] + question[14] + question[15] + question[16] + question[17] + question[18] + question[19] + question[20] + question[21] + question[22] + question[23] + question[24] + question[25]
        },3500)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13] + question[14] + question[15] + question[16] + question[17] + question[18] + question[19] + question[20] + question[21] + question[22] + question[23] + question[24] + question[25] + question[26]
        },3600)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13] + question[14] + question[15] + question[16] + question[17] + question[18] + question[19] + question[20] + question[21] + question[22] + question[23] + question[24] + question[25] + question[26] + question[27]
        },3700)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13] + question[14] + question[15] + question[16] + question[17] + question[18] + question[19] + question[20] + question[21] + question[22] + question[23] + question[24] + question[25] + question[26] + question[27] + question[28]
        },3800)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13] + question[14] + question[15] + question[16] + question[17] + question[18] + question[19] + question[20] + question[21] + question[22] + question[23] + question[24] + question[25] + question[26] + question[27] + question[28] + question[29]
        },3900)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13] + question[14] + question[15] + question[16] + question[17] + question[18] + question[19] + question[20] + question[21] + question[22] + question[23] + question[24] + question[25] + question[26] + question[27] + question[28] + question[29] + question[30]
        },4000)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13] + question[14] + question[15] + question[16] + question[17] + question[18] + question[19] + question[20] + question[21] + question[22] + question[23] + question[24] + question[25] + question[26] + question[27] + question[28] + question[29] + question[30] + question[31]
        },4100)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13] + question[14] + question[15] + question[16] + question[17] + question[18] + question[19] + question[20] + question[21] + question[22] + question[23] + question[24] + question[25] + question[26] + question[27] + question[28] + question[29] + question[30] + question[31] + question[32]
        },4200)
        setTimeout(function(){
            what.innerHTML = question[0] + question[1] + question[2] + question[3] + question[4] + question[5] + question[6] + question[7] + question[8] + question[9] + question[10] + question[11] + question[12] + question[13] + question[14] + question[15] + question[16] + question[17] + question[18] + question[19] + question[20] + question[21] + question[22] + question[23] + question[24] + question[25] + question[26] + question[27] + question[28] + question[29] + question[30] + question[31] + question[32] + question[33]
        },4300)
    }