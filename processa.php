<?php
// Dados do banco de dados
$servername = "172.23.0.6";
$username = "csi";
$password = "9th04s2ILCa0";
$dbname = "csiportal";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
  die("Conexão falhou: " . $conn->connect_error);
}

// Verificar se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['Nome'];
    $whatsapp = $_POST['WhatsApp'];
    $email = $_POST['Email'];

    // Preparar a query SQL
    $sql = "INSERT INTO contato (Nome, WhatsApp, Email) VALUES (?, ?, ?)";

    // Preparar a declaração
    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        die("Erro: " . $conn->error);
    }

    // Vincular os parâmetros
    $stmt->bind_param("sss", $nome, $whatsapp, $email);

    // Executar a declaração
    if ($stmt->execute() === true) {
        echo "<div style='font-size: 20px; text-align: center; background-color: pink;'>você está com acesso a rede</div>";

    } else {
        echo "Erro: " . $stmt->error;
    }

    // Fechar a declaração
    $stmt->close();
}

// Fechar a conexão
$conn->close();
?>
