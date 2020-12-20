import { Component, OnInit } from '@angular/core';
import {PruebaService} from "../../../services/prueba.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  providers:[PruebaService]
})
export class AdminComponent implements OnInit {

  constructor(


  ) { }

  ngOnInit() {
  }



}
