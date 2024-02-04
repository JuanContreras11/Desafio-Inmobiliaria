/*Script Propiedades en Alquiler*/

const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    banos: 2,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
];

const alquilerSection = document.querySelector(".alquileres");

for (let alquiler of propiedades_alquiler) {
  const colorIconPets = alquiler.pets ? "text-success" : "text-danger";
  const petsIcon = alquiler.pets ? "fas fa-paw" : "fas fa-ban";
  const petsText = alquiler.pets
    ? "Mascotas permitidas"
    : "No se permiten mascotas";
  const colorIconSmoke = alquiler.smoke ? "text-success" : "text-danger";
  const smokeIcon = alquiler.smoke ? "fas fa-smoking" : "fas fa-smoking-ban";
  const smokeText = alquiler.smoke ? "Permitido fumar" : "No se permite fumar";
  alquilerSection.innerHTML += `
    
    
      <div class="col-md-4 mb-4">
        <div class="card">
          <img
            src="${alquiler.src}"
            class="card-img-top"
            alt="Imagen del departamento"
          />
          <div class="card-body">
            <h5 class="card-title">
              ${alquiler.nombre}
            </h5>
            <p class="card-text">
              ${alquiler.descripcion}
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}
            </p>
            <p>
              <i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones |
              <i class="fas fa-bath"></i> ${alquiler.banos} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</p>
            <p class="${colorIconSmoke}">
              <i class="fas ${smokeIcon}"></i> ${smokeText}
            </p>
            <p class="${colorIconPets}">
              <i class="${petsIcon}"></i> ${petsText}
            </p>
          </div>
        </div>
      </div>
      
     
     
    `;
}

