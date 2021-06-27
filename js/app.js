// Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

// Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

eventListeners();
function eventListeners() {
    // Cuando la app inicia
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Datos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
}



// Funciones

function iniciarApp() {
    btnEnviar.disable = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

// Validando formulario 

function validarFormulario(e) {
    if(e.target.value.length > 0) {
        console.log('bien')
        e.target.style.borderBottomColor = 'green';
    } else {
        e.target.style.borderBottomColor = 'red';
        mostrarError();
    }
}

function mostrarError() {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = 'Todos los campos son obligatorios';
    mensajeError.classList.add('border', 'border-red-500', 'background-color-100', 'text-red-500', 'p-3', 'mt-2', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0) {
        formulario.appendChild(mensajeError);
    }

}

