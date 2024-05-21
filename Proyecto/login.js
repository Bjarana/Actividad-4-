let token = null;

  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulación básica de autenticación
    if (username === 'usuario' && password === 'contraseña') {
      // Generar token (simulado)
      token = 'token_de_prueba';
      // Redireccionar a index.html
      window.location.href = 'index.html';
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }