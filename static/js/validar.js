document.getElementById('formulario').addEventListener('submit', function(event) {
            var nombre = document.getElementById('nombre').value.trim();
            var apellido = document.getElementById('apellido').value.trim();
            var correo = document.getElementById('correo').value.trim();
            var curso = document.getElementById('curso').value;
            var consulta = document.getElementById('consulta').value.trim();
            var errorFlag = false;
    
            // Validación del nombre
            if (nombre === '') {
                document.getElementById('error-nombre').textContent = 'Por favor ingrese su nombre.';
                errorFlag = true;
            } else {
                document.getElementById('error-nombre').textContent = '';
            }
    
            // Validación del apellido
            if (apellido === '') {
                document.getElementById('error-apellido').textContent = 'Por favor ingrese su apellido.';
                errorFlag = true;
            } else {
                document.getElementById('error-apellido').textContent = '';
            }
    
            // Validación del correo electrónico
            if (correo === '') {
                document.getElementById('error-correo').textContent = 'Por favor ingrese su correo electrónico.';
                errorFlag = true;
            } else {
                document.getElementById('error-correo').textContent = '';
            }
    
            // Validación del curso
            if (curso === '') {
                document.getElementById('error-curso').textContent = 'Por favor seleccione un curso.';
                errorFlag = true;
            } else {
                document.getElementById('error-curso').textContent = '';
            }
    
            // Validación de la consulta
            if (consulta === '') {
                document.getElementById('error-consulta').textContent = 'Por favor ingrese su consulta.';
                errorFlag = true;
            } else {
                document.getElementById('error-consulta').textContent = '';
            }
    
            // Evitar el envío del formulario si hay errores
            if (errorFlag) {
                event.preventDefault();
            }
        });