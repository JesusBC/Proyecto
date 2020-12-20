import { Component, OnInit } from '@angular/core';
import {PruebaService} from "../../../../services/prueba.service";

@Component({
  selector: 'app-especificaciones2',
  templateUrl: './especificaciones2.component.html',
  styleUrls: ['./especificaciones2.component.sass'],
  providers: [PruebaService]
})
export class Especificaciones2Component implements OnInit {
  pos :number;
  constructor(public prueba: PruebaService,  ) { }


  ngOnInit() {
    this.pos = JSON.parse(localStorage.getItem('pos'));
  }

}
