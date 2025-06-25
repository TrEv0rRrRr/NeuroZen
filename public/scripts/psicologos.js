const PSICOLOGOS = [
  {
    name: "Pierina Almandroz",
    img: "./assets/images/Psicologos/Pierina.png",
    desciption:
      "Acompaña procesos terapéuticos centrados en el presente y la conciencia emocional. Ideal para quienes buscan reducir el estrés desde un enfoque integral.",
    title: "Dra",
  },
  {
    name: "Henry Mendoza",
    img: "./assets/images/Psicologos/Henry.png",
    desciption:
      "Especialista en terapia cognitivo-conductual con más de 10 años de experiencia. Ayuda a adultos a gestionar la ansiedad, depresión y conflictos personales.",
  },
  {
    name: "Santiago Ventura",
    img: "./assets/images/Psicologos/Santiago.png",
    desciption:
      "Psicólogo con enfoque humanista. Te acompaña en procesos de crecimiento personal, crisis emocionales, manejo del estrés y autoestima.",
  },
  {
    name: "Joaquin Del Solar",
    img: "./assets/images/Psicologos/Joaquin.png",
    desciption:
      "Amplia experiencia trabajando con niños, adolescentes y familias. Ayuda a reducir el estrés escolar, mejorar la conducta y fortalecer los vínculos familiares.",
  },
  {
    name: "Nuria Castro",
    img: "./assets/images/Psicologos/Nuria.png",
    desciption:
      "Psicóloga clínica con enfoque cognitivo-conductual. Te ayuda a identificar y transformar los pensamientos que generan estrés, promoviendo hábitos de autocuidado y bienestar emocional.",
    title: "Dra",
  },
];

const GALERIA_PSICO = document.getElementById("galeria-psico");

const FRAGMENT = document.createDocumentFragment();

for (const { desciption, img, name, title } of PSICOLOGOS) {
  const CARD = document.createElement("DIV");
  CARD.className = "card";

  const fraseGenero = title ? "de la psicóloga" : "del psicólogo";

  CARD.innerHTML = `
            <img
              src="${img}"
              alt="Foto ${fraseGenero} ${name}"
              id="${name}"
              loading="lazy"
            />
            <div class="psicologo-info">
              <h3 class="psicologo-name">${title ?? "Dr"}. ${name}</h3>
              <p class="psicologo-desc">${desciption}</p>
            </div>
  `;

  FRAGMENT.appendChild(CARD);
}

GALERIA_PSICO.appendChild(FRAGMENT);
