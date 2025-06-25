const PREGUNTAS = [
  "¿Qué tan seguido de sientes abrumado por tus responsabilidades diarias?",
  "¿Cuanto estrés sientes actualmente en tu vida personal o laboral?",
  "¿Con qué frecuencia te cuesta conciliar el sueño por estar pensando en tus problemas?",
];

const BUTTONS = document.querySelectorAll("button");
const PREGUNTA = document.getElementById("pregunta");

const TEST_CONT = document.querySelector(".test-container");
const AFTER_TEST_CONT = document.querySelector(".after-test");

let contador = -1;

BUTTONS.forEach((button) => {
  button.addEventListener("click", () => {
    contador++;
    button.style.animation = "none";
    button.offsetHeight;
    button.style.animation = "parpadeo 1s ease-in-out forwards";
    if (contador == 3) {
      setTimeout(() => {
        TEST_CONT.style.display = "none";
        AFTER_TEST_CONT.style.display = "flex";
      }, 1000);
    } else {
      TEST_CONT.style.display = "flex";
      AFTER_TEST_CONT.style.display = "none";
      setTimeout(() => {
        PREGUNTA.textContent = `En una escala de 1 al 10, ${PREGUNTAS[contador]}`;
      }, 1000);
    }
  });
});
