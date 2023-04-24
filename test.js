function info(){
    // var nombre = prompt("Dame tu nombre", "Nombre");
    // var edad = NaN;
    // while (isNaN(edad)) {
    //     edad = prompt("Dame tu edad", "Edad");
    // }
    // alert("Tu nombre es: " + nombre + " y tu edad es: " + edad);

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;


    alert("Hola " + nombre + " " + apellido + " tu edad es: " + edad);

}