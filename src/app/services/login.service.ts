import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(
    private httpClient: HttpClient,
    private  authService: AuthService
  ) { }


  login(login){
    return this.httpClient.post(this.authService.API+'login',login,{headers: this.authService.headers} )
  }
}
