function obtenerElementoAUsar() {
  const queryString = window.location.search;
  const params = {};
  queryString.split("&").forEach((pair) => {
    const [key, value] = pair.split("=");
    params[key] = decodeURIComponent(value);
  });

  if (Object.keys(params).indexOf("?user") === -1) {
    const anchor = document.createElement("a");

    anchor.className = "boton-verde";
    anchor.href = "ingreso.html";
    anchor.text = "Ingresar";

    return anchor;
  } else {
    const button = document.createElement("button");
    button.className = "boton-avatar";
    button.textContent = `Usuario: ${params["?user"]}`;

    let image = document.createElement("img");
    image.src = "../img/perfil.png";
    image.className = "imagen-avatar";
    image.alt = `Usuario: ${params["?user"]}`;

    button.append(image);
    return button;
  }
}

function cambiarHeaderFijo() {
  let elemento = document.getElementById("div-header");
  if (elemento) {
    let a = obtenerElementoAUsar();
    elemento.append(a);
  }
}

if (document.body.id === "index") cambiarHeaderFijo();

function mostrarOcultarIntegrantes() {
  let oculto = document.getElementById("integrantes-grupo").hidden;

  if (oculto) {
    document.getElementById("ver-mas").textContent = "Ver menos";
    document.getElementById("integrantes-grupo").hidden = false;
  } else {
    document.getElementById("ver-mas").textContent = "Ver más";
    document.getElementById("integrantes-grupo").hidden = true;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const boton = obtenerElementoAUsar();
  const contenedor = document.getElementById("contenedor-boton-dinamico");
  if (contenedor && boton) contenedor.appendChild(boton);
});
