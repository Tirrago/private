function validarInput(input) {
    var regex = /[^a-z A-Z]/g; // Regex para caracteres que não são letras
    input.value = input.value.replace(regex, ""); // Substitui caracteres não permitidos por nada

    // Converte a primeira letra de cada palavra para maiúscula
    input.value = input.value.replace(/\b\w/g, function(l){ return l.toUpperCase() });
}

