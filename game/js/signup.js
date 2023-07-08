var forms = document.getElementById('form');
var inputs = document.getElementsByTagName('input');
function check(){
    if(inputs[0].value != "" && inputs[1].value == inputs[2].value){
        forms.action = "index.html"
    }
    else{
        alert("Vui lòng kiểm tra lại usernam hoặc password")
    }
}