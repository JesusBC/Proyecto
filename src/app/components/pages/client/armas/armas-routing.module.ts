import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArmasComponent} from './armas.component';



const routes: Routes = [
  {
    path: '',
    component: ArmasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArmasPageRoutingModule {}
