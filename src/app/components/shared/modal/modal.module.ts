import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { RouterModule } from '@angular/router';

import {NgZorroAntdModule, NzCardModule, NzGridModule} from "ng-zorro-antd";
import {LayoutModule} from "../layout/layout.module";
import { EspecificacionesComponent } from './especificaciones/especificaciones.component';




registerLocaleData(en);

@NgModule({
  declarations: [
  EspecificacionesComponent,
 ],
  exports: [EspecificacionesComponent],
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
  entryComponents: [EspecificacionesComponent],
  providers: [],
})
export class ModalModule { }
