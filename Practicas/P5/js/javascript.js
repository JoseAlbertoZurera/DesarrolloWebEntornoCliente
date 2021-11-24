// Creamos 3 objetos de tipo Persona, posteriormente creamos un Array y almacenamos las tres personas en el
let persona1 = new Persona("Jose", "López Aguilar");
let persona2 = new Persona("Manolo", "Arjona Cordoba");
let persona3 = new Persona("Antonio", "Cecilia Reyes");
let personas = new Array(persona1, persona2, persona3);

/**
 * Función que añade añade todos los valores almacenados en el Array a la tabla donde encuentre el id "tbody" del documento HTML
 */
function updateTable() {
  tbody.innerHTML = "";
  personas.forEach((persona, indice) => {
    let separaApellidos = persona.Apellidos.split(" ");

    if (separaApellidos.length == 1) {
      tbody.innerHTML += `<tr>
        <th>${++indice}</th>
        <td>${persona.Nombre}</td>
        <td>${separaApellidos[0]}</td>
        <td>${""}</td>
        </tr>`;
    } else {
      tbody.innerHTML += `<tr>
        <th>${++indice}</th>
        <td>${persona.Nombre}</td>
        <td>${separaApellidos[0]}</td>
        <td>${separaApellidos[1]}</td>
        </tr>`;
    }
  });
}

updateTable(); // LLamamos a la función "updateTable()" para rellenar la tabla del documento HTML


/**
 * Gracias el método "addEventListener()" el navegador esta atento a la interacción del usuario y cuando el usuario hace click en el botón
   se jecuta el siguiente código que basicamente es una Alerta que le pide al usuario el nombre y los apellidos, posteriormente los almacena en el Array
   y utiliza el metodo "updateTable()" para actulizar la tabla del doocumento HTML
 */
buttonAñadir.addEventListener("click", () => {
  swal({
    title: "Introduce el nombre de la persona",
    content: {
      element: "input",
      attributes: {
        placeholder: "Nombre",
      },
    },
  }).then((nombre) => {
    if (!nombre) return;
    swal({
      title: "Introduce los apellidos de la persona",
      content: {
        element: "input",
        attributes: {
          placeholder: "Apellidos",
        },
      },
    }).then((apellidos) => {
      if (!apellidos) return;
      personas.push(new Persona(nombre, apellidos));
      updateTable(); // LLamamos a la función "updateTable()" para rellenar la tabla del documento HTML
    });
  });
});


/**
 * Gracias el método "addEventListener()" el navegador esta atento a la interacción del usuario y cuando el usuario hace click en el botón 
   se jecuta el siguiente código que basicamente es una Alerta que le pide al usuario si desea eliminar la última fila, posteriormente 
   borra el último valor del Array y utiliza el metodo "updateTable()" para actulizar la tabla del doocumento HTML
 */
buttonEliminar.addEventListener("click", function () {
  swal({
    title: "¿Estas seguro?",
    text: "Una vez borrado no podrás recuperar el registro",
    icon: "warning",
    buttons: true,
  }).then((resultEliminar) => {
    if (resultEliminar) {
      personas.pop();
      swal("El último registro se ha eliminado correctamente", {
        icon: "success",
      });
      updateTable(); // LLamamos a la función "updateTable()" para rellenar la tabla del documento HTML
    }
  });
});


/**
 * Gracias el método "addEventListener()" el navegador esta atento a la interacción del usuario y cuando el usuario hace click en el botón 
   se jecuta el siguiente código que basicamente es una Alerta que le pide al usuario si desea eliminar todos los registros de la tabla, 
   posteriormente borra todos los datos del Array y utiliza el metodo "updateTable()" para actulizar la tabla del doocumento HTML
 */
buttonEliminarTodo.addEventListener("click", function () {
  swal({
    title: "¿Estas seguro?",
    text: "Una vez borrado no podrás recuperar los registros",
    icon: "warning",
    buttons: true,
  }).then((resultEliminar) => {
    if (resultEliminar) {
      personas.splice(0, personas.length);
      swal("Todos los registros se han eliminado correctamente", {
        icon: "success",
      });
      updateTable(); // LLamamos a la función "updateTable()" para rellenar la tabla del documento HTML
    }
  });
});
