import { Component, OnInit } from '@angular/core';
import {PruebaService} from '../../../../services/prueba.service';
import {NzModalService} from "ng-zorro-antd";
import {EspecificacionesComponent} from "../../../shared/modal/especificaciones/especificaciones.component";


@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.sass'],
  providers:[PruebaService]
})
export class ArmasComponent implements OnInit {
  pos : number;
  constructor(
    public prueba: PruebaService,
    public modalService: NzModalService
    ) { }

  ngOnInit(): void {

  }



  funcionarmas(i){
    localStorage.setItem('armas',JSON.stringify(i))
    console.log('aqui es ')
    console.log(i)
    this.pos = i;
    console.log(this.pos)
    this.showModalarmas(this.pos)
  }
  showModalarmas(i)
  {
    const  modal = this.modalService.create({
      nzTitle: 'Detalles',
      nzContent: EspecificacionesComponent,
      nzFooter: null,
    });
  }




}
