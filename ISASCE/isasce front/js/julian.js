function julian() {
    limpiarCamposJulian();
    // Acá de define la función para guardar datos dentro de la función mostrarModal (función anidada)
    function guardarDatos() {
        /**
         * Acá se capturan los datos del DOM
         */

        var input01 = $("#input01").val();
        var input02 = $("#input02").val();
        var input03 = $("#input03").val();

        arr_input=[input01,input02,input03];
        obj_input={datos:arr_input};

        console.log(obj_input);
/** 
        // Por ejemplo:
        var fechaInventario = $("#input_fecha_inventario").val();
        console.log('Fecha de ingreso inventario:', fechaInventario);
        var nombreProducto = $("#input_nombre_producto_modal_inventario").val();
        console.log('Nombre producto:', nombreProducto);
        /** 
         * Se crea la ruta para enviar los datos al back end mediante la tecnología FETCH de Js
         *  
         */
        // Datos a enviar al servidor en formato JSON // agregar datos faltantes
        /** var datos = {
            fechaInventario: fechaInventario,
            nombreProducto: nombreProducto
        };

        // Configuración para el fetch
        var fetchConfig = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        };

        // URL del endpoint en el servidor Node.js
        var url = 'URL_DEL_ENDPOINT';

        // Realizar el fetch
        fetch(url, fetchConfig)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta del servidor.');
                }
                return response.json();
            })
            .then(data => {
                // Aquí manejamos la respuesta exitosa del servidor (data)
                console.log('Respuesta del servidor:', data);
                // Acá se puede mostrar una alerta o actualizar el DOM según se requiera
                Swal.fire('Datos guardados correctamente!', '', 'success');
            })
            .catch(error => {
                // Aquí manejamos los errores del fetch o del servidor
                console.error('Error:', error);
                Swal.fire('Error al guardar los datos.', '', 'error');
            });

            COMENTARIO **/

    }

    // Asignaa la función guardarDatos al botón de guardar en el modal
    $('#boton_guardar_datos_inventario').click(guardarDatos);
}