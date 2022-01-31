// Establecemos el número de estrellas que queremos mostrar
const numEstrellas = 500;

function iniciar() {
  sonido.play();
  $('#contenedorPrincipal').css('display', 'block');
  $('#buttonIniciar').css('display', 'none');
}

/**
 * Función que obtiene valores "X, Y" aleatorios basados ​​en el tamaño del contenedor
 * @returns
 */
function getRandomPosition() {
  let y = window.innerWidth-20;
  let x = window.innerHeight-20;
  let randomX = Math.floor(Math.random() * x);
  let randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

// Creamos las estrellas
for (let i = 0; i < numEstrellas; i++) {
  let estrellas = document.createElement("div");
  estrellas.className = "estrellas";
  let xy = getRandomPosition();
  estrellas.style.top = xy[0] + "px";
  estrellas.style.left = xy[1] + "px";
  document.body.append(estrellas);
}

