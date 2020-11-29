import { Component, OnInit } from '@angular/core';
import {PruebaService} from '../../../../services/prueba.service';


@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.sass'],
  providers:[PruebaService]
})
export class ArmasComponent implements OnInit {

  constructor(
    public prueba: PruebaService,

    ) { }

  ngOnInit(): void {

  }



}
