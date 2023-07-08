var arr = [
    ["táo","xoài","cam"],
    ["apple","mango","orange"]
]

for(var i = 0 ;i<arr.length;i++){
    for(var j = 0;j<arr.length;j++){
        console.log(arr[i][j])
        console.log(arr[i+1][i])
    }
    
}