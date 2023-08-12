function eudrey() {
    limpiarCamposEudrey();
    // Acá de define la función para guardar datos dentro de la función mostrarModal (función anidada)
    function guardarDatos() {
        /**
         * Acá se capturan los datos del DOM
         */

        // Por ejemplo:
        var fechaVenta = $("#input_fecha_venta").val();
        var facturaVenta = $("#input_factura_venta").val();
        var clienteVenta = $("#input_cliente_venta").val();
        var tipoDocCliente = $("#select_tipo_documento").val();
        var cedulaVenta = $("#input_cedula_venta").val();
        var emailVenta = $("#input_email_venta").val();
        var telefonoVenta = $("#input_telefono_venta").val();
        var articuloVenta = $("#input_articulo_venta").val();
        var cantidadVenta = $("#input_cantidad_venta").val();
        var valorVenta = $("#input_valor_venta").val();

        // validacion de datos ingresados
        if (fechaVenta === "") {
            Swal.fire('Debe ingresar la fecha de venta!', '', 'error');
            return;
        }

        if (facturaVenta === "") {
            Swal.fire('Debe ingresar el numero de la factura!', '', 'error');
            return;
        }

        if (clienteVenta === "") {
            Swal.fire('Debe ingresar el nombre del cliente!', '', 'error');
            return;
        }

        if (cedulaVenta === "") {
            Swal.fire('Debe ingresar el documento de identificacion del cliente!', '', 'error');
            return;
        }

        if (articuloVenta === "") {
            Swal.fire('Debe ingresar el nombre del articulo!', '', 'error');
            return;
        }

        if (cantidadVenta === "" || cantidadVenta < 1) {
            Swal.fire('La cantidad debe ser mayor a cero!', '', 'error');
            return;
        }

        if (valorVenta === "" || valorVenta < 1) {
            Swal.fire('El valor del articulo debe ser mayor a cero!', '', 'error');
            return;
        }

        console.log('Fecha de venta:', fechaVenta);
        console.log('Factura venta:', facturaVenta);
        console.log('Tipo doc cliente:', tipoDocCliente);
        console.log('Nombre cliente:', clienteVenta);
        console.log('Identificacion cliente:', cedulaVenta);
        console.log('email cliente:', emailVenta);
        console.log('telefono cliente:', telefonoVenta);
        console.log('Articulo:', articuloVenta);
        console.log('Cantidad:', cantidadVenta);
        console.log('Valor:', valorVenta);


        /** 
         * Se crea la ruta para enviar los datos al back end mediante la tecnología FETCH de Js
         *  
         */
        // Datos a enviar al servidor en formato JSON // Agregar los datos faltantes
        var datos = {
            fechaVenta: fechaVenta,
            facturaVenta: facturaVenta,
            clienteVenta: clienteVenta,
            tipoDocCliente: tipoDocCliente,
            cedulaVenta: cedulaVenta,
            emailVenta: emailVenta,
            telefonoVenta: telefonoVenta,
            articuloVenta: articuloVenta,
            cantidadVenta: cantidadVenta,
            valorVenta: valorVenta
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
                Swal.fire('Error al guardar los datos de la venta', '', 'error');
            });
    }

    // Asigna la función guardarDatos al botón de guardar en el modal
    $('#boton_guardar_datos_venta').click(guardarDatos);
}