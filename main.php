<?php

if(isset($_POST['submit'])){
    $to = $_POST['email'];
    $subject = "Prueba";
    $message = "Esto es una prueba";

    $sent = mail($to, $subject, $message);

    if($sent){
        echo "Email sent successfully";
    } else {
        echo "There was an error sending the mail";
    }

} else {
    echo "You have not submitted a form";
}

?>