<p align="right"><a href="https://github.com/JoseAlbertoZurera/DesarrolloWebEntornoCliente">Volver al Menú Principal</a></p>

# Práctica 9 - Desarrollo Asíncrono

## Objetivos

Página web en la que se muestra un listado de los centros educativos MEDAC en Córdoba. Este listado será obtenido a través de un XML, en el que cada item de la lista tendrá los siguientes datos:
* Nombre.
* Dirección.
* Coordenadas (latitud, longitud).

Este archivo XML será cargado y mostrado en la página web mediante AJAX con JQuery.

Una vez se haga clic en uno de los centros, se muestra en otra parte de la página web, también mediante AJAX, un listado sacado de otro XML con 3 restaurantes/bares cercanos a este. Estos tienen los siguientes datos:
* Nombre.
* Dirección.
* Coordenadas (latitud, longitud).
* Puntuación Google Maps.

Por último, muestra mediante una llamada asíncrona a la API de Google Static Maps el mapa de Google Maps representado dentro de la página web con la ubicación del centro de estudios seleccionado.

## Funcionalidad

Al cargar la página se muestra una tabla con cada uno de los centros MEDAC que hay que hay en Córdoba, al hacer click en la fila del centro se muestra otra tabla con 3 restaurantes/bares cercanos a este junto con un mapa de Google Maps con la ubicación del centro de estudios seleccionado.

Los datos serán cargados desde XML y mostrado en la página web mediante AJAX con JQuery.

## Métodos JavaScript

* **obtenerDatosCentrosMedac(idCentro):** Función que recbe un "idCentro", dependiendo del id recibido mostrará los datos de un centro u otro.

```JavaScript
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
```  

* **obtenerDatoSArena():** Función que obtiene los datos del centro "Medac Arena" mediante Ayax con JQuery. Despúes los inserta en una tabla en el documento HTML.

```JavaScript
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
```  

* **obtenerDatosCordoba():** Función que obtiene los datos del centro "Medac Córdoba" mediante Ayax con JQuery. Despúes los inserta en una tabla en el documento HTML.

```JavaScript
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
```

* **iniciarMapaArena():** Función que crea un mapa de Google Maps para Medac Arena.

```JavaScript
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
```  

* **iniciarMapaCordoba():** Función que crea un mapa de Google Maps para Medac Córdoba

```JavaScript
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
```  

***Lenguajes Usados***

* HTML
* CSS
* JavaScript
* XML

***Librerias Usadas***

* jQuery
* Bootstrap 5

### Captura

![sgml1.png](captura.png)

<p align="right"><a href="#top">Volver Arriba</a></p>