function buttonNum(num){
    document.getElementById("result").value += num
}
function clearResult(){
    document.getElementById("result").value = ""
}
function calcResult(){
    let num = document.getElementById("result").value
    let result = eval(num)

    document.getElementById("result").value = result
}
function plusMinus(){
    let num = document.getElementById("result").value
    let result = eval(num*-1)

    document.getElementById("result").value = result
}
function squared(){
    let num = document.getElementById("result").value
    let result = eval(num*num)

    document.getElementById("result").value = result
}