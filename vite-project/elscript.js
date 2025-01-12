// Array con la información de las tarjetas
const tarjetas = [
    {
      titulo: "Novedades",
      descripcion: "Consulta las recetas más recientes",
      icono: "src/imagen/Novedades.png"
    },
    {
      titulo: "Favoritos",
      descripcion: "Vuelve a ver los platos que tanto te han gustado",
      icono: "src/imagen/favoritos.png"
    },
    {
      titulo: "Mis Pedidos",
      descripcion: "Consulta los últimos pedidos que has realizado",
      icono: "src/imagen/misPedidos.png"
    },
    {
      titulo: "Seguridad",
      descripcion: "Comprueba tus datos",
      icono: "src/imagen/seguridad.png"
    },
    {
      titulo: "Más información",
      descripcion: "Política de privacidad, gestión de tus datos",
      icono: "src/imagen/masinformación.png"
    },
    {
      titulo: "Contáctanos",
      descripcion: "¿Tienes dudas? Ponte en contacto con nosotros",
      icono: "src/imagen/Contacto.png"
    }
  ];
  
  // Referencia al contenedor en el DOM
  const gridContainer = document.getElementById('grid-container');
  
  // Crear dinámicamente las tarjetas
  tarjetas.forEach(tarjeta => {
    // Crear el elemento tarjeta
    const card = document.createElement('div');
    card.classList.add('card');
  
    // Crear la imagen
    const img = document.createElement('img');
    img.src = tarjeta.icono;
    img.alt = `Icono de ${tarjeta.titulo}`;
  
    // Crear el título
    const titulo = document.createElement('h2');
    titulo.textContent = tarjeta.titulo;
  
    // Crear la descripción
    const descripcion = document.createElement('p');
    descripcion.textContent = tarjeta.descripcion;
  
    // Añadir los elementos a la tarjeta
    card.appendChild(img);
    card.appendChild(titulo);
    card.appendChild(descripcion);
  
    // Añadir la tarjeta al contenedor
    gridContainer.appendChild(card);
  });
  