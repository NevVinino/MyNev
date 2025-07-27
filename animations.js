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


////////////////////////////////////

// Registrar el plugin SplitText de GSAP
gsap.registerPlugin(SplitText);

// """" ANIMACIÓN PARA EL NOMBRE """""


// Variables para guardar el SplitText y la animación del nombre
let splitNombre, animationNombre;

// Función que anima el nombre dividiéndolo en palabras
function animateNombre() {
  // Revertir animación anterior (si existe) para evitar duplicaciones
  animationNombre && animationNombre.revert();
  splitNombre && splitNombre.revert();

  // Crear la división del texto en palabras
  splitNombre = new SplitText(".nombre-animado.text", { type: "words" });

  // Animar cada palabra con desplazamiento vertical, opacidad y rotación
  animationNombre = gsap.from(splitNombre.words, {
    y: -100,                      // Desde arriba
    opacity: 0,                   // Inicia invisible
    rotation: "random(-80, 80)",  // Rotación aleatoria por palabra
    duration: 0.7,
    ease: "back",                 // Rebote suave
    stagger: 0.15                 // Retraso entre palabras
  });
}


// """" ANIMACIÓN PARA EL SUBTÍTULO """"

// Variables para el SplitText y animación del subtítulo
let splitSubtitulo, animationSubtitulo;

// Función que anima el subtítulo dividiéndolo en caracteres
function animateSubtitulo() {
  // Revertir animaciones previas
  animationSubtitulo && animationSubtitulo.revert();
  splitSubtitulo && splitSubtitulo.revert();

  // Crear división del texto en caracteres
  splitSubtitulo = new SplitText(".subtitulo-animado.text", { type: "chars" });

  // Animar cada carácter con desplazamiento, rotación y opacidad
  animationSubtitulo = gsap.from(splitSubtitulo.chars, {
    y: -100,                      // Desde arriba
    opacity: 0,                   // Inicia invisible
    rotation: "random(-80, 80)",  // Rotación aleatoria
    duration: 0.7,
    ease: "back",
    stagger: 0.1                  // Retraso más corto entre caracteres
  });
}


// """" EJECUTAR AMBAS ANIMACIONES AL CARGAR """""

window.addEventListener("load", () => {
  animateNombre();       // Ejecutar animación del nombre
  animateSubtitulo();    // Ejecutar animación del subtítulo

  // Repetir animaciones cada cierto tiempo (opcional)
  setInterval(animateNombre, 4000);     // Cada 3 segundos
  setInterval(animateSubtitulo, 4000);  // Cada 4 segundos
});


// """" AJUSTAR ANIMACIONES AL REDIMENSIONAR """""

window.addEventListener("resize", () => {
  // Reaplicar el SplitText al cambiar el tamaño de ventana
  splitNombre && splitNombre.revert();
  splitNombre = new SplitText(".nombre-animado.text", { type: "words" });

  splitSubtitulo && splitSubtitulo.revert();
  splitSubtitulo = new SplitText(".subtitulo-animado.text", { type: "chars" });
});
