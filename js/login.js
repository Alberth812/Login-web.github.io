// login.js
// Funciones de login, registro y redirección extraídas de index.html

document.addEventListener('DOMContentLoaded', function() {
  // Mostrar formulario de registro
  document.getElementById('showRegister').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('formTitle').textContent = 'Registrarse';
  });
  // Mostrar formulario de login
  document.getElementById('showLogin').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('formTitle').textContent = 'Iniciar Sesión';
  });
  // Redirección al iniciar sesión
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    window.location.href = 'portafolio.html';
  });
  // Registro con validación de contraseñas
  document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const pass = document.getElementById('registerPassword').value;
    const repeat = document.getElementById('repeatPassword').value;
    if (pass !== repeat) {
      alert('Las contraseñas no coinciden. Por favor, corrige el error.');
      return;
    }
    document.getElementById('msg').classList.remove('text-danger');
    document.getElementById('msg').classList.add('text-success');
    document.getElementById('msg').textContent = '¡Registro exitoso! Ahora puedes iniciar sesión.';
    setTimeout(function() {
      document.getElementById('registerForm').style.display = 'none';
      document.getElementById('loginForm').style.display = 'block';
      document.getElementById('formTitle').textContent = 'Iniciar Sesión';
      document.getElementById('msg').textContent = '';
    }, 2000);
  });
});
