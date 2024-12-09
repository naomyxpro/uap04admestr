
//Muestra un mensaje de texto que ayuda al usuario a introducir un nombre
nombreUSR.addEventListener("focus",function(){
    document.getElementById("ayudaNombre").textContent="Introduce tu nombre y apellido";
});
//Muestra un mensaje de texto que ayuda al usuario a introducir un nombre

//Borra el mensaje de texto de ayuda
nombreUSR.addEventListener("blur",function(){
    document.getElementById("ayudaNombre").textContent="";
});
//envia un registro a la consola si se ha marcado el checkbox
document.getElementById("confirmacion").addEventListener("change",function(evento){
    console.log("Enviar email de confirmacion: "+evento.target.checked);
});
//muestra en consola el tipo de tipousuario elegido
document.getElementsByName("suscripcion").forEach(function(radio){
    radio.addEventListener("change",function(evento){
        console.log("Tipo de Usuario elegido: "+evento.target.value);
    });
});
//muestra la seleccion de la lista desplegable
document.getElementById("paises").addEventListener("charge",function(e){
    console.log("pais: "+ e.target.value);
})

var formulario = document.querySelector("form");
console.log ("Número de campos: " + formulario.elements.length);
console.log(formulario.elements[0].name); // Muestra "nombre"
console.log(formulario.elements[2].name);
console.log(formulario.elements.newsPromo.type); //Muestra radio

document.querySelector("form").addEventListener("submit", function(evento) {
    evento.preventDefault();
    // También se puede acceder a los elementos a través de form.elements. Ejemplo
     console.log( "Nombre de usuario: " + evento.target.elements.nombre.value);
     console.log("Email: " + evento.target.email.value);
     console.log("Confirmación: " + evento.target.confirmacion.checked);
     console.log("Tipo de usuario: " + evento.target.suscripcion.value);
     console.log("Pais Seleccionado: " + evento.target.paises.value);
 });