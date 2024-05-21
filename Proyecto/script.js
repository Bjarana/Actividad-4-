let datos = [];

  function agregarElemento() {
    const nombre = document.getElementById('nombre').value;
    const id = datos.length + 1;
    datos.push({ id: id, nombre: nombre });
    actualizarTabla();
    $('#myModal').modal('hide');
  }

  function editarElemento(id) {
    const nuevoNombre = prompt("Ingrese el nuevo nombre:");
    if (nuevoNombre !== null) {
      const index = datos.findIndex(item => item.id === id);
      datos[index].nombre = nuevoNombre;
      actualizarTabla();
    }
  }

  function eliminarElemento(id) {
    if (confirm("¿Estás seguro de eliminar este elemento?")) {
      datos = datos.filter(item => item.id !== id);
      actualizarTabla();
    }
  }

  function actualizarTabla() {
    const tablaCuerpo = document.getElementById('tablaCuerpo');
    tablaCuerpo.innerHTML = '';
    datos.forEach(item => {
      tablaCuerpo.innerHTML += `
        <tr>
          <td>${item.id}</td>
          <td>${item.nombre}</td>
          <td>
            <button type="button" class="btn btn-warning btn-sm" onclick="editarElemento(${item.id})">Editar</button>
            <button type="button" class="btn btn-danger btn-sm" onclick="eliminarElemento(${item.id})">Eliminar</button>
          </td>
        </tr>
      `;
    });
  }
  function logout() {
    // Aquí puedes agregar la lógica de logout, como limpiar los tokens, redireccionar al usuario a la página de inicio de sesión, etc.
    // Por ejemplo, puedes redireccionar al usuario a la página de inicio de sesión (login.html) de la siguiente manera:
    window.location.href = 'login.html';
  }
  
  // Aquí también puedes definir las demás funciones relacionadas con tu CRUD, como agregarElemento(), editarElemento(), eliminarElemento(), etc.
  