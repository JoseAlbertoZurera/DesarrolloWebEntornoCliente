function validacionFormulario() {
  let nombre = document.getElementById("name").value;
  let apellido1 = document.getElementById("apellido1").value;
  let apellido2 = document.getElementById("apellido2").value;
  let genero = document.getElementById("genero").value;
  let fechaNacimiento = document.getElementById("fechaNacimiento").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  alert(nombre);
}

function obtenerFechaActual() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;
  return today;
}

document.getElementById("fechaNacimiento").max = obtenerFechaActual();