<?php
try {
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/plain; charset="UTF-8"' . "\r\n";
    $headers .= "Cc: ventas@totalhome.com.ar\r\n"; // Personas en copia 
    $sub = '=?UTF-8?B?' . base64_encode("Formulario AIWA - Comercial") . '?='; // Asunto del mail

    $message = "";
    $to = "dcanton@totalhome.com.ar"; // Destinatario del mail
    $message = "
        Nombre y Apellido: " . $_POST["nombre"] . "\n\n
        Email: " . $_POST["email"] . "\n\n
        Teléfono: " . $_POST["telefono"] . "\n\n
        Mensaje: " . $_POST["mensaje"] . "\n\n
        Unidades: " . $_POST["unidades"] . "\n\n
        Zona: " . $_POST["zona"];

    $m = mail($to, $sub, $message, $headers);
    if ($m) {
        http_response_code(200);
        //echo $to . " - " . $message;
        header("Location: /contacto/gracias");
    } else {
        http_response_code(400);
        echo "error on sending email";
        #header("Location: /mailerror.html");
    }
} catch (Exception $e) {
    http_response_code(400);
    echo "error";
    #header("Location: /mailerror.html");
}


?>