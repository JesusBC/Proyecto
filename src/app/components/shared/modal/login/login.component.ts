import { Component, OnInit } from '@angular/core';
import {Login} from "../../../../models/login";
import {NzModalRef} from "ng-zorro-antd";
import {LoginService} from '../../../../services/login.service';
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
 login: Login ={code: null, password:null, getToken: true}
  constructor( private  modal:NzModalRef,
               private LoginService: LoginService,
               private authService: AuthService,
               private  route: Router) { }

  ngOnInit() {
  }
  cancelar()
  {
    this.modal.destroy();
  }

  form()
  {

    console.log('Datos enviados')
    console.log(this.login );
    localStorage.setItem('userL',JSON.stringify(this.login));
    this.datoslogin(this.login);
  }

  datoslogin(lo)
  {
    this.LoginService.login(lo).subscribe((Token)  =>{
      console.log('respuesta del servidor')
      console.log(Token);
      console.log('ya hay token')
      let token = Token['data'];
      console.log(token)
      if (token['status']== 'success'){

        this.authService.Header(token['data']);
        localStorage.setItem('token',JSON.stringify(token['data']));
        console.log('sirve')
        setTimeout(()=>{
          this.route.navigate(['admin']);
        }, 500);
      }
    }, error => {
      console.log('Error enn los datos')
      console.log(error)
    });
  }

}
