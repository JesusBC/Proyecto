import { Component, OnInit } from '@angular/core';
import {PruebaService} from "../../../../services/prueba.service";
import {NzModalService} from "ng-zorro-antd";
import {Especificaciones2Component} from "../../../shared/modal/especificaciones2/especificaciones2.component";


@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.sass'],
  providers:[PruebaService]
})
export class DispositivosComponent implements OnInit {

  constructor(public prueba: PruebaService,
              public modalService: NzModalService) { }
  pos : number;
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
      nzContent: Especificaciones2Component,
      nzFooter: null,
    });
  }

}
