// Establecemos el número de estrellas que queremos mostrar
const numEstrellas = 500;

/**
 * Función que inicia la animacíon y el sonido
 */
function iniciar() {
  sonido.play();
  $("#contenedorPrincipal").css("display", "block");
  $("#buttonIniciar").css("display", "none");
}

/**
 * Función que obtiene el acho y el alto aleatorio basados ​​en el tamaño de la ventana
 * @returns [randomHeight, randomWidth]
 */
function getRandomPosition() {
  let width = window.innerWidth - 20;
  let height = window.innerHeight - 20;
  let randomWidth = Math.floor(Math.random() * width);
  let randomHeight = Math.floor(Math.random() * height);
  return [randomHeight, randomWidth];
}

/**
 * Función que recibe un número de estrellas y las muestra como fondo en el body
 * @param {*} numEstrellas
 */
function crearEstrellas(numEstrellas) {
  $("div").remove(".estrellas");
  for (let i = 0; i < numEstrellas; i++) {
    let xy = getRandomPosition();
    $('body').append('<div class="estrellas" style="top: ' + xy[0] + 'px; left: ' + xy[1] + 'px";></div>');
  }
}


/**
 * Cuando la página carga completamente se crean las estrellas
 */
 window.addEventListener('load', function(){
  crearEstrellas(numEstrellas);
});

/**
 * Si se modifica el tamaño de la ventana se borran las estrellas y se crean nuevas
 */
window.addEventListener('resize', function(){
  crearEstrellas(numEstrellas);
});
