let titulo = document.querySelector("#titulo");
titulo.textContent = "Aparecida Nutricionista"

let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];

    let peso = paciente.querySelector(".info-peso").textContent;
    let altura = paciente.querySelector(".info-altura").textContent;

    let imc = paciente.querySelector(".info-imc")
    let pesoEhValido = true
    let alturaEhValida = true

    if (peso <= 0 || peso >= 1000) {
    pesoEhValido = false
    imc.textContent = "Peso inválido!"
    
    paciente.classList.add("paciente-invalido")
    }

    if (altura <= 0 || altura >= 3.00) {
    alturaEhValida = false
    imc.textContent = "Altura inválida!"

    paciente.classList.add("paciente-invalido")
    }

    if (alturaEhValida && pesoEhValido) {
    let resultadoImc = peso / (altura * altura);
    imc.textContent = resultadoImc.toFixed(1)
    }
}

let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event){
    event.preventDefault()
    
    let formulario = document.querySelector("#form-adiciona");

    let nome = formulario.nome.value;
    let peso = formulario.peso.value;
    let altura = formulario.altura.value;
    let gordura = formulario.gordura.value;

    let pacienteTr = document.createElement("Tr");

    let nomeTd = document.createElement("Td");
    let pesoTd = document.createElement("Td");
    let alturaTd = document.createElement("Td");
    let gorduraTd = document.createElement("Td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    let tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

})