import { Component, OnInit } from '@angular/core';
import {PruebaService} from '../../../../services/prueba.service';
import {EspecificacionesComponent} from "../../../shared/modal/especificaciones/especificaciones.component";
import {NzModalService} from "ng-zorro-antd";


@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.sass'],
  providers:[PruebaService]
})
export class ArmasComponent implements OnInit {
 pos: number;
  constructor(
    public prueba: PruebaService,
    public modalService: NzModalService,

    ) { }

  ngOnInit(): void {

  }
  funcion(i){
    localStorage.setItem('pos', JSON.stringify(i));
    this.pos=i;
    this.showModalDescripcion(this.pos);
  }

  showModalDescripcion(i){
    const  modal = this.modalService.create({
      nzTitle: 'Descripcion',
      nzContent: EspecificacionesComponent,
      nzFooter: null,
    });
  }


}
