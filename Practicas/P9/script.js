/**
 * Se muestra una tabla de los centros educativos MEDAC en Córdoba. 
 * Este listado será obtenido a través de un XML a través de Ayax con JQuery
 */
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "centros.xml",
    dataType: "XML",
    success: function (xml) {
      let idCentro = 0;
      $(xml).find("centro").each(function () {
        let nombre = $(this).find("nombre").text();
        let direccion = $(this).find("direccion").text();
        let latitud = $(this).find("latitud").text();
        let longitud = $(this).find("longitud").text();
        idCentro++;

        $("#centros").append(
          "<tr onclick='obtenerDatosCentrosMedac(" + idCentro + ")' id='" +
          idCentro +
          "'> <td>" +
          nombre +
          "</td> <td>" +
          direccion +
          "</td> <td>" +
          latitud +
          "</td> <td>" +
          longitud +
          "</td> </tr>"
        );
      });
    },
  });
});

/**
 * Función que recbe un "idCentro", dependiendo del id recibido mostrará los datos de un centro u otro
 * @param {*} idCentro 
 */
function obtenerDatosCentrosMedac(idCentro) {
  switch (idCentro) {
    case 1:
      obtenerDatoSArena();
      break;
    case 2:
      obtenerDatosCordoba();
      break;
  }
}


/**
 * Función que obtiene los datos del centro "Medac Arena" mediante Ayax con JQuery
 * Despúes los inserta en una tabla en el documento HTML.
 */
function obtenerDatoSArena() {
  $('#restaurantes').empty();
  $('#filaContenidoRestaurantes').css('visibility', 'visible');
  $.ajax({
    type: "GET",
    url: "restaurantes.xml",
    dataType: "XML",
    success: function (xml) {
      $(xml).find("arena").each(function () {
        let nombre = $(this).find("nombre").text();
        let direccion = $(this).find("direccion").text();
        let latitud = $(this).find("latitud").text();
        let longitud = $(this).find("longitud").text();
        let puntuacion = $(this).find("puntuacion").text();

        $("#restaurantes").append(
          "<tr> <td>" +
          nombre +
          "</td> <td>" +
          direccion +
          "</td> <td>" +
          latitud +
          "</td> <td>" +
          longitud +
          "</td> <td>" +
          puntuacion +
          "</td> </tr>"
        );
      });
    },
  });
  $('body').prepend('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCEmbjOceWmqNRa-GCAk7SwzR22Ee_AXFs&callback=iniciarMapaArena"></script>');
}


/**
 * Función que obtiene los datos del centro "Medac Córdoba" mediante Ayax con JQuery
 * Despúes los inserta en una tabla en el documento HTML.
 */
function obtenerDatosCordoba() {
  $('#restaurantes').empty();
  $('#filaContenidoRestaurantes').css('visibility', 'visible');
  $.ajax({
    type: "GET",
    url: "restaurantes.xml",
    dataType: "XML",
    success: function (xml) {
      $(xml).find("cordoba").each(function () {
        let nombre = $(this).find("nombre").text();
        let direccion = $(this).find("direccion").text();
        let latitud = $(this).find("latitud").text();
        let longitud = $(this).find("longitud").text();
        let puntuacion = $(this).find("puntuacion").text();

        $("#restaurantes").append(
          "<tr> <td>" +
          nombre +
          "</td> <td>" +
          direccion +
          "</td> <td>" +
          latitud +
          "</td> <td>" +
          longitud +
          "</td> <td>" +
          puntuacion +
          "</td> </tr>"
        );
      });
    },
  });
  $('body').prepend('<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCEmbjOceWmqNRa-GCAk7SwzR22Ee_AXFs&callback=iniciarMapaCordoba"></script>');
}

/**
* Función que crea un mapa de Google Maps para Medac Arena
*/
function iniciarMapaArena() {
  let coordenadas = { lat: 37.8802566, lng: -4.8040947 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: coordenadas,
  });
  new google.maps.Marker({
    position: coordenadas,
    map: map,
  });
}

/**
* Función que crea un mapa de Google Maps para Medac Córdoba
*/
function iniciarMapaCordoba() {
  let coordenadas = { lat: 37.8746156, lng: -4.8004796 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: coordenadas,
  });
  new google.maps.Marker({
    position: coordenadas,
    map: map,
  });
}