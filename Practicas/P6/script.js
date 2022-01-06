/**
 * Funcion que recibe los valores del formulario, los almacena en variables y los muestra en forma de alerta
 *  */ 
function validacionFormulario() {
  let nombre = document.formulario.nombre.value;
  let apellido1 = document.formulario.apellido1.value;
  let apellido2 = document.formulario.apellido2.value;
  let fechaNacimiento = document.formulario.fechaNacimiento.value;
  let genero = document.formulario.genero.value;
  let email = document.formulario.email.value;
  let password = document.formulario.password.value;

  alert(
    "Nombre: " +
      nombre +
      "\n" +
      "Apellido 1: " +
      apellido1 +
      "\n" +
      "Apellido 2: " +
      apellido2 +
      "\n" +
      "Fecha de nacimiento: " +
      fechaNacimiento +
      "\n" +
      "Genero: " +
      genero +
      "\n" +
      "Email: " +
      email +
      "\n" +
      "Contraseña: " +
      password
  );
}

/**
 * Función que recoge la hora local y devuelve la fecha actual en formato "yyyy-mm-dd"
 * @returns fecha
 */
function obtenerFechaActual() {
  var fecha = new Date();
  var dd = fecha.getDate(); // El valor devuelto es un número entero, entre 1 y 31, representa el día del mes para la fecha dada según la hora local.
  var mm = fecha.getMonth() + 1; // Devuelve el mes actual, donde el número 0 indica el primer mes del año según la hora local.
  var yyyy = fecha.getFullYear(); // Devuelve el año de la fecha indicada acorde a la hora local

  if (dd < 10) {
    dd = '0' + dd; //Añadimos un "0" delante del día en el caso donde el valor sea menor de 10
  }
  
  if (mm < 10) {
    mm = '0' + mm; //Añadimos un "0" delante del mes en el caso donde el valor sea menor de 10
  }

  fecha = yyyy + "-" + mm + "-" + dd;
  return fecha;
}

// LLamamos a la función "obtenerFechaActual()" para obtener la fecha actual y la añadimos como valor máximo al formulario
document.getElementById("fechaNacimiento").max = obtenerFechaActual();