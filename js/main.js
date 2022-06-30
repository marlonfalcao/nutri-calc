let titulo = document.querySelector("#titulo");
titulo.textContent = "Nutricionista Aparecida"

//fórmula IMC IMC = PESO / (ALTURA X ALTURA)

let paciente = document.querySelector("#primeiro-paciente")
let peso = paciente.querySelector(".info-peso").textContent
let altura = paciente.querySelector(".info-altura").textContent
var tdImc = paciente.querySelector(".info-imc")

let pesoValido = true;
let alturaValida = true;

if (peso <= 0 || peso >= 1000){
    console.log("Peso inválido!")
    pesoValido = false
    tdImc.textContent = "Peso inválido"
}

if (altura <= 0 || altura >= 3){
    console.log("Altura inválida!")
    alturaValida = false
    tdImc.textContent = "Altura inválida"
}

if (pesoValido && alturaValida){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc
}