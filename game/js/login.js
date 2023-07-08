var forms = document.getElementById('form');
var inputs = document.getElementsByTagName('input');
var error = document.querySelectorAll('.error')
var user = "Admin";
var pass = 123
function check(){
    if(inputs[0].value == user && inputs[1].value == pass){
        forms.append(inputs[2].setAttribute('type','submit'))
        forms.action = "index.html"
    }
    else if(inputs[0].value == "" && inputs[1].value == "" ){
        error[0].innerHTML = "please enter username"
        error[1].innerHTML = "please enter password"
        inputs[0].style.border = "2px solid red"
        inputs[1].style.border = "2px solid red"
    }  
    else if(inputs[0].value != "" && inputs[1].value == ""){
        error[0].innerHTML = ""
        inputs[0].style.border = "2px solid green"
        error[1].innerHTML = "please enter password"
        inputs[1].style.border = "2px solid red"
    }  
    else if(inputs[0].value == "" && inputs[1].value != ""){
        error[0].innerHTML = "please enter username"
        inputs[0].style.border = "2px solid red"
        error[1].innerHTML = ""
        inputs[1].style.border = "2px solid green"
    }  
    else{
        error[1].innerHTML = "The account or password is incorrect, please check again"
        inputs[0].style.border = "2px solid red"
        inputs[1].style.border = "2px solid red"
        error[0].innerHTML = ""
    }
    
        
        
       
    
    
   
}
