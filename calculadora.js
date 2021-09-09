function sumar(){
    o1=parseInt(document.getElementById('OperandoA').value)
    o2=parseInt(document.getElementById('OperandoB').value)
    suma=o1+o2
    document.getElementById('resultado').value = suma
}
function resta(){
    o1=parseInt(document.getElementById('OperandoA').value)
    o2=parseInt(document.getElementById('OperandoB').value)
    restar=o1-o2
    document.getElementById('resultado').value = restar
}
function multiplicacion(){
    o1=parseInt(document.getElementById('OperandoA').value)
    o2=parseInt(document.getElementById('OperandoB').value)
    producto=o1*o2
    document.getElementById('resultado').value = producto
}
function division(){
    o1=parseInt(document.getElementById('OperandoA').value)
    o2=parseInt(document.getElementById('OperandoB').value)
    cociente=o1/o2
    document.getElementById('resultado').value = cociente
}
function potenciacion(){
    o1=parseInt(document.getElementById('OperandoA').value)
    o2=parseInt(document.getElementById('OperandoB').value)
    potencia= Math.pow(o1,o2)
    document.getElementById('resultado').value = potencia
}
function radicacion(){
    o1=parseInt(document.getElementById('OperandoA').value)
    o2=parseInt(document.getElementById('OperandoB').value)
    radical=Math.sqrt(o1,o2)
    document.getElementById('resultado').value = radical
}