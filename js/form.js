let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event){
    event.preventDefault() 

    let formulario = document.querySelector("#form-adiciona");
    let paciente = gerarPaciente (formulario)
    
    let pacienteTr = montaTr(paciente);

    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    formulario.reset();

})

function gerarPaciente (formulario) {
    let paciente = {
        nome : formulario.nome.value,
        peso : formulario.peso.value,
        altura : formulario.altura.value,
        gordura : formulario.gordura.value,
        imc : calculaImc (formulario.peso.value, formulario.altura.value)
    }

    return paciente
}

function montaTr (paciente) {
    let pacienteTr = document.createElement("Tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd (paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd (paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd (paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd (paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd (paciente.imc, "info-imc"));

    return pacienteTr
}

function montaTd (dado, classe) {
    let td = document.createElement("Td");
    td.textContent = dado;
    td.classList.add(classe);

    return td
}
