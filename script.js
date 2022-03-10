var numeroSecreto = parseInt(Math.random() * 11);
var elementoResultado = document.getElementById("resultado");
var tentativas = 3

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou! :D";
    setTimeout(function(){location.reload()}, 1500);
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML =
      "O número chutado é maior/menor que 10! Chute um número de 0-10.";
  } else if (numeroSecreto > 10){ 
      tentativas--;
      elementoResultado.innerHTML =
      "Você errou :c O número secreto é menor.";
  } else if (numeroSecreto < 10) {
    tentativas--;
    elementoResultado.innerHTML =
    "Você errou :c O número secreto é maior.";
  } 

  if (tentativas == 0) {
      elementoResultado.innerHTML = "Você perdeu suas tentativas! O número secreto era " + numeroSecreto;
      setTimeout(function(){location.reload()}, 1700);
  }
}
