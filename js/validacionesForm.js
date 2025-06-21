function validarFormIngreso() {
  let correoAct = document.getElementById("correo");
  let passwordAct = document.getElementById("password");
  if (correoAct.value === "") {
    alert("Debe de proporcionar un email");
    correoAct.focus();
    correoAct.select();
    return false;
  }

  if (passwordAct.value.length < 8) {
    alert("Debe de proporcionar una contraseña de al menos de 8 caracteres");
    passwordAct.focus();
    passwordAct.select();
    return false;
  }

  return true;
}

function ingresoUsuario() {
  if (validarFormIngreso()) {
    fetch("../js/usuarios.json")
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

        window.location.href =
          "./index.html?user=" + correoAct.substring(0, correoAct.indexOf("@"));
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
    confirmarPasswordAct.focus();
    confirmarPasswordAct.select();
    return false;
  }

  return true;
}

function registroUsuario() {
  if (validarFormRegistro()) {
    alert("Se registró correctamente");
    let correoAct = document.getElementById("correo").value;
    window.location.href =
      "./index.html?user=" + correoAct.substring(0, correoAct.indexOf("@"));
  }
}
