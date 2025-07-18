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

// Animación para el botón de descarga del CV (.btn)
// Hace que aparezca con un efecto de zoom desde escala 0
gsap.from(".btn", {
  duration: 1,                // Dura 1 segundo
  scale: 0,                   // Empieza desde escala 0 (invisible y pequeño)
  opacity: 0,                 // También empieza invisible
  delay: 1.2,                 // Aparece después de las secciones
  ease: "back.out(1.7)"       // Efecto con rebote hacia afuera (muy visual)
});
