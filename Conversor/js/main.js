var dec
var bin = ''
var res = document.getElementsByClassName("answer")[0]
var convert = document.getElementsByClassName("btn")[0]
var input = document.getElementById("dec")

convert.addEventListener('click', submit)

function submit(){
    dec = Number(input.value)
    if (bin != ''){
        bin = ''
    }

    while (dec != 0){
        var r = dec%2
        bin = String(r) + String(bin)
        dec = parseInt(dec/2)
    }
    res.innerText=`${bin}`
}


var convert1 = document.getElementsByClassName("btn")[1]


convert1.addEventListener('click', submit1)

function submit1(){
    
    var binario = document.getElementById("binario")
    binario = String(binario.value) 
    var n = binario.length
    var decimal = 0

    for (let d of binario){
        decimal = decimal + parseInt(d) * 2 ** (n-1)
        n = n - 1
    }   
    
    res.innerText=`${decimal}`
}
 
