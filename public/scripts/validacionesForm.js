const obtenerUsuario = (usuario) => usuario.substring(0, usuario.indexOf("@"));

const enfocarYSeleccionar = (elemento) => {
  elemento.focus();
  elemento.select();
};

function validarFormIngreso() {
  let correoAct = document.getElementById("correo");
  let passwordAct = document.getElementById("password");
  if (correoAct.value === "") {
    alert("Debe de proporcionar un email");
    enfocarYSeleccionar(correoAct);
    return false;
  }

  if (passwordAct.value.length < 8) {
    alert("Debe de proporcionar una contraseña de al menos de 8 caracteres");
    enfocarYSeleccionar(passwordAct);
    return false;
  }

  return true;
}

function ingresoUsuario() {
  if (validarFormIngreso()) {
    fetch("scripts/usuarios.json")
      .then((response) => response.json())
      .then((value) => {
        const correoAct = document.getElementById("correo").value;
        const password = document.getElementById("password").value;
        let esValido = false;

        for (let jsonObj of value) {
          if (jsonObj.correo === correoAct && jsonObj.password === password) {
            esValido = true;
            break;
          }
        }

        if (!esValido) {
          alert(
            "No hay un usuario registrado con ese correo, vuelva a intentarlo"
          );
          return;
        }

        window.location.href = "index.html?user=" + obtenerUsuario(correoAct);
      });
  }
}

function validarFormRegistro() {
  let passwordAct = document.getElementById("password");
  const confirmarPasswordAct = document.getElementById("validarPassword");

  if (!validarFormIngreso()) return false;

  if (
    confirmarPasswordAct.value === "" ||
    confirmarPasswordAct.value !== passwordAct.value
  ) {
    alert("Su contraseña debe de coincidir");
    enfocarYSeleccionar(confirmarPasswordAct);
    return false;
  }

  return true;
}

function registroUsuario() {
  if (validarFormRegistro()) {
    alert("Se registró correctamente");
    const correoAct = document.getElementById("correo").value;
    window.location.href = "index.html?user=" + obtenerUsuario(correoAct);
  }
}
