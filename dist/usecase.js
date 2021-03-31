const root = document.getElementById("root")

const elements = {
  Vasos: [
    {
      src: "./img/vasos/size1_1.png",
      alt: "Vasos Lisos",  
    },
    {
      src: "./img/vasos/size2_1.png",
      alt: "Vasos Pet y Tapas Domo"
    },
    {
      src: "./img/vasos/size1_2.png",
      alt: "Vasos de Polipapel"
    },
    {
      src: "./img/vasos/size2_2.png",
      alt: "Vasos Corrugados"
    }
  ],
  Cajas: [
    {
      src: "./img/cajas/size1_1.png",
      alt: "Cajas de Sandwich"
    },
    {
      src: "./img/cajas/size2_1.png",
      alt: "Cajitas de Tortas y Bocaditos"
    },
    {
      src: "./img/cajas/size1_2.png",
      alt: "Cajas para Cups Cake"
    },
    {
      src: "./img/cajas/size2_2.png",
      alt: "Cajas de Tortas y Bocaditos con tu logo"
    }
  ],
  Contenedores: [
    {
      src: "./img/contenedores/1.png",
      alt: "Contenedor blanco",
    },
    {
      src: "./img/contenedores/2.png",
      alt: "Contenedor con tapa domo",
    },
    {
      src: "./img/contenedores/3.png",
      alt: "Contenedores",
    },
    {
      src: "./img/contenedores/4.png",
      alt: "Contenedores Decorados",
    }
  ],
  Bolsas: [
    {
      src: "./img/bolsas/1.png",
      alt: "Bolsas de papel blanco"
    },
    {
      src: "./img/bolsas/2.png",
      alt: "Bolsas de papel kraft para sandwich"
    },
    {
      src: "./img/bolsas/3.png",
      alt: "Bolsas de papel kraft"
    }
  ],
  "Sorbetes y Removedores": [
    {
      src: "./img/sorbetes_removedores/1.png",
      alt: "Sorbetes de cartón"
    },
    {
      src: "./img/sorbetes_removedores/2.png",
      alt: "Sorbetes de plástico"
    },
    {
      src: "./img/sorbetes_removedores/3.png",
      alt: "Removedores"
    }
  ],
  "Bases y Pisos": [
    {
      src: "./img/bases_pisos/1.png",
      alt: "Pisos de 27, 30 y 36 cm de diámetro"
    },
    {
      src: "./img/bases_pisos/2.png",
      alt: "Pisos de 9, 22 y 25 cm de diámetro"
    },
    {
      src: "./img/bases_pisos/3.png",
      alt: "Base de cartón paja compacto contraplacado con duplex"  
    }
  ]
}

const createGallery = window["createGallery"];

if(createGallery) {
  createGallery(root, elements)
}