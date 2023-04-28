<?php
try {
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/plain; charset="UTF-8"' . "\r\n";
    # $headers .= "Cc: info@aiwaelectronics.com.ar\r\n"; // Personas en copia 
    $headers .= "Bcc: ybolognia@totalhome.com.ar, pavila@totalhome.com.ar\r\n"; // Personas en copia oculta
    $sub = '=?UTF-8?B?' . base64_encode("Formulario AIWA - Soporte") . '?='; // Asunto del mail

    $message = "";
    $to = "soporte@totalhome.com.ar"; // Destinatario del mail
    #$to = "amolina@totalhome.com.ar"; // Destinatario del mail de pruebas
    $message = "
        Nombre y Apellido: " . $_POST["nombre"] . "\n\n
        Email: " . $_POST["email"] . "\n\n
        Teléfono: " . $_POST["telefono"] . "\n\n
        Modelo: " . $_POST["modelo-producto"] . "\n\n
        Tipo de consulta: " . $_POST["tipo-de-consulta"] . "\n\n
        Número de orden: " . $_POST["numero-orden"] . "\n\n
        Mensaje: " . $_POST["mensaje"];

    $m = mail($to, $sub, $message, $headers);
    if ($m) {
        http_response_code(200);
        //echo $to . " - " . $message;
        header("Location: /contacto/gracias");
    } else {
        http_response_code(400);
        echo "Error enviando mail";
        #header("Location: /mailerror.html");
    }
} catch (Exception $e) {
    http_response_code(400);
    echo "Error enviando mail";
    #header("Location: /mailerror.html");
}
?>