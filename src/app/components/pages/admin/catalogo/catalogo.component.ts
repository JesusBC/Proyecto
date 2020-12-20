import { Component, OnInit } from '@angular/core';
import {PruebaService} from "../../../../services/prueba.service";

import { NzModalService} from "ng-zorro-antd";
import {AgregarComponent} from "../../../shared/modal/agregar/agregar.component";
import {ActualizarComponent} from "../../../shared/modal/actualizar/actualizar.component";

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.sass']
})
export class CatalogoComponent implements OnInit {

  constructor(
    public prueba: PruebaService,
    public modalService: NzModalService,



  ) { }

  ngOnInit() {
  }




  getAll(){

    this.prueba.getAll().subscribe((data) => {
      console.log('aca');
      console.log(data);
      console.log('sirve');
      this.prueba.tarjetaArmas =data;

      this.prueba.tarjetaArmas=Array.of(this.prueba.tarjetaArmas);
    }, error => {

      console.log(error);
      console.log('esta caga no sirve')
    });
  }




  showModalAgregar(){
    console.log('llamando la funcion')


    const  modal = this.modalService.create({
      nzTitle: 'AGREGAR PRODUCTOS' ,
      nzContent: AgregarComponent,
      nzFooter: null,
    });
  }

  showModalActualizar(){
    console.log('llamando la funcion')


    const  modal = this.modalService.create({
      nzTitle: 'ACTUALIZAR PRODUCTOS' ,
      nzContent:ActualizarComponent ,
      nzFooter: null,
    });
  }





}
