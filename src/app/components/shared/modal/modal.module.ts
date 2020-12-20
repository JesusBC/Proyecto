import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { RouterModule } from '@angular/router';

import {NgZorroAntdModule, NzCardModule, NzGridModule} from "ng-zorro-antd";
import {LayoutModule} from "../layout/layout.module";
import { EspecificacionesComponent } from './especificaciones/especificaciones.component';

import { Especificaciones2Component } from './especificaciones2/especificaciones2.component';








registerLocaleData(en);

@NgModule({
  declarations: [
  EspecificacionesComponent,

  Especificaciones2Component,








 ],
  exports: [EspecificacionesComponent,Especificaciones2Component],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    NzGridModule,
    NzCardModule,
    NgZorroAntdModule,
    LayoutModule,



  ],
  entryComponents: [EspecificacionesComponent,Especificaciones2Component],
  providers: [],
})
export class ModalModule { }
