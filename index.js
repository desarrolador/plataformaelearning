// agregar un mensaje de bienvenida interactivo
document.addEventListener('DOMContentLoaded', () => {
    alert('Welcome to our language school!');
});


// agregar formulario con ingreso y registro
function validateForm() {
    const form = document.querySelector('#signupForm');
    const username = form.username.value;
    const password = form.password.value;
    if (username === '' || password === '') {
        alert('Please fill in all fields');
        return false;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return false;
    }
    return true;
}

