/*     Asociación de eventos     */ 

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formularioContacto").addEventListener('submit', validarFormulario);
});

/*    Validación del formulario de contacto      */ 

function validarFormulario(evento) {
  let mensajesError = [];
  var nombre = document.getElementById('name').value;
  if (!nombre || nombre == '' || nombre.length == 0) {
      mensajesError.push("Debe ingresar su nombre.");
  }
  var email = document.getElementById('email').value;
  if (!email || email == '' || email.length == 0) {
      mensajesError.push("Debe ingresar su email.");
  }
  var telefono = document.getElementById('phone').value;
  if (!telefono || telefono == '' || telefono.length == 0) {
      mensajesError.push("Debe ingresar su número de teléfono.");
  }
  var mensaje = document.getElementById('message').value;
  if (!mensaje || mensaje == '' || mensaje.length == 0) {
      mensajesError.push("Debe ingresar un mensaje.");
  }

  if (mensajesError.length > 0) {
      evento.preventDefault();
      alert(mensajesError.join('\n'));
      return;
  } else {
    alert('Tu mensaje fue enviado exitosamente');
      return;
  }
}

