import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {AdminComponent} from './admin.component';

import {LayoutModule} from '../../shared/layout/layout.module';
import {AdminPageRoutingModule} from './admin-routing.module';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {AgregarComponent} from "../../shared/modal/agregar/agregar.component";
import {ActualizarComponent} from "../../shared/modal/actualizar/actualizar.component";





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminPageRoutingModule,
    LayoutModule,
    NgZorroAntdModule,
  ],
  declarations: [AdminComponent, MenuAdminComponent, AgregarComponent ,ActualizarComponent],
  exports: [ AgregarComponent, ActualizarComponent],
  entryComponents:[AgregarComponent, ActualizarComponent]
})
export class AdminPageModule {}
