import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DispositivosComponent } from './dispositivos.component';
import { DispositivosPageRoutingModule} from './dispositivos-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {NgZorroAntdModule, NzGridModule} from "ng-zorro-antd";







@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DispositivosPageRoutingModule,
    LayoutModule,
    NzGridModule,
    NgZorroAntdModule,
  ],
  declarations: [DispositivosComponent],
  exports: []
})
export class DispositivosPageModule {}
