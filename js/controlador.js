// Declaración de variables 
let mensaje='';
let palabra='caracter';
let reemplazoA ='ai';
let reemplazoE ='enter';
let reemplazoI ='imes';
let reemplazoO ='ober';
let reemplazoU ='ufat';


// Evento para ir contando los caracteres del textarea
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

/**
 * @author Jennebier Esther Alvarado López
 * @date 08/02/2024
 * @description Encriptar mensaje sutituyendo caracteres especificos de una cadena de texto 
 */
function encriptarMensaje() {

    document.querySelector('#btn-desencriptar').removeAttribute('disabled');

    mensaje=document.getElementById("ingreso-mensaje").value;
    mensajeEncriptado='';

    if (mensaje=='') {
        //Borra el mensaje encriptado
        const elementDiv = document.getElementById('mostar-mensaje');
        elementDiv.innerHTML=`<img src="img/Muñeco.png" alt="No se ha encontrado nada">
        <h2>Ningún mensaje fue encontrado</h2>
        <p>Ingresa el texto que desees encriptar o desencriptar.</p>`;
        return 0;
    }
    for (let i = 0; i < mensaje.length; i++) {
        const element = mensaje[i];
        switch (element) {
            case 'a':
                mensajeEncriptado=mensajeEncriptado.concat(reemplazoA);
                break;
            case 'e':
                mensajeEncriptado=mensajeEncriptado.concat(reemplazoE);
                break;
            case 'i':
                mensajeEncriptado=mensajeEncriptado.concat(reemplazoI);
                break;
            case 'o':
                mensajeEncriptado=mensajeEncriptado.concat(reemplazoO);
                break;
            case 'u':
                mensajeEncriptado=mensajeEncriptado.concat(reemplazoU);
                break;
            default:
                mensajeEncriptado=mensajeEncriptado.concat(mensaje[i]);
                break;
        }    
    }
    mostrarMensaje(mensajeEncriptado);
    
}

/**
 * @author Jennebier Esther Alvarado López
 * @date 08/02/2024
 * @description Mostrar un mensaje en el área destinada
 * @param {string} mensaje a mostrar en pantalla
 */
function mostrarMensaje(mensaje) {
    const elementDiv = document.getElementById('mostar-mensaje');
    elementDiv.innerHTML=`<p>${mensaje}</p>`;
    elementDiv.style.height='350px';
    elementDiv.style.width='395px';
}


/**
 * @author Jennebier Esther Alvarado López
 * @date 08/02/2024
 * @description Reinicia el programa colocandolo en condiciones iniciales
 */
function reiniciar() {
    //Limpia el textarea
    const textareMensaje = document.getElementById('ingreso-mensaje');
    textareMensaje.value='';
    //Borra el mensaje encriptado
    const elementDiv = document.getElementById('mostar-mensaje');
    elementDiv.innerHTML=`<img src="img/Muñeco.png" alt="No se ha encontrado nada">
    <h2>Ningún mensaje fue encontrado</h2>
    <p>Ingresa el texto que desees encriptar o desencriptar.</p>`;

    //Poner en cero el contador de caracteres
    contador.innerHTML = `Mensaje de ${0} ${palabra}`;

    //Deshabilitar el botón desencriptar
    document.querySelector('#btn-desencriptar').setAttribute('disabled', 'true');
}



