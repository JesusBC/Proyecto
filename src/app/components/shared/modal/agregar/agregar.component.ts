import { Component, OnInit } from '@angular/core';
import {NzModalRef} from "ng-zorro-antd";
import {PruebaService} from "../../../../services/prueba.service";
import {Agregar} from "../../../../models/agregar";


@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.sass']
})
export class AgregarComponent implements OnInit {
    agregar: Agregar = {
    nombre_proyecto: null,
    titulo: null,
    precio: null,
    descripcion: null,

    imagen: null,
  }

  constructor(

    private modal: NzModalRef,
    public pruebaService: PruebaService,

  ) { }

  ngOnInit(): void {
  }

  cancelar()
  {
    this.modal.destroy();
  }

  enviarDatos(){
    console.log('Datos enviados')
    console.log(this.agregar );
    localStorage.setItem('userL',JSON.stringify(this.agregar));
    this.create(this.agregar);
  }

  create(agregar){
    this.pruebaService.create(agregar).subscribe((data) => {

      console.log('create sirviendo');
      console.log(data);



    }, error => {

      console.log('error create sirviendo');
      console.log(error);

    });
  }




}
