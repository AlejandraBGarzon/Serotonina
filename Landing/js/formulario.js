function mostrarSubcategorias(valor) {
    let subcategoriasAnsiedad = document.getElementById("subcategorias_ansiedad");
    let subcategoriasDepresion = document.getElementById("subcategorias_depresion");
    let subcategoriasEstres = document.getElementById("subcategorias_estres");
    let subcategoriasRelaciones = document.getElementById("subcategorias_relaciones");
    
    if (valor === "ansiedad") {
      subcategoriasAnsiedad.style.display = "block";
      subcategoriasDepresion.style.display = "none";
      subcategoriasEstres.style.display = "none";
      subcategoriasRelaciones.style.display = "none";
      subcategoriasAutoestima.style.display = "none";
    } else if (valor === "depresion") {
      subcategoriasAnsiedad.style.display = "none";
      subcategoriasDepresion.style.display = "block";
      subcategoriasEstres.style.display = "none";
      subcategoriasRelaciones.style.display = "none";
      subcategoriasAutoestima.style.display = "none";
    } else if (valor === "estres") {
      subcategoriasAnsiedad.style.display = "none";
      subcategoriasDepresion.style.display = "none";
      subcategoriasEstres.style.display = "block";
      subcategoriasRelaciones.style.display = "none";
      subcategoriasAutoestima.style.display = "none";
    } else if (valor === "relaciones") {
      subcategoriasAnsiedad.style.display = "none";
      subcategoriasDepresion.style.display = "none";
      subcategoriasEstres.style.display = "none";
      subcategoriasRelaciones.style.display = "block";
      subcategoriasAutoestima.style.display = "none";
    } else {
      subcategoriasAnsiedad.style.display = "none";
      subcategoriasDepresion.style.display = "none";
      subcategoriasEstres.style.display = "none";
      subcategoriasRelaciones.style.display = "none";
    }
  }

  function mostrarEnfoques(valor) {
    let enfoquesTerapeuticos = document.getElementById("enfoques-terapeuticos");
  
    if (valor === "si") {
      enfoquesTerapeuticos.style.display = "block";
    } else {
      enfoquesTerapeuticos.style.display = "none";
    }
  }

// Seleccionar el formulario por su identificador
const formulario = document.getElementById('miFormulario');

// Agregar un evento de escucha para el envío del formulario
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Aquí puedes realizar el procesamiento de las respuestas del formulario
  // Obten los valores de los campos del formulario y realiza las operaciones necesarias

  const nombre = document.getElementById('name').value;
  const edad = document.getElementById('edad').value;
  const especificar_motivo = document.getElementById('especificar_motivo').value;
  const otro_enfoque = document.getElementById('otro-enfoque').value;
  const comentarios_add = document.getElementById('additional-comments').value;

  const generoSelect = document.getElementById('genero').value;
  const serviceSelect = document.getElementById('previous-services').value;
  const motivoSelect = document.getElementById('motivo_busqueda').value;
  const subASelect = document.getElementById('subcategoria_ansiedad').value;
  const subDSelect = document.getElementById('subcategoria_depresion').value;
  const subESelect = document.getElementById('subcategorias_estres').value;
  const subRSelect = document.getElementById('subcategoria_relaciones').value;
  const enfoqueSelect = document.getElementById('enfoque').value;
  const subFocusSelect = document.getElementById('enfoques-terapeuticos').value;
  const perceptionSelect = document.getElementById('perception').value;

  // Aquí puedes redireccionar a la página de destino pasando los datos de las respuestas
  // Utiliza window.location.href para redirigir y agrega los datos como parámetros en la URL
  window.location.href = 'ruta-de-destino.html?nombre=' + encodeURIComponent(nombre) + '&edad=' + encodeURIComponent(edad) + '&especificar_motivo=' + encodeURIComponent(especificar_motivo) + '&otro_enfoque=' + encodeURIComponent(otro_enfoque) + '&comentarios_add=' + encodeURIComponent(comentarios_add) + '&genero=' + encodeURIComponent(generoSelect) + '&service=' + encodeURIComponent(serviceSelect) + '&motivo=' + encodeURIComponent(motivoSelect) + '&subA=' + encodeURIComponent(subASelect) + '&subD=' + encodeURIComponent(subDSelect) + '&subE=' + encodeURIComponent(subESelect) + '&subR=' + encodeURIComponent(subRSelect) + '&enfoque=' + encodeURIComponent(enfoqueSelect) + '&subFocus=' + encodeURIComponent(subFocusSelect) + '&perception=' + encodeURIComponent(perceptionSelect);
});
