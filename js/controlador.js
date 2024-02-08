let mensaje='';
let palabra='caracter';

mensaje = document.getElementById('ingreso-mensaje');
const contador = document.getElementById('contador-caracteres');
mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const longitudAct = target.value.length;
    if(longitudAct!=1){
        palabra='caracteres';
        contador.innerHTML = `Mensaje de ${longitudAct} ${palabra}`;
    }else{
        palabra='caracter';
        contador.innerHTML = `Mensaje de ${longitudAct} ${palabra}`;
    }
    
});


function encriptarMensaje() {
    mensaje=document.getElementById("ingreso-mensaje").value;

    console.log(mensaje);

    
}



