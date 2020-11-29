import { Component, OnInit } from '@angular/core';
import {PruebaService} from "../../../../services/prueba.service";


@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.sass'],
  providers:[PruebaService]
})
export class DispositivosComponent implements OnInit {

  constructor(public prueba: PruebaService) { }
  pos : number;
  ngOnInit(): void {
  }



}
