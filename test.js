function info() {

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;


    document.getElementById("result").value = "Nombre: " + nombre + " Apellido: " + apellido + " Edad: " + edad;


}

function stringFuncs() {

    var cadena = document.getElementById("cadena").value;
    var cadena2 = document.getElementById("cadena2").value;

    var cadena3 = cadena.concat(cadena2);

    document.getElementById("result2").value = cadena3;

    var caracter2 = cadena.charAt(2);
    
}


function searchChar(toSearch){
    // Search the character in the string, returns the first occurrence or -1 if not found
    var cadena = document.getElementById("cadena").value;
    var result = cadena.indexOf(toSearch);
    document.getElementById("result3").value = result;
}

function substring(){
    var cadena = document.getElementById("cadena").value;
    var result = cadena.substring(2,5);
    // Se regresa la cadena desde la posición 2 hasta la 5

    document.getElementById("result4").value = result;

    for(character in cadena){
        alert(cadena[character]);
        document.getElementById("result5").value = cadena[character] + "\n";
    }
}

function sendEmail(){
    // Run the php code in main.php
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var data = "email=" + email + "&subject=" + subject + "&message=" + message;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("result6").innerHTML = this.responseText;
        }
    }
    xhttp.open("POST", "main.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(data);
}