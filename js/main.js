let titulo = document.querySelector("#titulo");
titulo.textContent = "Aparecida Nutricionista"

let paciente = document.querySelector("#primeiro-paciente");
let peso = paciente.querySelector(".info-peso").textContent;
let altura = paciente.querySelector(".info-altura").textContent;

let imc = paciente.querySelector(".info-imc")
let pesoEhValido = true
let alturaEhValida = true

if (peso <= 0 || peso >= 1000) {
    pesoEhValido = false
    imc.textContent = "Peso inválido!"
}

if (altura <= 0 || altura >= 3.00) {
    alturaEhValida = false
    imc.textContent = "Altura inválida!"
}

if (alturaEhValida && pesoEhValido) {
    let resultadoImc = peso / (altura * altura);
    imc.textContent = resultadoImc
}