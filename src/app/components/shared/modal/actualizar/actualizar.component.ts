import { Component, OnInit } from '@angular/core';
import {NzModalRef} from "ng-zorro-antd";
import {PruebaService} from "../../../../services/prueba.service";
import {Agregar} from "../../../../models/agregar";

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.sass']
})
export class ActualizarComponent implements OnInit {


  constructor(
    private modal: NzModalRef,
    public pruebaService: PruebaService,
  ) { }

  ngOnInit() {
  }
  cancelar()
  {
    this.modal.destroy();
  }


  enviarDatos(){
    console.log('Datos enviados')
    console.log(this.update );
    localStorage.setItem('userL',JSON.stringify(this.update));
    this.update(this.update);
  }

  update(update){
    this.pruebaService.update(update).subscribe((data) => {

      console.log('update sirviendo');
      console.log(data);



    }, error => {

      console.log('error update sirviendo');
      console.log(error);

    });
  }



}
