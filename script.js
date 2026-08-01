function validarform() {
    let form = document.getElementById("formContato");

    let nome = form.nome.value;
    let nota = form.nota.value;

    if (nome.trim() === "") {
        alert("Por favor, digite seu nome.");
        form.nome.focus();
        return false;
    }

    if (nota === "") {
        alert("Por favor, selecione uma nota.");
        form.nota.focus();
        return false;
    }

    return true;
}

function processarform() {
    if (validarform()) {
        alert("Dados enviados com sucesso!");
        console.log("dados enviados")
        document.getElementById("formContato").reset();
    }

    return false;
}