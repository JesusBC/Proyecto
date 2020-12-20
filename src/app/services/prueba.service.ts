import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Agregar} from "../models/agregar";

@Injectable({
  providedIn: "root"
})
export class PruebaService{

  tarjetaArmas: any;


  tarjetaAccesorio = [
    {

      "nombre": "mira telescopica 4x20 para rifle",
      "imagen": "assets/image/mira.jpg",
      "precio":  "120000",
      "tipo": "accesorio"
    },
    {

      "nombre": "mira telescopica 6x32 bushnell",
      "imagen": "assets/image/mira1.jpg",
      "precio":  "150000",
      "tipo": "accesorio"
    },
    {

      "nombre": "chapuza externa revolver de cuero",
      "imagen": "assets/image/chapuza-.jpg",
      "precio": "70000",
      "tipo": "accesorio"
    },
    {

      "nombre": "mira telescopica accurate",
      "imagen": "assets/image/mira-te.jpg",
      "precio":  "200000",
      "tipo": "accesorio"
    },
    {

      "nombre": "proveedor pistola m92",
      "imagen": "assets/image/proveedor.jpg",
      "precio":  "115000",
      "tipo": "accesorio"
    },
    {

      "nombre":" mira laser",
     "imagen": "assets/image/mira-laser.jpg",
      "precio":  "83700",
      "tipo": "accesorio"
    },
  ];

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService

  ) { }

  getAll(){
    return this.httpClient.get(this.authService.API+'product/all',{headers: this.authService.headers});
  }

  create(agregar){
    return this.httpClient.post(this.authService.API+'add/product', agregar, {headers: this.authService.headers});
  }

  update(update){
    return this.httpClient.put(this.authService.API+'update/product', update, {headers: this.authService.headers} );
  }

  disable(){
    return this.httpClient.put(this.authService.API+'disable/product',{'municipality_id': 14}, {headers: this.authService.headers} );
  }

  enable(){
    return this.httpClient.put(this.authService.API+'enable/product',{'municipality_id': 14}, {headers: this.authService.headers} );
  }

  getOne(){
    return this.httpClient.post(this.authService.API+'query/product',{'municipality_id': 14}, {headers: this.authService.headers} );
  }

}
