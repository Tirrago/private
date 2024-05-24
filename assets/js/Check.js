document.getElementById('MeuCheck').addEventListener('change', function (e) {
        document.getElementById('Botao').disabled = !e.target.checked;
    });