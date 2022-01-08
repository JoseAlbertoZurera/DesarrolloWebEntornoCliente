/**
 * El evento "onClick" se ejecuta cuando el usuario hace clic en el elemento indicado
 * Cuando el usuario hace click en el campo contraseña se comprueba si la tecla "BloqMayus" está activada y de ser así muestra 
 * un mensaje al usuario informandole de que dicha tecla está activada
 */
password.addEventListener("click", function (event) {
  if (event.getModifierState("CapsLock")) {
    document.getElementById("avisoMayus").style.visibility = "visible"; // Hacemos visible el mensaje
  } else {
    document.getElementById("avisoMayus").style.visibility = "hidden"; // Ocultamos el mensaje
  }
});

/**
 * El evento "onKeyDown" se ejecuta cuando el usuario pulsa una tecla sin soltarla
 * Cuando el usuario presiona una tecla en el campo contraseña se comprueba si la tecla "BloqMayus" está activada y de ser así muestra 
   un mensaje al usuario informandole de que dicha tecla está activada
 */
password.addEventListener("keydown", function (event) {
  if (event.getModifierState("CapsLock")) {
    document.getElementById("avisoMayus").style.visibility = "visible"; // Hacemos visible el mensaje
  } else {
    document.getElementById("avisoMayus").style.visibility = "hidden"; // Ocultamos el mensaje
  }
});

/**
 * El evento "onBlur" se ejecuta cuando un elemento pierde el foco	
 * Cuando el usuario sale del campo contraseña se oculta el mensaje sin importar que la tecla "BloqMayus" esté activada
 */
password.addEventListener("blur", function () {
  document.getElementById("avisoMayus").style.visibility = "hidden"; // Ocultamos el mensaje
});






/**
 * El evento "onClick" se ejecuta cuando el usuario hace clic en el elemento indicado
 * Cuando el usuario hace un click en el mensaje de olvidar contraseña, se ejecuta una alerta con un delai de 500 milisegundos,
   este delai se añade para porder ajecutar el evento "dblclick" en el caso de que el usuario lo active
 */
olvidarContraseña.addEventListener("click", function () {
  setTimeout(function () {
    alertaPermisos();
  }, 500);
});

/**
 * El evento "onDbClick" se ejecuta cuando el usuario hace doble clic en el elemento indicado
 * Cuando el usuario hace doble click en el mensaje de olvidar contraseña, se redirige a una pagina web externa
 */
olvidarContraseña.addEventListener("dblclick", function () {
  location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});

/**
 * Función que ejecuta una alerta informando de que el usuario no tiene perimisos de superusuario para reestablecer la contraseña
 */
function alertaPermisos() {
  Swal.fire({
    icon: "error",
    title: "Lo Sentimos",
    text: "No tienes permisos de superusuario para reestablecer la contraseña",
  });
}  