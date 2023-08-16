function enviar() {
    let areatxt = document.getElementById("txtMensaje");
    let mensaje = areatxt.value;
    console.log(mensaje.length);
    if(mensaje!="" && mensaje.length <300 ){
        areatxt.value="";
        agregarMensaje(mensaje);
    }
}
function enviarEnter(e){
    if(e.code=== 'Enter'){
        enviar();
    }
}
function agregarMensaje(mensaje) {
    let aAgregar= document.getElementById("listaMensajes");
    let hijo=document.createElement("li");
    let texto= document.createTextNode(mensaje);
    hijo.appendChild(texto);
    aAgregar.appendChild(hijo);
}
