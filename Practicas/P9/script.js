$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "centros.xml",
    dataType: "XML",
    success: function (xml) {
      let contador = 0;
      $(xml).find("centro").each(function () {
        let nombre = $(this).find("nombre").text();
        let direccion = $(this).find("direccion").text();
        let latitud = $(this).find("latitud").text();
        let longitud = $(this).find("longitud").text();
        contador++;

        $("#centros").append(
          "<tr onclick='obtenerId(" + contador + ")' id='" +
          contador +
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

function obtenerId(id) {
  switch (id) {
    case 1:
      $('#restaurantes').empty();
      $('#tablaRestaurantes').css('display', 'initial');
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
      break;
    case 2:
      $('#restaurantes').empty();
      $('#tablaRestaurantes').css('display', 'initial');
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
      break;
  }



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
