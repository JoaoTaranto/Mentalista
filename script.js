var elementoResultado = document.getElementById("resultado");

function Chutar() {
  var numeroSecreto = parseInt(Math.random() * 11);
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou! :D";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML =
      "O número chutado é maior/menor que 10! Chute um número de 0-10.";
  } else {
    elementoResultado.innerHTML =
      "Você errou :c O número secreto era " + numeroSecreto;
  }
}
