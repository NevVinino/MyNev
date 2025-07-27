// Animación para el encabezado principal (.header)
// Hace que aparezca desde arriba con opacidad 0, y se desplace suavemente hacia su lugar
gsap.from(".header", {
  duration: 1.2,     // La animación dura 1.2 segundos
  y: -50,            // Se inicia 50px más arriba de su posición final
  opacity: 0,        // Empieza completamente invisible
  ease: "power2.out" // Tipo de aceleración: suave al final
});

// Animación para todas las secciones con clase .section
// Las hace aparecer una por una, desde abajo y con opacidad 0
gsap.from(".section", {
  duration: 1,       // Cada sección dura 1 segundo en animarse
  y: 30,             // Se inicia 30px más abajo
  opacity: 0,        // Empieza invisible
  stagger: 0.3,      // Las anima una tras otra con 0.3s de separación
  delay: 0.5,        // Espera medio segundo antes de empezar
  ease: "power2.out" // Transición suave al final
});


// Animación para el botón (desplegable) para celular

  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });


////////////////////////////////////// 

// === ANIMACIONES DE TEXTO CON GSAP (gratis para github) ===

// Este script envuelve el contenido textual en <span> para aplicar animaciones
// personalizadas a cada palabra o carácter utilizando GSAP.

// ---------- FUNCIONES PARA PREPARAR EL TEXTO ----------

// Envuelve cada palabra dentro de un elemento en un <span class="word">
// Esto permite animarlas individualmente (ideal para nombres o títulos cortos)
function wrapWords(selector) {
  const element = document.querySelector(selector);
  if (!element) return;

  // Restaurar el contenido original por si ya estaba envuelto en spans
  element.innerHTML = element.textContent;

  // Separar el texto en palabras y envolver cada una
  const words = element.textContent.trim().split(" ");
  element.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(" ");
}

// Envuelve cada carácter dentro de un elemento en <span class="char">
// Reemplaza los espacios con &nbsp; para mantenerlos visibles
function wrapChars(selector) {
  const element = document.querySelector(selector);
  if (!element) return;

  // Restaurar el contenido original por si ya estaba envuelto
  element.innerHTML = element.textContent;

  // Dividir en caracteres y envolver cada uno
  const chars = element.textContent.trim().split("");
  element.innerHTML = chars.map(char => {
    return char === " "
      ? `<span class="char">&nbsp;</span>` // Espacio visible
      : `<span class="char">${char}</span>`;
  }).join("");
}

// ---------- FUNCIONES DE ANIMACIÓN CON GSAP ----------

// Anima cada palabra con un efecto de caída y rotación
// Se usa en el nombre principal (por palabras)
function animateNombre() {
  gsap.from(".nombre-animado .word", {
    y: -100,                             // Aparece desde arriba
    opacity: 0,                          // Inicia invisible
    rotation: () => gsap.utils.random(-80, 80), // Rotación aleatoria
    duration: 0.7,                       // Duración de cada palabra
    ease: "back",                        // Efecto rebote
    stagger: 0.15                        // Retraso entre palabras
  });
}

// Anima cada carácter con desplazamiento y rotación
// Se usa en el subtítulo (por letras)
function animateSubtitulo() {
  gsap.from(".subtitulo-animado .char", {
    y: -100,                             // Aparece desde arriba
    opacity: 0,
    rotation: () => gsap.utils.random(-80, 80),
    duration: 0.7,
    ease: "back",
    stagger: 0.1                         // Retraso entre letras
  });
}

// ---------- INICIALIZACIÓN AUTOMÁTICA ----------

// Ejecutar todo al cargar la página
window.addEventListener("load", () => {
  // Preparar los textos (dividir en spans)
  wrapWords(".nombre-animado");
  wrapChars(".subtitulo-animado");

  // Lanzar las animaciones
  animateNombre();
  animateSubtitulo();

  // Repetir las animaciones cada 5 segundos (opcional)
  setInterval(() => {
    wrapWords(".nombre-animado");
    wrapChars(".subtitulo-animado");
    animateNombre();
    animateSubtitulo();
  }, 5000);
});
