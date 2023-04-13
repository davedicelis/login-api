$(document).ready(function() {

    // Enviamos una solicitud GET a una API que devuelve una lista de ciudades
    $.ajax({
        type: "GET", // especificamos que la solicitud es de tipo GET
        url: "https://plataforma.visasgomezyasociados.com/API/cityList", // especificamos la URL de la API
        contentType: "application/json; charset=utf-8", // especificamos el tipo de contenido que esperamos de la respuesta
        dataType: "json", // especificamos el tipo de datos que esperamos de la respuesta

        // Si la solicitud tiene éxito, manejamos los resultados
        success: function(result) {
            // Iteramos sobre cada ciudad en la respuesta
            $.each(result, function(index, pais) {
                // Agregamos un pais a la lista desplegable
                
                $('#paises').append($('<option>', {
                    value: pais.name,
                    text: pais.name
                }));
            });
        }
    });
});
