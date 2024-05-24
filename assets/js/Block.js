// Primeiro, obtenha referências para o link e o botão
var link = document.getElementById('Leiame');
var button = document.getElementById('Botao');

// Inicialmente, defina o botão como desabilitado
button.disabled = true;

// Adicione um ouvinte de evento ao link para habilitar o botão quando o link for clicado
link.addEventListener('click', function() {
  button.disabled = false;
});
