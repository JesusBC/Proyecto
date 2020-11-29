import { Component, OnInit } from '@angular/core';
import {PruebaService} from "../../../../services/prueba.service";

@Component({
  selector: 'app-especificaciones',
  templateUrl: './especificaciones.component.html',
  styleUrls: ['./especificaciones.component.sass'],
  providers: [PruebaService]
})
export class EspecificacionesComponent implements OnInit {
 pos :number;
  constructor(public prueba: PruebaService,  ) { }

  ngOnInit():void {



  }

}
