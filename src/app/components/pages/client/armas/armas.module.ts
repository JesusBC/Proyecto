import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArmasComponent } from './armas.component';
import { ArmasPageRoutingModule} from './armas-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';
import {NgZorroAntdModule, NzGridModule, NzModalComponent} from "ng-zorro-antd";
import {SharedModule} from "../../../shared/shared.module";









@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ArmasPageRoutingModule,
    LayoutModule,
    NzGridModule,
    NgZorroAntdModule,
    SharedModule,

  ],
  declarations: [ArmasComponent],
  exports: []
})
export class ArmasPageModule {}
