import { Component, OnInit } from '@angular/core';
import {LoginComponent} from "../../modal/login/login.component";
import {NzModalService} from "ng-zorro-antd";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],

})
export class HeaderComponent implements OnInit {

  constructor(
    public modalService: NzModalService
  ) { }

  ngOnInit() {
  }
  showModalLogin(){
    console.log('llamando la funcion')


    const  modal = this.modalService.create({
      nzTitle: 'LOGIN' ,
      nzContent: LoginComponent,
      nzFooter: null,
    });
  }

}
