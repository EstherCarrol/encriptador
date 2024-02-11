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
 * @date 09/02/2024
 * @description Validar el formato de una cadena de texto
 * @param {String} cadena 
 * @returns Boolean True si la cadena cumple con el formato, false en caso contrario
 */
function validarCadena(cadena) {
    const expr1 = /[A-Z]/g; //Expresión regular para identificar todas las coincidencias de letras mayúsculas
    const expr2 = /[0-9]/g; //Expresión regular para identificar todas las coincidencias de números
    const expr3 = /[ÁáÉéÍíÓóÚúü]/g; //Expresión regular para identificar todas las coincidencias de letras con acentos
    const expr4 = /[^\w\s]/;; //Expresión regular para identificar cualquier caracter especial
    let resultado1 = cadena.match(expr1);
    let resultado2 = cadena.match(expr2);
    let resultado3 = cadena.match(expr3);
    let resultado4 = cadena.match(expr4);
    //Si la cadena cumple con el formato solicitado
    if (resultado1!=null && resultado2==null && resultado3==null && resultado4==null) {
        document.getElementById('btn-convertir').removeAttribute('disabled');
    }
    if (resultado1==null && resultado2==null && resultado3==null && resultado4==null) {
        document.querySelector('#btn-convertir').setAttribute('disabled', 'true');
        return true;
    } else{ //Si no cumple
        return false;
    }
}


/**
 * @author Jennebier Esther Alvarado López
 * @date 08/02/2024
 * @description Encriptar mensaje sutituyendo caracteres especificos de una cadena de texto 
 */
function encriptarMensaje() {
    mensaje=document.getElementById("ingreso-mensaje").value;
    const reglas = document.querySelector('.reglas');
    if (!validarCadena(mensaje)) {
        reglas.classList.add('error');
        return false;
    }
    reglas.classList.remove('error');
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
 * @date 09/02/2024
 * @description Desencriptar mensaje sutituyendo caracteres especificos de una cadena de texto 
 * @returns 0 si no hay mensaje
 */
function desencriptarMensaje() {
    mensaje=document.getElementById("ingreso-mensaje").value;
 
    mensajeDesencriptado='';

    if (mensaje=='') {
        //Borra el mensaje encriptado
        const elementDiv = document.getElementById('mostar-mensaje');
        elementDiv.innerHTML=`<img src="img/Muñeco.png" alt="No se ha encontrado nada">
        <h2>Ningún mensaje fue encontrado</h2>
        <p>Ingresa el texto que desees encriptar o desencriptar.</p>`;
        return 0;
    }
 
  
    mensajeDesencriptado=mensaje.replace(/ai/g, "a");
    mensaje=mensajeDesencriptado;
    mensajeDesencriptado=mensaje.replace(/enter/g, "e");
    mensaje=mensajeDesencriptado;
    mensajeDesencriptado=mensaje.replace(/imes/g, "i");
    mensaje=mensajeDesencriptado;
    mensajeDesencriptado=mensaje.replace(/ober/g, "o");
    mensaje=mensajeDesencriptado;
    mensajeDesencriptado=mensaje.replace(/ufat/g, "u");
    mensaje=mensajeDesencriptado;

    console.log(mensajeDesencriptado);
    mostrarMensaje(mensajeDesencriptado);
    
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

}




/**
 * @author Jennebier Esther Alvarado López
 * @date 09/02/2024
 * @description Copia el mensaje de la sección
 */
function copiarMensaje() {
    const elementDiv = document.getElementById('mostar-mensaje');
    const elementP = elementDiv.querySelector('p');
    navigator.clipboard.writeText(elementP.textContent);
}


/**
 * @author Jennebier Esther Alvarado López
 * @date 09/02/2024
 * @description Conviete el mensaje a minúsculas
 */
function converirMinusculas() {
    mensaje = document.getElementById('ingreso-mensaje').value;
    mensaje = mensaje.toLowerCase();
    document.getElementById('ingreso-mensaje').value = mensaje;
    document.querySelector('#btn-convertir').setAttribute('disabled', 'true');
    const reglas = document.querySelector('.reglas');
    reglas.classList.remove('error');
}