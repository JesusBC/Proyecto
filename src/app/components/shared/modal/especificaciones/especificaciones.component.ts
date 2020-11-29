import { Component, OnInit } from '@angular/core';
import {PruebaService} from "../../../../services/prueba.service";

@Component({
  selector: 'app-especificaciones',
  templateUrl: './especificaciones.component.html',
  styleUrls: ['./especificaciones.component.sass']
})
export class EspecificacionesComponent implements OnInit {
 pos :number;
  constructor(public prueba: PruebaService,  ) { }

  ngOnInit():void {
    console.log('Aqui esta')
    this.pos = JSON.parse(localStorage.getItem('pos'));
    console.log(this.pos , 'holaaa')
  }

}
