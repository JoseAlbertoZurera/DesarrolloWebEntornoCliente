$.ajax({
  type: "GET",
  url: "centros.xml",
  dataType: "XML",
  success: function (xml) {
    $(xml)
      .find("centro")
      .each(function () {
        let nombre = $(this).find("nombre").text();
        let direccion = $(this).find("direccion").text();
        let latitud = $(this).find("latitud").text();
        let longitud = $(this).find("longitud").text();

        $("tbody").append(
          "<tr> <td>" +
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
