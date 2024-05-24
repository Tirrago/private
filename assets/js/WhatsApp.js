document.getElementById('Whats').addEventListener('input', function(e) {
    var input = e.target;
    var whatsapp = input.value;
    // Remove qualquer coisa que não seja número
    whatsapp = whatsapp.replace(/\D/g, '');
    input.value = whatsapp;
});

document.getElementById('Form').addEventListener('submit', function(e) {
    var whatsapp = document.getElementById('Whats').value;
    if (whatsapp.length > 11 || whatsapp.length < 9) {
        alert("O número do WhatsApp deve ter entre 9 e 11 dígitos.");
        e.preventDefault(); // Impede a submissão do formulário
    }
});
