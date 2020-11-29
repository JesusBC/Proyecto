import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PruebaService{

  tarjetaArmas = [
    {

      "nombre": "fusil traumatico aksa m-x5",
      "imagen": "assets/image/mx-05.jpg",
      "precio": "3000000"

    },
    {

      "nombre": "fusil traumatico aksa m-x4",
      "imagen": "/assets/image/mx-04.jpg",
      "precio":  "3000000"
    },
    {

      "nombre": "fusil traumatico aksa m-x1",
      "imagen": "assets/image/mx-01.jpg",
      "precio":  "3000000"
    },
    {

      "nombre": "pistola traumatica issc m22-tr",
      "imagen": "assets/image/01.jpg",
      "precio":  "700000"
    },
    {

      "nombre": "pistola blow tr 92d",
      "imagen": "assets/image/1-26.jpg",
      "precio":  "650000"
    },
    {

      "nombre": "pistola ekol p29",
      "imagen": "assets/image/9.jpg",
      "precio":  "700000"
    },
    {

      "nombre": "revolver majorviper 4.5",
      "imagen": "assets/image/revolver.jpg",
      "precio":  "650000"
    },
    {

      "nombre": "revolver traumatico ekol viper 2.5",
      "imagen": "assets/image/re1.jpg",
      "precio":  "650000"
    },
    {

      "nombre": "revolver traumatico zoraki 2.5",
      "imagen": "assets/image/re_zoraki.jpg",
      "precio": "700000"
    },
  ];



  tarjetaAccesorio = [
    {

      "nombre": "mira telescopica 4x20 para rifle",
      "imagen": "assets/image/mira.jpg",
      "precio":  "120000"
    },
    {

      "nombre": "mira telescopica 6x32 bushnell",
      "imagen": "assets/image/mira1.jpg",
      "precio":  "150000"
    },
    {

      "nombre": "chapuza externa revolver de cuero",
      "imagen": "assets/image/chapuza-.jpg",
      "precio": "70000"
    },
    {

      "nombre": "mira telescopica accurate",
      "imagen": "assets/image/mira-te.jpg",
      "precio":  "200000"
    },
    {

      "nombre": "proveedor pistola m92",
      "imagen": "assets/image/proveedor.jpg",
      "precio":  "115000"
    },
    {

      "nombre":" mira laser",
     "imagen": "assets/image/mira-laser.jpg",
      "precio":  "83700"
    },
  ];
}
