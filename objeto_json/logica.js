
  // Objeto JSON con las ubicaciones
  // Definimos un objeto JSON que contiene información sobre las ubicaciones
  var locations = [

        {"nombre": "Bogotá", "latitud": 4.6097, "longitud": -74.0817},
    
        {"nombre": "Medellín", "latitud": 6.2442, "longitud": -75.5812},
    
        {"nombre": "Cali", "latitud": 3.4516, "longitud": -76.5320},
    
        {"nombre": "Barranquilla", "latitud": 10.9639, "longitud": -74.7969},
    
        {"nombre": "Cartagena", "latitud": 10.3910, "longitud": -75.4794},
    
        {"nombre": "Bucaramanga", "latitud": 7.1254, "longitud": -73.1198},
    
        {"nombre": "Santa Marta", "latitud": 11.2404, "longitud": -74.2115},
    
        {"nombre": "Pereira", "latitud": 4.8133, "longitud": -75.6961},
    
        {"nombre": "Manizales", "latitud": 5.0687, "longitud": -75.5174},
    
        {"nombre": "Villavicencio", "latitud": 4.1533, "longitud": -73.6350},
    
        {"nombre": "Pasto", "latitud": 1.2136, "longitud": -77.2811},
    
        {"nombre": "Ibagué", "latitud": 4.4389, "longitud": -75.2322},
    
        {"nombre": "Neiva", "latitud": 2.9273, "longitud": -75.2819},
    
        {"nombre": "Montería", "latitud": 8.7489, "longitud": -75.8810},
    
        {"nombre": "Cúcuta", "latitud": 7.8938, "longitud": -72.5078},
    
        {"nombre": "Popayán", "latitud": 2.4442, "longitud": -76.6145},
    
        {"nombre": "Tunja", "latitud": 5.5341, "longitud": -73.3634},
    
        {"nombre": "Arauca", "latitud": 7.0840, "longitud": -70.7576},
    
        {"nombre": "Quibdó", "latitud": 5.6922, "longitud": -76.6581},
    
        {"nombre": "Valledupar", "latitud": 10.4634, "longitud": -73.2532},
    
        {"nombre": "Yopal", "latitud": 5.3389, "longitud": -72.3947},
    
        {"nombre": "Riohacha", "latitud": 11.5444, "longitud": -72.9072},
    
        {"nombre": "Florencia", "latitud": 1.6144, "longitud": -75.6065},
    
        {"nombre": "Armenia", "latitud": 4.5343, "longitud": -75.6758},
    
        {"nombre": "Mocoa", "latitud": 1.1523, "longitud": -76.6428},
    
        {"nombre": "Mitú", "latitud": 1.1983, "longitud": -70.1732},
    
        {"nombre": "San Andrés", "latitud": 12.5788, "longitud": -81.7000},
    
        {"nombre": "Inírida", "latitud": 3.8652, "longitud": -67.9239},
    
        {"nombre": "Puerto Carreño", "latitud": 6.1850, "longitud": -67.4936},
    
        {"nombre": "Puerto Asís", "latitud": 0.5043, "longitud": -76.5016},
    
        {"nombre": "Puerto Leguízamo", "latitud": -0.1933, "longitud": -74.7775},
    
        {"nombre": "Leticia", "latitud": -4.2159, "longitud": -69.9403},
    
        {"nombre": "Puerto Inírida", "latitud": 3.8616, "longitud": -67.9297},
    
        {"nombre": "Arauquita", "latitud": 7.0311, "longitud": -71.4257},
    
        {"nombre": "Sogamoso", "latitud": 5.7196, "longitud": -72.9322},
    
        {"nombre": "Girardot", "latitud": 4.3094, "longitud": -74.8010},
    
        {"nombre": "Honda", "latitud": 5.1903, "longitud": -74.7416},
    
        {"nombre": "Lorica", "latitud": 9.2338, "longitud": -75.8204},
    
        {"nombre": "Ipiales", "latitud": 0.8225, "longitud": -77.6441},
    
        {"nombre": "Turbo", "latitud": 8.0882, "longitud": -76.7293},
    
        {"nombre": "Girón", "latitud": 7.0682, "longitud": -73.1696},
    
        {"nombre": "Chía", "latitud": 4.8614, "longitud": -74.0296},
    
        {"nombre": "Zipaquirá", "latitud": 5.0234, "longitud": -74.0071},
    
        {"nombre": "Moniquirá", "latitud": 5.8906, "longitud": -73.5506},
    
        {"nombre": "Aguazul", "latitud": 5.1694, "longitud": -72.6455},
    
        {"nombre": "El Carmen de Bolívar", "latitud": 9.7202, "longitud": -75.1200},
    
        {"nombre": "Sabaneta", "latitud": 6.1509, "longitud": -75.6236},
    
        {"nombre": "Ciénaga", "latitud": 11.0046, "longitud": -74.2365}
  ];
  
  // Crear el mapa
  // Creamos una instancia del mapa y lo configuramos inicialmente con coordenadas [0, 0] y un nivel de zoom de 10
  var map = L.map('map').setView([0, 0], 10);
  
  // Agregar una capa de mapa base
  // Agregamos una capa de mapa base utilizando OpenStreetMap como fuente de mapas
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  // Variables para el marcador y el índice de ubicación actual
  // Declaramos una variable "marker" para representar el marcador y una variable "index" para rastrear la ubicación actual
  var index = 0;
  var marker;
  
  // Función para mostrar una ubicación en el mapa
  function mostrarUbicacion(ubicacion) {
    // Eliminar el marcador anterior si existe
    // Si ya hay un marcador en el mapa, lo eliminamos antes de agregar uno nuevo
    if (marker) {
      map.removeLayer(marker);
    }
  
    // Crear y agregar un nuevo marcador
    // Creamos un nuevo marcador en la ubicación especificada y lo agregamos al mapa
    marker = L.marker([ubicacion.latitud, ubicacion.longitud]).addTo(map)
      .bindPopup(ubicacion.nombre)
      .openPopup();
  }
  
  // Función para mostrar la siguiente ubicación
  // Esta función se llama repetidamente para mostrar las ubicaciones en un intervalo de tiempo
  function mostrarSiguienteUbicacion() {
    if (index < locations.length) {
      // Mostrar la ubicación actual
      mostrarUbicacion(locations[index]);
      index++;
  
      // Si hay más ubicaciones, programar la siguiente llamada después de 1 segundo
      if (index < locations.length) {
        setTimeout(mostrarSiguienteUbicacion, 1000);
      }
    }
  }

  // Iniciar la visualización de ubicaciones
  // Llamamos a la función "mostrarSiguienteUbicacion" para comenzar a mostrar las ubicaciones
  mostrarSiguienteUbicacion();
