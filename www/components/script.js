var numero1 = document.getElementById("n1");
var numero2 = document.getElementById("n2");
var resultado = document.getElementById("resultado");
var btnSoma = document.getElementById("soma");
var btnSubtracao = document.getElementById("sub");
var btnMultiplicacao = document.getElementById("mult");
var btnDivisao = document.getElementById("div");

btnSoma.addEventListener("click", function() {
  resultado.value = parseFloat(numero1.value) + parseFloat(numero2.value);
})
btnSubtracao.addEventListener("click",function() {
  resultado.value = parseFloat(numero1.value) - parseFloat(numero2.value);
})
btnMultiplicacao.addEventListener("click",function() {
  resultado.value = parseFloat(numero1.value) * parseFloat(numero2.value);
})
btnDivisao.addEventListener("click",function() {
  resultado.value = parseFloat(numero1.value) / parseFloat(numero2.value);
})