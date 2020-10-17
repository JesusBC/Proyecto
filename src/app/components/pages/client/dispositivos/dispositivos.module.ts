import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DispositivosComponent } from './dispositivos.component';
import { DispositivosPageRoutingModule} from './dispositivos-routing.module';
import {LayoutModule} from '../../../shared/layout/layout.module';







@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DispositivosPageRoutingModule,
    LayoutModule,
  ],
  declarations: [DispositivosComponent],
  exports: []
})
export class DispositivosPageModule {}
