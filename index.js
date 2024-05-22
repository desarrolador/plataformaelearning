// agregar un mensaje de bienvenida interactivo
document.addEventListener('DOMContentLoaded', () => {
    alert('Welcome to our language school!');
});


function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!nombre || !apellido || !email || !password) {
        alert('Por favor, complete todos los campos.');
        return false;
    }

    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return false;
    }

    return true;
}

