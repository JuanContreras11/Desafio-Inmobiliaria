/*Script Propiedades en Venta*/

const propiedades_ventas = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banos: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    banos: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    banos: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
];

const ventaSection = document.querySelector(".ventas");
for (let venta of propiedades_ventas) {
  const colorIconPets = venta.pets ? "text-success" : "text-danger";
  const petsIcon = venta.pets ? "fas fa-paw" : "fas fa-ban";
  const petsText = venta.pets
    ? "Mascotas permitidas"
    : "No se permiten mascotas";
  const colorIconSmoke = venta.smoke ? "text-success" : "text-danger";
  const smokeIcon = venta.smoke ? "fas fa-smoking" : "fas fa-smoking-ban";
  const smokeText = venta.smoke ? "Permitido fumar" : "No se permite fumar";
  ventaSection.innerHTML += `
        
        
          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${venta.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${venta.nombre}
                </h5>
                <p class="card-text">
                  ${venta.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${venta.banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${venta.costo}</p>
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
