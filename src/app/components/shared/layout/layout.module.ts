import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule, registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';


import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import {FooterComponent} from "./footer/footer.component";
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ModalModule} from "../modal/modal.module";
import {LoginComponent} from "../modal/login/login.component";


registerLocaleData(en);

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoginComponent


    // LoadingComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoginComponent



  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgZorroAntdModule,




  ],
  providers: [],
  entryComponents: [LoginComponent],
})
export class LayoutModule { }
